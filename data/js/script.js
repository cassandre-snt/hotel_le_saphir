    // LISTE DES IMAGES SÉCURISÉES
    const URLS = {
        room1: "image/luxe.png",
        room2: "image/vue_ocean2.webp",
        ocean_room: "image/vue_ocean3.png",
        vue_ocean: "image/vue_ocean.webp",
        room3: "image/Royaute.png",
        lounge: "image/vue_ocean4.webp",
        limousine: "image/limousine.png",
        jardin: "image/jardin.jpg",
        pool1: "image/piscine.png",
        pool2: "image/piscine.png",
        pool3: "image/piscine3.webp",
        pool_party: "image/club_beach.jpg",
        pool_party2: "image/pool_party2.jpg",
        cocktail: "image/cocktail.jpeg",
        piscine_debordement: "image/piscine_debordement.jpg",
        vin_prive: "image/vin_prive.jpg",
        bath: "image/jaccuzzi.png",
        jaccuzzi2: "image/jaccuzzi2.jpg",
        spa1: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80",
        spa2: "https://images.unsplash.com/photo-1507652313519-d4e9174296fc?auto=format&fit=crop&w=1200&q=80",
        spa3: "image/spa.jpg",
        spa4: "image/spa4.jpg",
        spa5: "image/spa5.jpg",
        golf: "image/club.golf.png",
        golf2: "image/golf2.jpg",
        golf3: "image/golf3.png",
        gym: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=80",
        gym2: "image/sport.jpg",
        gym3: "image/pilates.webp",
        tennis: "https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?auto=format&fit=crop&w=1200&q=80",
        restaurant: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1200&q=80",
        bar1: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=1200&q=80",
        bar2: "https://images.unsplash.com/photo-1574096079513-d8259312b785?auto=format&fit=crop&w=1200&q=80",
        bar3: "image/lounge2.png",
        bar4: "image/lounge3.jpg",
        wine: "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?auto=format&fit=crop&w=1200&q=80",
        wine2: "image/vin2.webp",
        wine3: "image/vin3.jpg",
        brunch: "image/brunch.jpg",
        brunch2: "image/brunch2.jpg",
        brunch3: "image/brunch3.jpg",
        dish: "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=1200&q=80",
        water: "https://images.unsplash.com/photo-1519315901367-f34f815b63e8?auto=format&fit=crop&w=1200&q=80"
    };

    // 1. DATA DICTIONARY
    const db = {
        origin: { 
            sub: "Résidence de Luxe", 
            title: "Suite Origin", 
            img1: URLS.room1, 
            img2: URLS.jardin, 
            img3: URLS.jaccuzzi2, 
            desc: "L'essence même du luxe moderne est incarnée dans la suite Origin. Ce cocon de 55 mètres carrés au design épuré est baigné de lumière naturelle douce tout au long de la journée. Le minimalisme rencontre un confort absolu.", 
            services: ["Lit King-Size en lin lavé haut de gamme", "Vue panoramique sur le Jardin Exotique", "Accès prioritaire au Spa et aux piscines", "Service de chambre gastronomique 24/7"] 
        },
        beauty: { 
            sub: "Face à l'Océan", 
            title: "Beauté Océane", 
            img1: URLS.room2, 
            img2: URLS.ocean_room, 
            img3: URLS.vue_ocean, 
            desc: "Conçue comme un véritable sanctuaire dédié à la beauté, cette suite de 80 mètres carrés dispose d'une vaste terrasse privée s'ouvrant majestueusement sur l'océan. Son atout principal est sa rare salle de bain en marbre, conçue comme un spa miniature privé.", 
            services: ["Vue frontale imprenable sur l'océan", "Soin Signature Spa de 60 minutes inclus", "Produits d'accueil exclusifs Hermès", "Terrasse privée aménagée avec lits balinais"] 
        },
        luxurious: { 
            sub: "Niveau Élite", 
            title: "Le Penthouse", 
            img1: URLS.lounge, 
            img2: URLS.piscine_debordement, 
            img3: URLS.vin_prive, 
            desc: "Découvrez l'opulence sans compromis. Ce sublime penthouse de 150 mètres carrés surplombe tout le domaine et dispose de sa propre piscine à débordement sur le toit. Une architecture intérieure audacieuse se mêle à une domotique parfaitement invisible.", 
            services: ["Piscine à débordement privée et chauffée", "Place de parking souterraine haute sécurité", "Cave à vin privée dans la suite", "Chef privé disponible sur simple demande"] 
        },
        royalty: { 
            sub: "Expérience Signature", 
            title: "La Royauté", 
            img1: URLS.room3, 
            img2: URLS.limousine, 
            img3: URLS.pool1, 
            desc: "Voici la quintessence du pouvoir absolu et de l'élégance. La suite Royauté occupe une aile entière du palais, entièrement privatisée pour vous. Elle comprend des œuvres d'art originales, un piano à queue et une sécurité renforcée.", 
            services: ["Privatisation complète de l'aile Est", "Limousine privée avec chauffeur à disposition", "Service de majordome dédié 24/7", "Accès illimité et prioritaire à toutes les installations"] 
        },
        spa_sauna: { 
            sub: "Thermothérapie", 
            title: "Spa Holistique", 
            img1: URLS.spa5, 
            img2: URLS.spa3, 
            img3: URLS.spa4, 
            desc: "Purifiez intensément votre corps dans notre authentique sauna sec, fabriqué en bois de pin polaire vieilli. La chaleur enveloppante est idéale pour éliminer les toxines environnementales et relâcher instantanément les tensions musculaires les plus profondes.", 
            services: ["Chaleur sèche réglable jusqu'à 90°C", "Pierres volcaniques avec huiles essentielles", "Fontaine de glace pilée pour frictions corporelles", "Accès direct à l'espace détente et tisanerie"] 
        },
        jacuzzi: { 
            sub: "Hydrothérapie", 
            title: "Piscines Panoramiques", 
            img1: URLS.bath, 
            img2: URLS.pool1, 
            img3: URLS.pool3, 
            desc: "Plongez dans les eaux cristallines et bouillonnantes de notre grand jacuzzi à 38°C, offrant une vue panoramique imprenable sur l'horizon océanique. Des jets d'hydro-massage stratégiquement placés soulagent instantanément les tensions articulaires et lombaires.", 
            services: ["Bain bouillonnant maintenu à 38°C", "Jets de massage lombaire et cervical réglables", "Vue panoramique exceptionnelle sur l'océan", "Service discret de coupes de fruits et boissons"] 
        },
        golf: { 
            sub: "Parcours 18 Trous", 
            title: "Golf Signature", 
            img1: URLS.golf, 
            img2: URLS.golf2, 
            img3: URLS.golf3, 
            desc: "Relevez le défi de notre parcours de golf de championnat 18 trous, conçu par des légendes de l'architecture golfique. Entre forêts d'eucalyptus et falaises maritimes, ce parcours offre des greens impeccables et des obstacles d'eau stratégiques.", 
            services: ["Parcours 18 trous Par 72 avec vue sur l'océan", "Accès privilégié à l'Académie de Golf", "Club House VIP avec restauration exclusive", "Location d'équipements professionnels dernière génération"] 
        },
        fitness: { 
            sub: "Coaching Privé", 
            title: "Fitness Pro", 
            img1: URLS.gym2, 
            img2: URLS.gym, 
            img3: URLS.gym3, 
            desc: "Entraînez-vous dans un espace avant-gardiste baigné de lumière naturelle, avec vue sur les jardins du palais. La zone Fitness Pro est équipée des dernières machines connectées. Nos coachs sportifs internationaux concevront un programme sur mesure.", 
            services: ["Gamme complète de machines connectées", "Séances de coaching personnel sur mesure", "Bilan biométrique et nutritionnel complet", "Accès au Studio privé pour Pilates et Yoga"] 
        },
        pool_party: { 
            sub: "DJ Set & Cabanas", 
            title: "Le Beach Club", 
            img1: URLS.pool_party, 
            img2: URLS.pool_party2, 
            img3: URLS.cocktail, 
            desc: "Quand le soleil commence à se coucher, notre vaste piscine extérieure se transforme en un club en plein air exclusif. Profitez du confort de nos cabanas privées VIP tout en sirotant des cocktails signature au rythme des DJs internationaux.", 
            services: ["Location de cabanas privées VIP", "DJ Sets réguliers par des artistes internationaux", "Service de bouteilles premium directement au bord de l'eau", "Spectacles lumineux aquatiques époustouflants"] 
        },
        cave: { 
            sub: "Œnologie", 
            title: "La Cave", 
            img1: URLS.wine, 
            img2: URLS.wine3, 
            img3: URLS.wine2, 
            desc: "Descendez sous les voûtes centenaires du palais pour découvrir une collection inestimable de plus de 5000 bouteilles, incluant des grands crus classés et des millésimes rares. Notre Chef Sommelier de renommée mondiale vous accueille pour une dégustation privée.", 
            services: ["Dégustation privée par le Chef Sommelier", "Ateliers sur mesure d'accords mets et vins", "Accès à la cave à cigares attenante", "Service d'acquisition et d'expédition de millésimes rares"] 
        },
        restaurant: { 
            sub: "Étoilé Michelin", 
            title: "L'Épicure", 
            img1: URLS.restaurant, 
            img2: URLS.dish, 
            img3: URLS.wine, 
            desc: "Une véritable symphonie culinaire vous attend à L'Épicure, notre restaurant signature doublement étoilé au guide Michelin. Le Chef propose une cuisine d'auteur audacieuse sublimant les meilleurs produits du terroir local grâce à des techniques internationales avant-gardistes.", 
            services: ["Menu Dégustation évolutif en 7 ou 9 plats", "Réservation de la prestigieuse Table du Chef", "Vue panoramique imprenable depuis la salle à manger", "Service à la française théâtral et découpe en salle"] 
        },
        bar: { 
            sub: "Mixologie Moderne", 
            title: "Le Lounge Bar", 
            img1: URLS.bar1, 
            img2: URLS.bar4, 
            img3: URLS.bar3, 
            desc: "Immergez-vous dans l'élégance feutrée de notre Lounge Bar, inspiré des speakeasies luxueux des Années Folles. Nos maîtres mixologues conçoivent des cocktails signature surprenants sous vos yeux, accompagnés de concerts de jazz en live.", 
            services: ["Création de cocktails sur mesure", "Programmation de concerts de jazz en soirée", "Vaste terrasse extérieure subtilement chauffée", "Sélection de spiritueux d'exception et vieux rhums"] 
        },
        brunch: { 
            sub: "Rituel du Dimanche", 
            title: "Brunch Prestige", 
            img1: URLS.brunch2, 
            img2: URLS.brunch, 
            img3: URLS.brunch3, 
            desc: "Le Brunch Prestige du Saphir est devenu le rendez-vous incontournable du dimanche pour la haute société. Flânez parmi un somptueux buffet artistiquement dressé, offrant fruits de mer frais, viandes finement découpées et impressionnantes fontaines de chocolat.", 
            services: ["Service discret de Champagne des grandes maisons", "Bar géant d'huîtres et crustacés nobles", "Ateliers culinaires en direct (découpes, crêpes)", "Animations haut de gamme dédiées aux enfants"] 
        }
    };

    // 2. GESTION DE LA MODALE MASTER-DETAIL
    const modal = document.getElementById('master-modal');
    
    function openModal(id) {
        const item = db[id];
        if(!item) return;

        document.getElementById('m-subtitle').innerText = item.sub;
        document.getElementById('m-title').innerText = item.title;
        document.getElementById('m-desc').innerText = item.desc;
        
        document.getElementById('m-img-1').src = item.img1;
        document.getElementById('m-img-2').src = item.img2;
        document.getElementById('m-img-3').src = item.img3;
        
        const ul = document.getElementById('m-services');
        ul.innerHTML = ""; 
        item.services.forEach(serv => {
            let li = document.createElement('li');
            li.innerText = serv;
            ul.appendChild(li);
        });

        document.body.style.overflow = "hidden";
        modal.classList.add('active');
    }

    function closeModal() {
        modal.classList.remove('active');
        document.body.style.overflow = "auto";
    }

    modal.addEventListener('click', (e) => { 
        if(e.target === modal) closeModal(); 
    });
    
    document.addEventListener('keydown', (e) => { 
        if(e.key === "Escape") closeModal(); 
    });

    // 3. ANIMATIONS AU DÉFILEMENT
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });
    
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

    // 4. INITIALISATION DES DATES DU FORMULAIRE
    const checkinInput = document.getElementById('checkin-date');
    const checkoutInput = document.getElementById('checkout-date');
    
    const today = new Date().toISOString().split('T')[0];
    const tomorrow = new Date(Date.now() + 86400000).toISOString().split('T')[0];
    
    checkinInput.value = today;
    checkinInput.min = today;
    checkoutInput.value = tomorrow;
    checkoutInput.min = tomorrow;
