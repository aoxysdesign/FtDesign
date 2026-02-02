// Fonction simple pour révéler les éléments au scroll
window.addEventListener('scroll', reveal);

function reveal() {
    var reveals = document.querySelectorAll('.reveal');

    for (var i = 0; i < reveals.length; i++) {
        var windowheight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 150; // Déclenche l'anim 150px avant

        if (revealtop < windowheight - revealpoint) {
            reveals[i].classList.add('active');
        } else {
            reveals[i].classList.remove('active');
        }
    }
}

// Déclencher une fois au chargement pour le header
reveal();
window.addEventListener("load", function () {
    const loader = document.querySelector(".loader-wrapper");
    setTimeout(() => {
        loader.classList.add("loader-hidden");
        loader.addEventListener("transitionend", () => {
            if (document.body.contains(loader)) {
                document.body.removeChild(loader);
            }
        });
    }, 1000);
});
/* =========================================
   ANIMATION PARTICULES (Réseau Neuronal)
   ========================================= */

// On vérifie que la librairie est bien chargée avant de lancer
if (typeof particlesJS !== 'undefined') {
    particlesJS('particles-js',
      {
        "particles": {
          "number": {
            "value": 80, // Nombre de points (réduis si ça rame sur mobile)
            "density": {
              "enable": true,
              "value_area": 800
            }
          },
          "color": {
            "value": "#a855f7" // Couleur des points (Ton violet)
          },
          "shape": {
            "type": "circle"
          },
          "opacity": {
            "value": 0.5,
            "random": false
          },
          "size": {
            "value": 3,
            "random": true
          },
          "line_linked": {
            "enable": true,
            "distance": 150,
            "color": "#a855f7", // Couleur des lignes (Ton violet)
            "opacity": 0.4,
            "width": 1
          },
          "move": {
            "enable": true,
            "speed": 2, // Vitesse de déplacement lente
            "direction": "none",
            "random": false,
            "straight": false,
            "out_mode": "out",
            "bounce": false
          }
        },
        "interactivity": {
          "detect_on": "canvas",
          "events": {
            "onhover": {
              "enable": true,
              "mode": "grab" // Les points se connectent à la souris
            },
            "onclick": {
              "enable": true,
              "mode": "push"
            },
            "resize": true
          },
          "modes": {
            "grab": {
              "distance": 140,
              "line_linked": {
                "opacity": 1
              }
            }
          }
        },
        "retina_detect": true
      }
    );
}
/* GESTION DE L'INTRO */
window.addEventListener('load', () => {
    // On attend 2.2 secondes (le temps de l'animation + un petit délai)
    setTimeout(() => {
        const overlay = document.getElementById('intro-overlay');
        if(overlay) {
            overlay.classList.add('intro-finished');
        }
    }, 2200);
});
/* --- IA GÉNÉRATEUR ULTIME (Fusion : Intelligence V7 + Cinématique V8) --- */
function generateFullSite() {
    const input = document.getElementById('ai-input').value.toLowerCase();
    const consoleDiv = document.getElementById('ai-console');
    const loadingDiv = document.getElementById('ai-loading');
    const previewDiv = document.getElementById('ai-preview');
    const loadingText = document.getElementById('loading-text');

    // 1. Reset
    consoleDiv.style.display = 'block';
    loadingDiv.style.display = 'block';
    previewDiv.style.display = 'none';
    loadingText.innerHTML = "";

    // ============================================================
    // PARTIE 1 : L'INTELLIGENCE (Cerveau V7) 🧠
    // ============================================================
    
    // A. NETTOYAGE
    const stopWords = [
        "je", "veux", "un", "une", "site", "pour", "le", "la", "les", "des", "web", "page", 
        "génère", "creer", "mon", "moi", "ma", "mes", "fait", "fais", "fais-moi", 
        "l", "d", "du", "de", "et", "ou", "en", "au", "aux", "a", "sur",
        "agence", "magasin", "boutique", "salon", "entreprise", "societe", "studio", "atelier", 
        "vente", "location", "reparation", "service", "cabinet", "centre"
    ];

    let cleanText = input;
    cleanText = cleanText.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
    stopWords.forEach(word => {
        cleanText = cleanText.replace(new RegExp("\\b" + word + "\\b", "gi"), " ");
    });

    let keywords = cleanText.trim().split(/\s+/);
    let mainSubject = keywords[0] || "business";
    let fullSubject = keywords.join(" "); 
    if(fullSubject.length === 0) fullSubject = "Projet";

    // B. TRADUCTION & IMAGE
    const translator = {
        // MAISON
        "lit": "bed,bedroom", "matelas": "mattress", "meuble": "furniture", "canape": "sofa",
        "cuisine": "kitchen", "bain": "bathroom", "deco": "interior design",
        // LOISIRS
        "farce": "clown,party", "attrape": "prank,toy", "jouet": "toys", "jeu": "gaming",
        "video": "gaming,setup", "console": "playstation", "geek": "computer",
        // TRANSPORT
        "garage": "mechanic,car", "auto": "sportscar", "voiture": "car", 
        "bateau": "boat,yacht", "navire": "ship", "velo": "bicycle", "moto": "motorcycle",
        "location": "car key,rent", "taxi": "taxi",
        // NOURRITURE
        "the": "tea,cup", "cafe": "coffee shop", "biere": "beer", "vin": "wine",
        "boulangerie": "bakery", "pain": "bread", "gateau": "cake", "pizza": "pizza",
        // MÉTIERS
        "immo": "modern house", "maison": "house", "archi": "architecture",
        "coiffure": "haircut", "barbier": "barber", "ongle": "nails",
        "fleur": "flowers", "jardin": "garden", "piscine": "pool",
        "plombier": "plumber", "elec": "electrician", "peintre": "painter",
        "voyage": "tropical beach", "avocat": "lawyer", "comptable": "office",
        "securite": "security camera", "chien": "dog", "chat": "cat"
    };

    let imageTag = "business";
    let color = "#a855f7"; // Violet par défaut

    // Si le mot est connu, on traduit. Sinon, on envoie le mot brut (ex: "licorne")
    if (translator[mainSubject]) {
        imageTag = translator[mainSubject];
    } else {
        imageTag = mainSubject; // C'est ici que la "Licorne" passe !
    }

    // C. COULEURS INTELLIGENTES
    if (imageTag.match(/nature|garden|bio|tea/)) color = "#22c55e"; // Vert
    if (imageTag.match(/water|boat|tech|blue/)) color = "#3b82f6"; // Bleu
    if (imageTag.match(/food|pizza|burger|hot/)) color = "#f97316"; // Orange
    if (imageTag.match(/girl|beauty|flower|cake/)) color = "#ec4899"; // Rose
    if (imageTag.match(/car|gym|game|red/)) color = "#ef4444"; // Rouge

    // D. TITRES
    let displayTitle = fullSubject.charAt(0).toUpperCase() + fullSubject.slice(1);
    const adjectives = ["Pro", "Expert", "Concept", "Univers", "Store", "Shop", "Solutions"];
    const randomAdj = adjectives[Math.floor(Math.random() * adjectives.length)];
    const finalTitle = `${displayTitle} ${randomAdj}`;
    const uniqueId = Math.floor(Math.random() * 10000);

    // ============================================================
    // PARTIE 2 : L'ANIMATION CINÉMATIQUE (Effets V8) 🎬
    // ============================================================

    const sequence = [
        { text: "> Initialisation du noyau IA...", type: "sys" },
        { text: "import { FtDesign_Core } from 'neural_network';", type: "code" },
        { text: "> Analyse de la requête : \"" + fullSubject + "\"", type: "sys" },
        { text: "detecting_keywords( input='" + mainSubject + "' )... OK", type: "code" },
        { text: "fetching_assets( tag='" + imageTag + "' )...", type: "code" }, // Tu verras le tag ici
        { text: "> Génération de la palette de couleurs...", type: "sys" },
        { text: "--primary-color: " + color + ";", type: "code" },
        { text: "> Construction du DOM HTML5...", type: "sys" },
        { text: "<header><h1>" + finalTitle + "</h1></header>", type: "code" },
        { text: "> Finalisation du rendu...", type: "sys" }
    ];

    let lineIndex = 0;
    
    function typeWriter() {
        if (lineIndex < sequence.length) {
            const lineData = sequence[lineIndex];
            const p = document.createElement('div');
            p.className = lineData.type === "sys" ? "sys-line" : "code-line";
            loadingText.appendChild(p);

            let charIndex = 0;
            const text = lineData.text;
            const speed = lineData.type === "sys" ? 30 : 5; 

            const typingInterval = setInterval(() => {
                if (charIndex < text.length) {
                    p.textContent += text.charAt(charIndex);
                    charIndex++;
                    loadingDiv.scrollTop = loadingDiv.scrollHeight;
                } else {
                    clearInterval(typingInterval);
                    lineIndex++;
                    setTimeout(typeWriter, 100);
                }
            }, speed);
            
        } else {
            setTimeout(showSite, 800);
        }
    }

    typeWriter(); // Lancement de l'animation

    // ============================================================
    // PARTIE 3 : LE RENDU DU SITE (Visuel V7) 🚀
    // ============================================================
    function showSite() {
        loadingDiv.style.display = 'none';
        previewDiv.style.display = 'block';

        const siteHTML = `
            <div style="padding: 15px 20px; display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid #eee;">
                <div style="font-weight: bold; font-size: 1.2rem; color: ${color};">${finalTitle.toUpperCase()}</div>
                <div style="font-size: 0.8rem; color: #666;">Accueil &nbsp; Services &nbsp; Contact</div>
            </div>

            <div style="height: 280px; position: relative; overflow: hidden; display: flex; align-items: center; justify-content: center; text-align: center; color: white;">
                <img src="https://loremflickr.com/800/500/${imageTag}/all?lock=${uniqueId}" style="position: absolute; width: 100%; height: 100%; object-fit: cover; filter: brightness(0.4);">
                
                <div style="position: relative; z-index: 2; padding: 20px;">
                    <h1 style="font-size: 2.2rem; margin: 0; text-transform: uppercase; letter-spacing: 1px; text-shadow: 0 2px 10px rgba(0,0,0,0.5);">${finalTitle}</h1>
                    <p style="margin-top: 10px; font-size: 1rem; opacity: 0.9; max-width: 400px; margin-left: auto; margin-right: auto;">
                        Bienvenue chez le spécialiste n°1 en ${fullSubject}. 
                        Nous réalisons vos projets avec passion.
                    </p>
                    <button style="margin-top: 20px; background: ${color}; color: white; border: none; padding: 10px 30px; border-radius: 50px; font-weight: bold; cursor: pointer; box-shadow: 0 4px 15px rgba(0,0,0,0.3);">
                        Découvrir
                    </button>
                </div>
            </div>

            <div style="padding: 40px 20px; text-align: center; background: white;">
                <h3 style="color: #222; margin-bottom: 30px; font-size: 1.5rem;">Pourquoi choisir ${finalTitle} ?</h3>
                <div style="display: flex; gap: 15px; justify-content: center; flex-wrap: wrap;">
                    <div style="background: #f8f9fa; padding: 20px; border-radius: 12px; flex: 1; min-width: 120px;">
                        <div style="color: ${color}; font-size: 1.5rem; margin-bottom: 10px;">★</div>
                        <h4 style="margin: 0; font-size: 0.9rem; color: #333;">Savoir-faire</h4>
                    </div>
                    <div style="background: #f8f9fa; padding: 20px; border-radius: 12px; flex: 1; min-width: 120px;">
                        <div style="color: ${color}; font-size: 1.5rem; margin-bottom: 10px;">⚡</div>
                        <h4 style="margin: 0; font-size: 0.9rem; color: #333;">Disponibilité</h4>
                    </div>
                    <div style="background: #f8f9fa; padding: 20px; border-radius: 12px; flex: 1; min-width: 120px;">
                        <div style="color: ${color}; font-size: 1.5rem; margin-bottom: 10px;">❤</div>
                        <h4 style="margin: 0; font-size: 0.9rem; color: #333;">Qualité</h4>
                    </div>
                </div>
            </div>
            
            <div style="background: linear-gradient(to right, #111, #222); color: white; padding: 15px; text-align: center; font-size: 0.9rem;">
                <p style="margin-bottom: 5px; color: #ccc;">Site généré par IA pour : ${fullSubject}.</p>
                <a href='commande.html' style='color: ${color}; font-weight: bold; text-decoration: underline; font-size: 1rem;'>
                    Obtenir ce site maintenant (150€)
                </a>
            </div>
        `;

        previewDiv.innerHTML = siteHTML;
    }
}
/* --- VARIABLES GLOBALES (Dictionnaire enrichi) --- */
const dictionary = {
    // Maison / Travaux
    "lit": "bed,bedroom", "meuble": "furniture", "cuisine": "kitchen", "bain": "bathroom",
    "plombier": "plumber", "elec": "electrician", "peintre": "painter", "jardin": "garden",
    "immo": "modern house", "maison": "luxury house", "archi": "architecture",
    
    // Loisirs / Fun
    "farce": "clown", "jeu": "gaming", "video": "gaming setup", "film": "cinema",
    "voyage": "tropical beach", "avion": "airplane", "bateau": "yacht",
    
    // Commerce / Bouffe
    "restaurant": "restaurant,food", "resto": "restaurant", "pizza": "pizza", "burger": "burger",
    "boulangerie": "bakery", "pain": "bread", "gateau": "cake", "the": "tea,cup", "cafe": "coffee shop",
    "fleur": "florist", "bijou": "jewelry", "mode": "fashion", "vetement": "clothing store",
    
    // Services
    "coiffure": "haircut", "barbier": "barber", "ongle": "nails", "spa": "spa massage",
    "avocat": "lawyer", "comptable": "office", "garage": "mechanic", "voiture": "sportscar",
    "dentiste": "dentist", "medecin": "doctor"
};

