    // LISTE DES IMAGES SÉCURISÉES
    const URLS = {
        room1: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=1200&q=80",
        room2: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80",
        room3: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1200&q=80",
        lounge: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=1200&q=80",
        pool1: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80",
        pool2: "https://images.unsplash.com/photo-1560624052-449f5ddf0c31?auto=format&fit=crop&w=1200&q=80",
        bath: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=80",
        spa1: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80",
        spa2: "https://images.unsplash.com/photo-1507652313519-d4e9174296fc?auto=format&fit=crop&w=1200&q=80",
        golf: "https://images.unsplash.com/photo-1587334274328-64186a80aee6?auto=format&fit=crop&w=1200&q=80",
        gym: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=80",
        tennis: "https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?auto=format&fit=crop&w=1200&q=80",
        restaurant: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1200&q=80",
        bar1: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=1200&q=80",
        bar2: "https://images.unsplash.com/photo-1574096079513-d8259312b785?auto=format&fit=crop&w=1200&q=80",
        wine: "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?auto=format&fit=crop&w=1200&q=80",
        brunch: "https://images.unsplash.com/photo-1511690656956-5129417181c0?auto=format&fit=crop&w=1200&q=80",
        dish: "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=1200&q=80",
        water: "https://images.unsplash.com/photo-1519315901367-f34f815b63e8?auto=format&fit=crop&w=1200&q=80"
    };

    // 1. DATA DICTIONARY
    const db = {
        origin: { sub: "Luxury Residence", title: "Origin Suite", img1: URLS.room1, img2: URLS.pool1, img3: URLS.bath, desc: "The very essence of modern luxury is embodied in the Origin suite. This 55-square-meter cocoon with its sleek design is bathed in soft natural light throughout the day. Minimalism meets absolute comfort.", services:["Premium washed linen King-Size bed", "Panoramic views over the Exotic Garden", "Priority access to the Spa and pools", "24/7 gourmet Room Service"] },
        beauty: { sub: "Oceanfront", title: "Ocean Beauty", img1: URLS.room2, img2: URLS.room3, img3: URLS.spa2, desc: "Designed as a true sanctuary dedicated to beauty, this 80-square-meter suite features a vast private terrace opening majestically onto the ocean. Its main asset is its rare marble bathroom, designed as a private miniature spa.", services:["Unobstructed frontal Ocean view", "Included 60-minute Signature Spa treatment", "Exclusive Hermes welcome amenities", "Private terrace furnished with Balinese beds"] },
        luxurious: { sub: "Elite Level", title: "The Penthouse", img1: URLS.lounge, img2: URLS.bath, img3: URLS.room1, desc: "Discover opulence without compromise. This sublime 150-square-meter penthouse overlooks the entire estate and features its own rooftop infinity pool. Bold interior architecture blends with perfectly invisible domotics.", services:["Private heated infinity pool", "High-Security underground parking space", "Private wine cellar in the suite", "Private chef available upon simple request"] },
        royalty: { sub: "Signature Experience", title: "The Royalty", img1: URLS.room3, img2: URLS.room1, img3: URLS.pool1, desc: "Here lies the quintessence of absolute power and elegance. The Royalty suite occupies an entire wing of the palace, entirely privatized for you. Featuring original artworks, a grand piano, and reinforced security.", services:["Complete privatization of the East wing", "Private limousine with Chauffeur at disposal", "Dedicated 24/7 Butler service", "Unlimited and priority access to all facilities"] },
        
        spa_sauna: { sub: "Thermotherapy", title: "Holistic Spa", img1: URLS.spa1, img2: URLS.spa2, img3: URLS.bath, desc: "Intensely purify your body in our authentic dry sauna, crafted with aged polar pine wood. The enveloping heat is ideal for eliminating environmental toxins and instantly releasing the deepest muscle tensions.", services:["Dry heat adjustable up to 90°C", "Volcanic stones with essential oils", "Crushed ice fountain for body friction", "Direct access to the relaxation and herbal tea area"] },
        jacuzzi: { sub: "Hydrotherapy", title: "Panoramic Pools", img1: URLS.bath, img2: URLS.pool1, img3: URLS.spa1, desc: "Dive into the bubbling, crystalline waters of our large 38°C jacuzzi, featuring breathtaking panoramic views of the ocean horizon. Strategically placed hydro-massage jets instantly relieve joint and lumbar stress.", services:["Bubbling bath maintained at 38°C", "Adjustable lumbar and cervical massage jets", "Exceptional panoramic view of the Ocean", "Discreet service of fruit cups and beverages"] },
        golf: { sub: "18-Hole Course", title: "Golf Signature", img1: URLS.golf, img2: URLS.spa1, img3: URLS.pool1, desc: "Take on the challenge of our 18-hole championship course, designed by legends of golf architecture. Weaving between eucalyptus forests and maritime cliffs, this course offers immaculate greens and strategic water hazards.", services:["18-Hole Par 72 course with ocean views", "Privileged access to the Golf Academy", "VIP Club House with exclusive dining", "Latest generation professional equipment rental"] },
        fitness: { sub: "Private Coaching", title: "Fitness Pro", img1: URLS.gym, img2: URLS.water, img3: URLS.spa2, desc: "Train in an avant-garde space bathed in natural light, overlooking the palace gardens. The Fitness Pro area is equipped with the latest connected machines. Our international sports coaches will design a bespoke program.", services:["Full range of connected machines", "Tailor-made personal coaching sessions", "Complete biometric and nutritional assessment", "Access to the private Studio for Pilates & Yoga"] },
        pool_party: { sub: "DJ Set & Cabanas", title: "The Beach Club", img1: URLS.bar2, img2: URLS.pool2, img3: URLS.bar1, desc: "When the sun begins to set, our vast outdoor pool transforms into an exclusive open-air club. Enjoy the comfort of our VIP private cabanas while sipping amazing signature cocktails to the rhythm of international DJs.", services:["Rental of VIP private Cabanas", "Regular DJ Sets by international artists", "Premium bottle service directly to the water", "Breathtaking aquatic light shows"] },
        
        cave: { sub: "Oenology", title: "The Cellar", img1: URLS.wine, img2: URLS.bar2, img3: URLS.dish, desc: "Descend beneath the palace's centuries-old vaults to discover an invaluable collection of over 5000 bottles, including classified grand crus and rare vintages. Our world-renowned Head Sommelier welcomes you for a private tasting.", services:["Private tasting by the Head Sommelier", "Tailor-made Food & Wine Pairing workshops", "Access to the adjoining collection cigar cellar", "Acquisition and shipping service for rare vintages"] },
        restaurant: { sub: "Michelin-Starred", title: "L'Épicure", img1: URLS.restaurant, img2: URLS.dish, img3: URLS.wine, desc: "A true culinary symphony awaits you at L'Épicure, our signature double Michelin-starred restaurant. The Chef offers a bold author's cuisine that sublimates the best local terroir products through avant-garde international techniques.", services:["Evolving Tasting Menu in 7 or 9 courses", "Reservation of the prestigious Chef's Table", "Breathtaking panoramic view from the dining room", "Theatrical French service and trolley carving"] },
        bar: { sub: "Modern Mixology", title: "The Lounge Bar", img1: URLS.bar1, img2: URLS.bar2, img3: URLS.lounge, desc: "Immerse yourself in the hushed elegance of our Lounge Bar, inspired by the luxurious speakeasies of the Roaring Twenties. Our master mixologists design surprising signature cocktails before your eyes, accompanied by live jazz.", services:["Creation of bespoke cocktails", "Live Jazz evening concert programming", "Vast, subtly heated outdoor terrace", "Selection of exceptional spirits and old rums"] },
        brunch: { sub: "Sunday Ritual", title: "Prestige Brunch", img1: URLS.brunch, img2: URLS.dish, img3: URLS.restaurant, desc: "The Saphir Prestige Brunch has become the unmissable Sunday rendezvous for high society. Stroll among a sumptuous, artfully arranged buffet offering fresh seafood, finely carved meats, and impressive chocolate fountains.", services:["Discretionary service of great house Champagne", "Giant oyster and noble crustacean bar", "Live culinary workshops (carvings, crepes)", "Dedicated high-end entertainment for children"] }
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
