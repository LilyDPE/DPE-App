// Fonction Netlify pour faire le pont avec Modelo Office
// Cette fonction reçoit les données de l'app DPE et les envoie à Modelo

exports.handler = async (event, context) => {
  // Configuration CORS pour permettre les appels depuis l'app
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'POST, OPTIONS'
  };

  // Gérer les requêtes OPTIONS (CORS preflight)
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers,
      body: ''
    };
  }

  // Vérifier que c'est bien une requête POST
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      headers,
      body: JSON.stringify({ error: 'Méthode non autorisée' })
    };
  }

  try {
    // Récupérer les données envoyées par l'app
    const data = JSON.parse(event.body);
    
    // Votre clé API Modelo (à configurer dans Netlify)
    const MODELO_API_KEY = process.env.MODELO_API_KEY || '8851a224-76c7-4172-b8a4-23e95334f485';
    
    // Préparer les données pour Modelo
    const modeloData = {
      firstName: data.firstName || '',
      lastName: data.lastName || '',
      email: data.email || '',
      phone: data.phone || '',
      address: {
        street: data.address || '',
        city: data.city || 'Eu',
        postalCode: data.postalCode || '76260',
        country: 'France'
      },
      customFields: {
        dpe_class: data.dpeClass || '',
        dpe_date: data.dpeDate || '',
        surface: data.surface || '',
        type_bien: data.propertyType || '',
        source: 'App DPE Pro',
        agent: data.agent || ''
      },
      tags: ['Prospect DPE', 'App Mobile', data.dpeClass || 'DPE'],
      notes: `Prospect identifié via l'app DPE Pro.
DPE Classe: ${data.dpeClass || 'Non renseigné'}
Date DPE: ${data.dpeDate || 'Non renseigné'}
Surface: ${data.surface || 'Non renseigné'} m²
Type: ${data.propertyType || 'Non renseigné'}
Agent: ${data.agent || 'Non renseigné'}`
    };

    // Envoyer à Modelo
    const modeloResponse = await fetch('https://api.modelo.fr/v1/contacts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${MODELO_API_KEY}`,
        'Accept': 'application/json'
      },
      body: JSON.stringify(modeloData)
    });

    const responseData = await modeloResponse.json();

    // Vérifier si la requête a réussi
    if (!modeloResponse.ok) {
      console.error('Erreur Modelo:', responseData);
      return {
        statusCode: modeloResponse.status,
        headers,
        body: JSON.stringify({
          error: 'Erreur lors de la création du contact dans Modelo',
          details: responseData
        })
      };
    }

    // Succès !
    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({
        success: true,
        message: 'Contact créé avec succès dans Modelo',
        modeloId: responseData.id || responseData.data?.id,
        contact: responseData
      })
    };

  } catch (error) {
    console.error('Erreur:', error);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({
        error: 'Erreur serveur',
        message: error.message
      })
    };
  }
};