/* --- 1. LE PETIT GÉNÉRATEUR (APPÂT) --- */
function generateFullSite() {
    const input = document.getElementById('ai-input').value;
    const consoleDiv = document.getElementById('ai-console');
    const loadingText = document.getElementById('loading-text');
    const previewDiv = document.getElementById('ai-preview');
    const loadingDiv = document.getElementById('ai-loading');

    // Reset
    consoleDiv.style.display = 'block';
    loadingDiv.style.display = 'block';
    previewDiv.style.display = 'none';
    loadingText.innerHTML = "> Analyse rapide...";

    // Simulation rapide
    setTimeout(() => {
        loadingDiv.style.display = 'none';
        previewDiv.style.display = 'block';
        
        // On récupère le mot clé intelligent même ici
        let keyword = extractKeyword(input);

        previewDiv.innerHTML = `
            <div style="padding: 30px; text-align: center; color: black;">
                <h3 style="margin-bottom: 10px;">Structure identifiée pour : <span style="color:#a855f7; text-transform: capitalize;">${keyword}</span></h3>
                <div style="font-size: 3rem; margin: 20px;">✨</div>
                <p>Le modèle est prêt à être généré en haute définition.</p>
                
                <button onclick="openAdvancedBuilder('${input.replace(/'/g, "\\'")}')" style="margin-top: 15px; background: #a855f7; color: white; border: none; padding: 12px 25px; border-radius: 5px; font-weight: bold; cursor: pointer;">
                    Voir le site complet <i class="fas fa-arrow-right"></i>
                </button>
            </div>
        `;
    }, 1500);
}

