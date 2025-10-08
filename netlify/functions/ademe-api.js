<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
    <meta name="apple-mobile-web-app-title" content="DPE Pro">
    <link rel="apple-touch-icon" href="icon-512.png">
    <meta name="theme-color" content="#667eea">
    <title>DPE Prospection Pro</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            -webkit-tap-highlight-color: transparent;
        }

        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
            background: #f5f5f7;
            overflow-x: hidden;
            padding-bottom: 70px;
        }

        .header {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            padding: 20px 20px 15px;
            position: sticky;
            top: 0;
            z-index: 100;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        }

        .header h1 {
            font-size: 1.5em;
            font-weight: 700;
            display: flex;
            align-items: center;
            justify-content: space-between;
        }

        .agent-button {
            background: rgba(255,255,255,0.2);
            border: 1px solid rgba(255,255,255,0.3);
            color: white;
            padding: 5px 10px;
            border-radius: 8px;
            font-size: 0.8em;
            cursor: pointer;
        }

        .header p {
            font-size: 0.9em;
            opacity: 0.9;
            margin-top: 5px;
        }

        .container {
            padding: 15px;
        }

        .search-card {
            background: white;
            border-radius: 15px;
            padding: 20px;
            margin-bottom: 15px;
            box-shadow: 0 2px 15px rgba(0,0,0,0.08);
        }

        .form-group {
            margin-bottom: 20px;
        }

        label {
            display: block;
            font-weight: 600;
            margin-bottom: 8px;
            color: #333;
        }

        select, input {
            width: 100%;
            padding: 12px;
            border: 2px solid #e5e5e7;
            border-radius: 10px;
            font-size: 16px;
            transition: all 0.3s;
        }

        select:focus, input:focus {
            outline: none;
            border-color: #667eea;
            box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
        }

        button {
            width: 100%;
            padding: 14px;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            border: none;
            border-radius: 12px;
            font-size: 17px;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s;
            box-shadow: 0 4px 15px rgba(102, 126, 234, 0.3);
        }

        button:active {
            transform: scale(0.98);
        }

        button:disabled {
            opacity: 0.7;
            cursor: not-allowed;
        }

        .loading {
            text-align: center;
            padding: 40px;
            color: #666;
        }

        .spinner {
            border: 3px solid #f3f3f3;
            border-top: 3px solid #667eea;
            border-radius: 50%;
            width: 40px;
            height: 40px;
            animation: spin 1s linear infinite;
            margin: 0 auto 20px;
        }

        @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }

        .result-card {
            background: white;
            border-radius: 15px;
            padding: 15px;
            margin-bottom: 15px;
            box-shadow: 0 2px 10px rgba(0,0,0,0.08);
            transition: all 0.3s;
        }

        .result-card:active {
            transform: scale(0.98);
        }

        .dpe-badge {
            display: inline-block;
            padding: 6px 12px;
            border-radius: 8px;
            font-weight: bold;
            font-size: 14px;
            margin-right: 10px;
            color: white;
        }

        .dpe-a { background: #00a06d; }
        .dpe-b { background: #51b84b; }
        .dpe-c { background: #c8d419; }
        .dpe-d { background: #fcee21; color: #333; }
        .dpe-e { background: #fdb930; }
        .dpe-f { background: #f3671f; }
        .dpe-g { background: #ed1c24; }
        .dpe-na { background: #999; }

        .address {
            font-size: 16px;
            font-weight: 600;
            margin: 10px 0;
            color: #1d1d1f;
        }

        .details {
            font-size: 14px;
            color: #666;
            line-height: 1.6;
        }

        .action-buttons {
            margin-top: 15px;
            display: flex;
            gap: 10px;
        }

        .action-button {
            flex: 1;
            padding: 10px;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            border: none;
            border-radius: 10px;
            font-size: 14px;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s;
        }

        .action-button:active {
            transform: scale(0.95);
        }

        .map-button {
            background: linear-gradient(135deg, #00c896 0%, #00a06d 100%);
        }

        .modelo-button {
            background: linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%);
            width: 100%;
            margin-top: 10px;
        }

        .modelo-button:disabled {
            background: linear-gradient(135deg, #10b981 0%, #059669 100%);
            cursor: not-allowed;
        }

        .modelo-button.error {
            background: linear-gradient(135deg, #ef4444 0%, #dc2626 100%);
        }

        .stats-card {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            border-radius: 15px;
            padding: 20px;
            margin-bottom: 15px;
            box-shadow: 0 4px 20px rgba(102, 126, 234, 0.3);
        }

        .stats-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 15px;
            margin-top: 15px;
        }

        .stat-item {
            text-align: center;
        }

        .stat-value {
            font-size: 24px;
            font-weight: bold;
        }

        .stat-label {
            font-size: 12px;
            opacity: 0.9;
            margin-top: 5px;
        }

        .route-button {
            background: linear-gradient(135deg, #ff6b6b 0%, #ee5a24 100%);
            margin-bottom: 15px;
            display: none;
        }

        .export-button {
            background: linear-gradient(135deg, #10b981 0%, #059669 100%);
            margin-bottom: 15px;
            display: none;
        }

        .error {
            background: #fee;
            color: #c33;
            padding: 15px;
            border-radius: 10px;
            margin-top: 15px;
            text-align: center;
        }

        .info-message {
            background: #e8f4fd;
            color: #0066cc;
            padding: 15px;
            border-radius: 10px;
            margin: 15px 0;
            text-align: center;
        }

        .success-badge {
            display: inline-block;
            background: #10b981;
            color: white;
            padding: 4px 8px;
            border-radius: 4px;
            font-size: 12px;
            margin-left: 10px;
        }

        .class-distribution {
            display: flex;
            gap: 8px;
            margin-top: 10px;
            flex-wrap: wrap;
        }

        .class-stat {
            padding: 4px 8px;
            border-radius: 6px;
            font-size: 12px;
            font-weight: bold;
            color: white;
        }
    </style>
</head>
<body>
    <div class="header">
        <h1>
            🏠 DPE Prospection Pro
            <button class="agent-button" onclick="setAgentName()">⚙️ Agent</button>
        </h1>
        <p id="location-info">📍 Données en temps réel ADEME</p>
    </div>

    <div class="container">
        <div class="search-card">
            <div class="form-group">
                <label for="postal-code">📍 Code Postal (5 chiffres)</label>
                <input 
                    type="text" 
                    id="postal-code" 
                    placeholder="Ex: 76260, 75001, 13000..." 
                    maxlength="5"
                    pattern="[0-9]{5}"
                    value="76260"
                    onkeypress="return event.charCode >= 48 && event.charCode <= 57"
                >
                <small style="color: #666; font-size: 12px; margin-top: 5px; display: block;">
                    Entrez n'importe quel code postal français
                </small>
            </div>

            <div class="form-group">
                <label for="year">📅 Année</label>
                <select id="year">
                    <option value="2025">2025</option>
                    <option value="2024" selected>2024</option>
                    <option value="2023">2023</option>
                    <option value="2022">2022</option>
                    <option value="2021">2021</option>
                </select>
            </div>

            <div class="form-group">
                <label for="month">📆 Mois</label>
                <select id="month">
                    <option value="">Tous les mois</option>
                    <option value="01">Janvier</option>
                    <option value="02">Février</option>
                    <option value="03">Mars</option>
                    <option value="04">Avril</option>
                    <option value="05">Mai</option>
                    <option value="06">Juin</option>
                    <option value="07">Juillet</option>
                    <option value="08">Août</option>
                    <option value="09">Septembre</option>
                    <option value="10">Octobre</option>
                    <option value="11">Novembre</option>
                    <option value="12">Décembre</option>
                </select>
            </div>

            <div class="form-group">
                <label for="dpe-class">🏷️ Classe DPE (optionnel)</label>
                <select id="dpe-class">
                    <option value="">Toutes les classes</option>
                    <option value="A">A - Excellent</option>
                    <option value="B">B - Très bon</option>
                    <option value="C">C - Bon</option>
                    <option value="D">D - Moyen</option>
                    <option value="E">E - Médiocre</option>
                    <option value="F">F - Mauvais</option>
                    <option value="G">G - Très mauvais</option>
                </select>
            </div>

            <button onclick="searchDPE()">🔍 Rechercher les DPE</button>
        </div>

        <div id="results"></div>
    </div>

    <script>
        // Configuration
        const NETLIFY_MODELO_API = 'https://cheerful-rolypoly-6eb798.netlify.app/api/modelo';
        const NETLIFY_ADEME_API = 'https://cheerful-rolypoly-6eb798.netlify.app/api/ademe';
        
        let currentData = [];
        let lastSearch = {};

        // Fonction pour définir le nom de l'agent
        function setAgentName() {
            const currentAgent = localStorage.getItem('agent_name');
            const newAgent = prompt('Nom de l\'agent commercial :', currentAgent || '');
            
            if (newAgent) {
                localStorage.setItem('agent_name', newAgent);
                alert(`✅ Agent défini : ${newAgent}`);
            }
        }

        // Fonction pour vérifier si un contact a déjà été envoyé
        function isAlreadySentToModelo(address) {
            const sentContacts = JSON.parse(localStorage.getItem('modelo_sent_contacts') || '[]');
            return sentContacts.some(contact => contact.address === address);
        }

        // Fonction pour envoyer à Modelo
        async function sendToModelo(dpeData) {
            const button = event.target;
            const originalText = button.textContent;
            button.disabled = true;
            button.textContent = '⏳ Envoi en cours...';
            
            try {
                const contactData = {
                    firstName: 'Prospect',
                    lastName: `DPE ${dpeData.numero_rue || ''} ${dpeData.nom_rue || ''}`.trim(),
                    phone: '',
                    email: '',
                    address: `${dpeData.numero_rue || ''} ${dpeData.type_voie || ''} ${dpeData.nom_rue || ''}`.trim(),
                    city: dpeData.commune || '',
                    postalCode: dpeData.code_postal || '',
                    dpeClass: dpeData.classe_dpe || '',
                    dpeDate: dpeData.date_dpe || '',
                    surface: dpeData.surface || '',
                    propertyType: dpeData.type_batiment || '',
                    agent: localStorage.getItem('agent_name') || 'App DPE Pro'
                };
                
                const response = await fetch(NETLIFY_MODELO_API, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(contactData)
                });
                
                const result = await response.json();
                
                if (response.ok && result.success) {
                    button.textContent = '✅ Envoyé à Modelo !';
                    button.style.background = 'linear-gradient(135deg, #10b981 0%, #059669 100%)';
                    button.disabled = true;
                    
                    const sentContacts = JSON.parse(localStorage.getItem('modelo_sent_contacts') || '[]');
                    sentContacts.push({
                        address: contactData.address,
                        date: new Date().toISOString(),
                        modeloId: result.modeloId
                    });
                    localStorage.setItem('modelo_sent_contacts', JSON.stringify(sentContacts));
                    
                    setTimeout(() => {
                        alert(`✅ Contact créé dans Modelo !\n\nAdresse : ${contactData.address}\nClasse DPE : ${contactData.dpeClass}`);
                    }, 100);
                    
                } else {
                    throw new Error(result.error || 'Erreur lors de l\'envoi');
                }
                
            } catch (error) {
                console.error('Erreur Modelo:', error);
                button.textContent = '❌ Erreur d\'envoi';
                button.classList.add('error');
                button.disabled = false;
                
                alert(`❌ Erreur lors de l'envoi à Modelo :\n\n${error.message}\n\nVérifiez votre connexion et réessayez.`);
                
                setTimeout(() => {
                    button.textContent = originalText;
                    button.classList.remove('error');
                }, 3000);
            }
        }

        // Fonction pour rechercher les DPE depuis l'API ADEME
        async function searchDPE() {
            const postalCode = document.getElementById('postal-code').value.trim();
            const year = document.getElementById('year').value;
            const month = document.getElementById('month').value;
            const dpeClass = document.getElementById('dpe-class').value;
            const resultsDiv = document.getElementById('results');
            
            // Valider le code postal
            if (!/^[0-9]{5}$/.test(postalCode)) {
                resultsDiv.innerHTML = `
                    <div class="error">
                        ❌ Code postal invalide<br>
                        <small>Veuillez entrer un code postal français à 5 chiffres</small>
                    </div>
                `;
                return;
            }
            
            // Sauvegarder les paramètres de recherche
            lastSearch = { postalCode, year, month, dpeClass };
            
            // Afficher le chargement
            resultsDiv.innerHTML = `
                <div class="loading">
                    <div class="spinner"></div>
                    <p>🔍 Recherche des DPE dans la base ADEME...</p>
                    <p style="font-size: 12px; margin-top: 10px;">Code postal : ${postalCode} - Année : ${year}</p>
                </div>
            `;
            
            try {
                // Construire l'URL avec les paramètres
                const params = new URLSearchParams({
                    code_postal: postalCode,
                    year: year,
                    month: month || '',
                    dpe_class: dpeClass || ''
                });
                
                const url = `${NETLIFY_ADEME_API}?${params.toString()}`;
                console.log('Appel API ADEME via Netlify:', url);
                
                // Appeler l'API via la fonction Netlify
                const response = await fetch(url);
                
                if (!response.ok) {
                    throw new Error(`Erreur serveur: ${response.status}`);
                }
                
                const data = await response.json();
                console.log('Réponse API:', data);
                
                if (data.success && data.results) {
                    currentData = data.results;
                    displayResults(data);
                } else {
                    throw new Error(data.error || 'Aucune donnée reçue');
                }
                
            } catch (error) {
                console.error('Erreur:', error);
                resultsDiv.innerHTML = `
                    <div class="error">
                        ⚠️ Erreur lors de la récupération des données<br>
                        <small>${error.message}</small><br><br>
                        <button onclick="searchDPE()" style="padding: 10px 20px;">🔄 Réessayer</button>
                    </div>
                `;
            }
        }

        // Function pour afficher les résultats
        function displayResults(data) {
            const resultsDiv = document.getElementById('results');
            const results = data.results || [];
            
            if (results.length === 0) {
                resultsDiv.innerHTML = `
                    <div class="info-message">
                        Aucun DPE trouvé pour le code postal ${lastSearch.postalCode} en ${lastSearch.year}<br>
                        <small>Essayez une autre période ou un autre code postal</small>
                    </div>
                `;
                return;
            }
            
            // Mettre à jour l'affichage de la localisation
            const commune = results[0]?.commune || '';
            if (commune) {
                document.getElementById('location-info').innerHTML = `📍 ${commune} (${lastSearch.postalCode}) <span class="success-badge">EN DIRECT ADEME</span>`;
            }
            
            // Calculer les statistiques par classe
            const classStats = {};
            results.forEach(dpe => {
                const classe = dpe.classe_dpe || 'N/A';
                classStats[classe] = (classStats[classe] || 0) + 1;
            });
            
            // Trier par rue et numéro
            const sorted = sortByAddress(results);
            
            // Stats
            const stats = `
                <div class="stats-card">
                    <h3>📊 Résultats de recherche (données ADEME en direct)</h3>
                    <div class="stats-grid">
                        <div class="stat-item">
                            <div class="stat-value">${sorted.length}</div>
                            <div class="stat-label">DPE trouvés</div>
                        </div>
                        <div class="stat-item">
                            <div class="stat-value">${lastSearch.month ? getMonthName(lastSearch.month) : 'Année'}</div>
                            <div class="stat-label">${lastSearch.year}</div>
                        </div>
                    </div>
                    <div class="class-distribution">
                        ${Object.entries(classStats).map(([classe, count]) => 
                            `<span class="class-stat dpe-${classe.toLowerCase()}">${classe}: ${count}</span>`
                        ).join('')}
                    </div>
                </div>
            `;
            
            // Bouton itinéraire
            let routeButton = '';
            if (sorted.length > 0) {
                routeButton = `
                    <button class="route-button" onclick='createGoogleMapsRoute()' style="display: block;">
                        🗺️ Créer l'itinéraire optimisé dans Google Maps
                    </button>
                `;
            }
            
            // Bouton export CSV
            let exportButton = '';
            if (sorted.length > 0) {
                exportButton = `
                    <button class="export-button" onclick='exportToCSV()' style="display: block;">
                        💾 Exporter en CSV
                    </button>
                `;
            }
            
            // Cartes de résultats (limiter à 100 pour les performances)
            let cards = '';
            const displayCount = Math.min(sorted.length, 100);
            
            for (let i = 0; i < displayCount; i++) {
                const dpe = sorted[i];
                const address = `${dpe.numero_rue || ''} ${dpe.type_voie || ''} ${dpe.nom_rue || ''}`.trim();
                const isAlreadySent = isAlreadySentToModelo(address);
                
                cards += `
                    <div class="result-card">
                        <span class="dpe-badge dpe-${(dpe.classe_dpe || 'na').toLowerCase()}">
                            DPE ${dpe.classe_dpe || 'N/A'}
                        </span>
                        <span class="dpe-badge dpe-${(dpe.classe_ges || 'na').toLowerCase()}">
                            GES ${dpe.classe_ges || 'N/A'}
                        </span>
                        <div class="address">📍 ${address || 'Adresse non spécifiée'}</div>
                        <div class="details">
                            📅 DPE du : ${formatDate(dpe.date_dpe)}<br>
                            📐 Surface : ${dpe.surface || 'N/A'} m²<br>
                            🏠 Type : ${dpe.type_batiment || 'N/A'}
                        </div>
                        <div class="action-buttons">
                            <button class="action-button map-button" onclick='openGoogleMaps("${address}, ${lastSearch.postalCode}")'>
                                📍 Google Maps
                            </button>
                        </div>
                        <button 
                            class="action-button modelo-button ${isAlreadySent ? '' : ''}"
                            onclick='sendToModelo(${JSON.stringify(dpe).replace(/'/g, "\\'").replace(/"/g, '&quot;')})'
                            ${isAlreadySent ? 'disabled' : ''}
                        >
                            ${isAlreadySent ? '✅ Déjà dans Modelo' : '📤 Envoyer à Modelo'}
                        </button>
                    </div>
                `;
            }
            
            if (sorted.length > displayCount) {
                cards += `
                    <div class="info-message">
                        Affichage des ${displayCount} premiers résultats sur ${sorted.length} total<br>
                        <small>Exportez en CSV pour obtenir la liste complète</small>
                    </div>
                `;
            }
            
            resultsDiv.innerHTML = stats + routeButton + exportButton + cards;
        }

        // Fonction pour trier par adresse
        function sortByAddress(addresses) {
            // Grouper par rue
            const streetGroups = {};
            for (const addr of addresses) {
                const streetKey = `${addr.type_voie || ''} ${addr.nom_rue || ''}`;
                if (!streetGroups[streetKey]) {
                    streetGroups[streetKey] = [];
                }
                streetGroups[streetKey].push(addr);
            }

            // Trier chaque groupe par numéro
            for (const street in streetGroups) {
                streetGroups[street].sort((a, b) => {
                    const numA = parseInt(a.numero_rue) || 0;
                    const numB = parseInt(b.numero_rue) || 0;
                    return numA - numB;
                });
            }

            // Reconstituer la liste triée
            const sorted = [];
            const sortedStreets = Object.keys(streetGroups).sort();
            for (const street of sortedStreets) {
                sorted.push(...streetGroups[street]);
            }

            return sorted;
        }

        // Fonction pour créer l'itinéraire Google Maps
        function createGoogleMapsRoute() {
            if (currentData.length === 0) return;
            
            const destination = encodeURIComponent(`${lastSearch.postalCode}, France`);
            
            const waypoints = currentData.slice(0, 23).map(addr => {
                const fullAddr = `${addr.numero_rue || ''} ${addr.type_voie || ''} ${addr.nom_rue || ''}, ${lastSearch.postalCode} France`;
                return encodeURIComponent(fullAddr);
            }).join('/');
            
            const url = `https://www.google.com/maps/dir/${destination}/${waypoints}/${destination}?optimize=true`;
            
            window.open(url, '_blank');
        }

        // Fonction pour ouvrir Google Maps
        function openGoogleMaps(address) {
            const url = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
            window.open(url, '_blank');
        }

        // Fonction pour exporter en CSV
        function exportToCSV() {
            if (currentData.length === 0) return;
            
            const headers = ['Numéro', 'Type voie', 'Nom rue', 'Code postal', 'Commune', 'Classe DPE', 'Classe GES', 'Date DPE', 'Surface', 'Type bâtiment'];
            const csvContent = [
                headers.join(';'),
                ...currentData.map(dpe => [
                    dpe.numero_rue || '',
                    dpe.type_voie || '',
                    dpe.nom_rue || '',
                    dpe.code_postal || '',
                    dpe.commune || '',
                    dpe.classe_dpe || '',
                    dpe.classe_ges || '',
                    dpe.date_dpe || '',
                    dpe.surface || '',
                    dpe.type_batiment || ''
                ].join(';'))
            ].join('\n');
            
            const blob = new Blob(['\ufeff' + csvContent], { type: 'text/csv;charset=utf-8;' });
            const link = document.createElement('a');
            const url = URL.createObjectURL(blob);
            
            link.setAttribute('href', url);
            link.setAttribute('download', `dpe_${lastSearch.postalCode}_${lastSearch.year}.csv`);
            link.style.visibility = 'hidden';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }

        // Fonction pour formater la date
        function formatDate(dateStr) {
            if (!dateStr) return 'Non spécifié';
            try {
                const date = new Date(dateStr);
                return date.toLocaleDateString('fr-FR');
            } catch {
                return dateStr;
            }
        }

        // Fonction pour obtenir le nom du mois
        function getMonthName(month) {
            const months = {
                '01': 'Janvier', '02': 'Février', '03': 'Mars',
                '04': 'Avril', '05': 'Mai', '06': 'Juin',
                '07': 'Juillet', '08': 'Août', '09': 'Septembre',
                '10': 'Octobre', '11': 'Novembre', '12': 'Décembre'
            };
            return months[month] || '';
        }

        // Vérifier si un agent est défini au démarrage
        window.onload = function() {
            const agent = localStorage.getItem('agent_name');
            if (!agent) {
                setTimeout(() => {
                    if (confirm('Voulez-vous définir votre nom d\'agent commercial ?')) {
                        setAgentName();
                    }
                }, 1000);
            }
            
            // Note sur l'année 2024 par défaut
            console.log('Note: L\'année 2024 est sélectionnée par défaut car les données 2025 peuvent ne pas être complètes.');
        };
    </script>
</body>
</html>