/* --- 2. OUVERTURE DU "MODE CRÉATEUR" --- */
function openAdvancedBuilder(preFilledText) {
    const builder = document.getElementById('advanced-builder');
    const inputArea = document.getElementById('advanced-input');
    builder.style.display = 'flex';
    if(preFilledText) {
        inputArea.value = preFilledText; // On remet la phrase telle quelle
    }
}

function closeBuilder() {
    document.getElementById('advanced-builder').style.display = 'none';
    document.getElementById('builder-input-screen').style.display = 'flex';
    document.getElementById('builder-loading').style.display = 'none';
    document.getElementById('builder-result').style.display = 'none';
}

/* --- FONCTION INTELLIGENTE D'EXTRACTION (VERSION BLINDÉE) --- */
function extractKeyword(text) {
    // LISTE NOIRE ATOMIQUE (Tous les mots à bannir)
    const stopWords = [
        // Pronoms & Articles
        "je", "tu", "il", "nous", "vous", "le", "la", "les", "un", "une", "des", "du", "de", "d", "l", "au", "aux", "en", "ce", "cet", "cette", "ces", "mon", "ton", "son", "ma", "ta", "sa", "mes", "tes", "ses", "moi", "toi", "lui",
        // Verbes d'action & Intention (Le piège !)
        "veux", "voudrais", "aimerais", "souhaite", "faut", "besoin", "cherche", "trouver",
        "creer", "créer", "cree", "crée", "creation", "création", "generer", "générer", "genere", "génère", "generation", "génération",
        "faire", "fais", "fait", "fabriquer", "construire", "realiser", "réaliser", "concevoir", "avoir", "obtenir", "lancer", "ouvrir", "monter",
        // Mots liés au Web (qui ne sont pas le métier)
        "site", "web", "internet", "page", "onepage", "vitrine", "blog", "ecommerce", "boutique", "online", "ligne", "agence", "plateforme", "portail", "app", "application", "logiciel", "projet", "business", "societe", "entreprise", "boite", "magasin", "shop", "store", "studio", "atelier", "cabinet", "centre",
        // Prépositions & Liaisons
        "pour", "sur", "avec", "sans", "et", "ou", "par", "dans", "vers", "chez", "comme", "style", "genre", "type"
    ];

    // 1. On nettoie le texte (minuscules + on enlève la ponctuation)
    let cleanText = text.toLowerCase().replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g," ");
    
    // 2. On découpe en mots
    let words = cleanText.split(/\s+/); // Le \s+ gère les espaces multiples
    
    // 3. FILTRAGE
    // On garde uniquement les mots qui NE SONT PAS dans la liste noire
    let filteredWords = words.filter(w => !stopWords.includes(w) && w.length > 2);
    
    // 4. SÉCURITÉ
    // Si après tout ça il ne reste rien (ex: le mec tape n'importe quoi), on met "Business"
    if (filteredWords.length === 0) return "business";

    // 5. SELECTION DU MEILLEUR MOT
    // On prend le dernier mot restant (souvent le métier est à la fin : "Site pour un *Plombier*")
    // OU on prend le mot le plus long (souvent le plus significatif)
    
    // Ici, on va prendre le mot le plus long restant, c'est souvent la meilleure technique
    let bestWord = filteredWords.reduce((a, b) => a.length > b.length ? a : b);
    
    return bestWord;
}

/* --- 3. ANALYSE INTELLIGENTE & GÉNÉRATION --- */

// Dictionnaire des ambiances (Pour changer le style du site)
const styles = {
    "luxe": { font: "serif", radius: "0px", bg: "#111", text: "#fff" },
    "prestige": { font: "serif", radius: "0px", bg: "#0a0a0a", text: "#f5f5f5" },
    "moderne": { font: "'Inter', sans-serif", radius: "20px", bg: "#fff", text: "#333" },
    "minimaliste": { font: "'Inter', sans-serif", radius: "5px", bg: "#f9f9f9", text: "#555" },
    "fun": { font: "comic-sans, sans-serif", radius: "50px", bg: "#fff", text: "#333" },
    "defaut": { font: "'Inter', sans-serif", radius: "15px", bg: "#fff", text: "#333" }
};

// Dictionnaire des couleurs
const colors = {
    "rouge": "#ef4444", "bleu": "#3b82f6", "vert": "#22c55e", 
    "jaune": "#eab308", "violet": "#a855f7", "rose": "#ec4899",
    "noir": "#333333", "or": "#d4af37", "orange": "#f97316"
};

function runAdvancedGeneration() {
    const input = document.getElementById('advanced-input').value.toLowerCase();
    const inputScreen = document.getElementById('builder-input-screen');
    const loadingScreen = document.getElementById('builder-loading');
    const resultScreen = document.getElementById('builder-result');
    const terminal = document.getElementById('builder-terminal');

    // 1. Transition visuelle
    inputScreen.style.display = 'none';
    loadingScreen.style.display = 'flex';
    terminal.innerHTML = "";

    // 2. --- LE CERVEAU DE L'IA (ANALYSE) ---
    
    // A. Trouver le Métier (Mot clé principal)
    let keyword = extractKeyword(input);
    let imageTag = dictionary[keyword] || keyword; 

    // B. Trouver la Couleur demandée
    let detectedColor = "#a855f7"; // Violet par défaut
    let colorName = "Standard";
    for (let c in colors) {
        if (input.includes(c)) { detectedColor = colors[c]; colorName = c.toUpperCase(); }
    }

    // C. Trouver le Style demandé
    let currentStyle = styles["defaut"];
    let styleName = "Moderne";
    for (let s in styles) {
        if (input.includes(s)) { currentStyle = styles[s]; styleName = s.toUpperCase(); }
    }

    // 3. --- ANIMATION TYPEWRITER (Le Show) ---
    const lines = [
        "> Initialisation du noyau IA...",
        "> Analyse sémantique : " + input.substring(0, 20) + "...",
        "> 🔍 Sujet détecté : <span style='color:#fff'>" + keyword.toUpperCase() + "</span>",
        "> 🎨 Palette détectée : " + colorName,
        "> ✨ Style appliqué : " + styleName,
        "> Recherche d'images HD (" + imageTag + ")...",
        "> Génération du code HTML5/CSS3...",
        "> Finalisation du rendu..."
    ];

    let i = 0;
    const interval = setInterval(() => {
        if(i < lines.length) {
            terminal.innerHTML += `<div style="margin-bottom:5px; color:${detectedColor}">${lines[i]}</div>`;
            i++;
        } else {
            clearInterval(interval);
            setTimeout(() => {
                loadingScreen.style.display = 'none';
                resultScreen.style.display = 'block';
                // On lance le rendu avec TOUS les détails
                renderFinalSite(keyword, imageTag, detectedColor, currentStyle, input);
            }, 800);
        }
    }, 500);
}

/* --- 4. LE RENDU VISUEL (Un site qui s'adapte vraiment) --- */
function renderFinalSite(title, imgTag, color, style, originalRequest) {
    const container = document.getElementById('final-site-content');
    const uniqueId = Math.floor(Math.random() * 1000);
    const displayTitle = title.charAt(0).toUpperCase() + title.slice(1);

    // On applique le style (Sombre ou Clair selon le choix)
    container.style.backgroundColor = style.bg;
    container.style.color = style.text;
    container.style.fontFamily = style.font;

    // LE CODE DU SITE GÉNÉRÉ
    container.innerHTML = `
        <div style="padding: 20px 5%; display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid #eee;">
            <div style="font-weight: 900; font-size: 1.5rem; color: ${color}; letter-spacing: -1px;">${displayTitle.toUpperCase()}</div>
            <div style="font-size: 0.9rem; opacity: 0.8; display: flex; gap: 20px;">
                <span>Accueil</span><span>Services</span><span>Contact</span>
            </div>
        </div>

        <div style="height: 75vh; position: relative; display: flex; align-items: center; justify-content: center; text-align: center; overflow: hidden;">
            <img src="https://loremflickr.com/1200/800/${imgTag}/all?lock=${uniqueId}" style="position: absolute; top:0; left:0; width: 100%; height: 100%; object-fit: cover; filter: brightness(0.4);">
            
            <div style="position: relative; z-index: 2; padding: 40px; max-width: 800px;">
                <span style="background: ${color}; color: white; padding: 5px 15px; border-radius: ${style.radius}; font-size: 0.8rem; text-transform: uppercase; font-weight: bold; letter-spacing: 2px;">
                    Nouveau
                </span>
                <h1 style="font-size: 3.5rem; margin: 20px 0; color: white; line-height: 1.1; text-shadow: 0 10px 30px rgba(0,0,0,0.5);">
                    L'excellence en ${displayTitle}
                </h1>
                <p style="font-size: 1.2rem; color: #ddd; margin-bottom: 30px; max-width: 600px; margin-left: auto; margin-right: auto;">
                    Une expérience unique, conçue sur mesure pour répondre à vos exigences les plus élevées.
                </p>
                
                <div style="display: flex; gap: 15px; justify-content: center;">
                    <button onclick="goToOrderPage('${title}', '${imgTag}')" style="background: ${color}; color: white; border: none; padding: 15px 40px; border-radius: ${style.radius}; font-weight: bold; font-size: 1rem; cursor: pointer; transition: 0.3s; box-shadow: 0 10px 30px rgba(0,0,0,0.3);">
                        Commander ce Design (150€)
                    </button>
                    <button style="background: rgba(255,255,255,0.1); backdrop-filter: blur(5px); color: white; border: 1px solid rgba(255,255,255,0.3); padding: 15px 30px; border-radius: ${style.radius}; font-weight: bold; cursor: pointer;">
                        En savoir plus
                    </button>
                </div>
            </div>
        </div>

        <div style="padding: 80px 5%; text-align: center;">
            <h2 style="font-size: 2.5rem; margin-bottom: 10px; color: ${style.text === '#f5f5f5' ? 'white' : '#111'};">Nos Services</h2>
            <div style="width: 50px; height: 4px; background: ${color}; margin: 0 auto 50px auto;"></div>
            
            <div style="display: flex; gap: 30px; justify-content: center; flex-wrap: wrap;">
                <div style="background: ${style.text === '#f5f5f5' ? '#1a1a1a' : '#fff'}; padding: 40px; border-radius: ${style.radius}; flex: 1; min-width: 250px; box-shadow: 0 10px 40px rgba(0,0,0,0.05); border: 1px solid rgba(0,0,0,0.05);">
                    <div style="width: 60px; height: 60px; background: ${color}20; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: ${color}; font-size: 1.5rem; margin: 0 auto 20px auto;">★</div>
                    <h3 style="margin-bottom: 15px; color: ${style.text === '#f5f5f5' ? 'white' : '#111'};">Haute Qualité</h3>
                    <p style="color: #888; line-height: 1.6;">Des prestations irréprochables adaptées à vos besoins spécifiques.</p>
                </div>
                <div style="background: ${style.text === '#f5f5f5' ? '#1a1a1a' : '#fff'}; padding: 40px; border-radius: ${style.radius}; flex: 1; min-width: 250px; box-shadow: 0 10px 40px rgba(0,0,0,0.05); border: 1px solid rgba(0,0,0,0.05);">
                    <div style="width: 60px; height: 60px; background: ${color}20; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: ${color}; font-size: 1.5rem; margin: 0 auto 20px auto;">⚡</div>
                    <h3 style="margin-bottom: 15px; color: ${style.text === '#f5f5f5' ? 'white' : '#111'};">Rapidité</h3>
                    <p style="color: #888; line-height: 1.6;">Intervention rapide et efficace pour ne jamais vous ralentir.</p>
                </div>
            </div>
            
            <br><br><br><br><br><br><br>
        </div>
    `;
}
/* --- FONCTION DE PASSAGE DE COMMANDE --- */
function goToOrderPage(projet, image) {
    // 1. On sauvegarde le projet dans la mémoire du navigateur
    localStorage.setItem('ft_projet', projet);
    localStorage.setItem('ft_image', image);
    
    // 2. On redirige vers la page de commande
    window.location.href = "commande.html";
}