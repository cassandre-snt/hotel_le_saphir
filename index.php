<?php

if(isset($_GET['error'])) {
    $error = $_GET['error'];
    if ($error === 'error_reservation') {
        echo "<script>alert('Désolé, une erreur est survenue lors de votre réservation. Veuillez réessayer.');</script>";
    }
}

if(isset($_GET['success'])) {
    $success = $_GET['success'];
    if ($success === 'reservation_success') {
        echo "<script>alert('Votre demande de réservation a été envoyée avec succès ! Nous vous contacterons sous peu.');</script>";
    }
}

?>
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Le Saphir | The Epitome of Luxury</title>
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500&family=Playfair+Display:ital,wght@0,400;0,500;1,400;1,500&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="data/css/style.css">
</head>
<body>

    <!-- NAVIGATION -->
    <nav>
        <div class="logo serif"> <img src="data/image/logo.png" alt="Origin Saphir"> </div>
        <div class="nav-links">
            <a href="#suites">Résidences</a>
            <a href="#experiences">Expériences</a>
            <a href="#gastronomy">Gastronomie</a>
        </div>
        <a href="#reservation" class="btn-gold" style="padding: 12px 25px; font-size: 0.7rem;">Réserver</a>
    </nav>

    <!-- HERO -->
    <header class="hero">
        <div class="hero-bg"></div>
        <div class="hero-content">
            <p class="reveal">Bienvenue dans notre merveilleux hôtel</p>
            <h1 class="serif reveal" style="transition-delay: 0.2s;">Tranformez votre séjour<br>en <span class="italic-accent">un temps précieux de luxure</span></h1>
            <a href="#suites" class="btn-gold reveal" style="transition-delay: 0.4s; margin-top: 2rem;">Découvrir le Palace</a>
        </div>
    </header>
    <script src="https://cdn.jsdelivr.net/npm/flatpickr"></script>
    <style>
        .flatpickr-day.flatpickr-disabled {
            color: rgba(255, 0, 0, 0.3) !important;
            text-decoration: line-through;
        }
    </style>

    <!-- CHIFFRES CLÉS (STATS) -->
    <section class="stats-bar reveal">
        <div class="stat-item">
            <span class="stat-number">5★</span>
            <span class="stat-label">Nos avis</span>
        </div>
        <div class="stat-item">
            <span class="stat-number">24/7</span>
            <span class="stat-label">Conciergerie Dédiée</span>
        </div>
        <div class="stat-item">
            <span class="stat-number">100%</span>
            <span class="stat-label">Intimité & Discrétion</span>
        </div>
    </section>

    <main>

        <!-- CHAMBRES -->
        <section id="suites" class="container section-padding reveal">
            <div class="section-title">
                <p>Résidences Privées</p>
                <h2>Explorez <span class="italic-accent">Nos merveilleurse suites</span></h2>
            </div>
            <div class="bento">
                <div class="card span-2x2" onclick="openModal('origin')">
                    <img src="https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=1200&q=80" alt="Origin Saphir">
                    <div class="card-content">
                        <span class="card-price">À partir de 850€ / nuit</span>
                        <h3 class="serif">Origin Suite</h3>
                        <p>Moderne, Elegance et Comfort</p>
                    </div>
                </div>
                <div class="card span-2x1" onclick="openModal('beauty')">
                    <img src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80" alt="Beauty Saphir">
                    <div class="card-content">
                        <span class="card-price">À partir de 1 400€ / nuit</span>
                        <h3 class="serif">Ocean Beauty</h3>
                        <p>Vue panoramique mer</p>
                    </div>
                </div>
                <div class="card span-1x1" onclick="openModal('luxurious')">
                    <img src="https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=800&q=80" alt="Luxurious Saphir">
                    <div class="card-content">
                        <span class="card-price">Sur Demande</span>
                        <h3 class="serif">Penthouse</h3>
                        <p>Suite exclusive</p>
                    </div>
                </div>
                <div class="card span-1x1" onclick="openModal('royalty')">
                    <img src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800&q=80" alt="Royalty Saphir">
                    <div class="card-content">
                        <span class="card-price" style="color: var(--sapphire-light);">Signature</span>
                        <h3 class="serif italic-accent" style="color: var(--gold-primary);">The Royalty</h3>
                        <p>L'experience ultime</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- EXPÉRIENCES -->
        <section id="experiences" class="container reveal">
            <div class="section-title">
                <p>Services et Bien-Etre</p>
                <h2>Fait <span class="italic-accent">Pour Vous</span></h2>
            </div>
            <div class="bento">
                <div class="card span-1x2" onclick="openModal('spa_sauna')">
                    <img src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80" alt="Spa">
                    <div class="card-content">
                        <h3 class="serif">Spa</h3>
                        <p>Sauna & Thermathérapie</p>
                    </div>
                </div>
                <div class="card span-2x1" onclick="openModal('jacuzzi')">
                    <img src="image/jaccuzzi.png" alt="Jacuzzi">
                    <div class="card-content">
                        <h3 class="serif">Hydrotherapy</h3>
                        <p>Jacuzzi & piscine</p>
                    </div>
                </div>
                <div class="card span-1x1" onclick="openModal('golf')">
                    <img src="image/club.golf.png" alt="Golf">
                    <div class="card-content">
                        <h3 class="serif">Club de Golf</h3>
                        <p>18-troue Signature</p>
                    </div>
                </div>
                <div class="card span-1x1" onclick="openModal('fitness')">
                    <img src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80" alt="Fitness">
                    <div class="card-content">
                        <h3 class="serif">Salle De Sport Privée</h3>
                        <p>Coaching</p>
                    </div>
                </div>
                <div class="card span-2x1" onclick="openModal('pool_party')">
                    <img src="image/club_beach.jpg" alt="Beach Club">
                    <div class="card-content">
                        <h3 class="serif">Beach Club</h3>
                        <p>Evenements et bar</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- GASTRONOMIE -->
        <section id="gastronomy" class="container section-padding reveal">
            <div class="section-title">
                <p>L'art Culinaire</p>
                <h2>Savourez <span class="italic-accent">L'extraordinaire</span></h2>
            </div>
            <div class="bento">
                <div class="card span-2x2" onclick="openModal('restaurant')">
                    <img src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1200&q=80" alt="Restaurant L'Épicure">
                    <div class="card-content">
                        <h3 class="serif">L'Épicure</h3>
                        <p>Dinner Gastronomique</p>
                    </div>
                </div>
                <div class="card span-2x1" onclick="openModal('bar')">
                    <img src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=1200&q=80" alt="Bar Mixologie">
                    <div class="card-content">
                        <h3 class="serif">Le Lounge</h3>
                        <p>Modern et Jazz</p>
                    </div>
                </div>
                <div class="card span-1x1" onclick="openModal('cave')">
                    <img src="https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?auto=format&fit=crop&w=800&q=80" alt="Cave à Vin">
                    <div class="card-content">
                        <h3 class="serif">The Cellar</h3>
                        <p>Une Expérience Vintage </p>
                    </div>
                </div>
                <div class="card span-1x1" onclick="openModal('brunch')">
                    <img src="image/brunch.jpg" alt="Brunch">
                    <div class="card-content">
                        <h3 class="serif">Le Brunch du Dimanche</h3>
                        <p>Le Rituel Du Weekend</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- ========================================================= -->
        <!-- FORMULAIRE DE RÉSERVATION (BOUTON SAPHIR)                 -->
        <!-- ========================================================= -->
        <section id="reservation" class="reservation-section section-padding reveal">
            <div class="container reservation-grid">
                
                <div class="res-info">
                    <h2 class="serif" style="font-size: 3.5rem; margin-bottom: 1rem;">Commencez L'experience<br><span class="italic-accent">Dès Maintenant</span></h2>
                    <p>Contactez notre conciergerie privée afin de vivre cette experience au maximum. De la villa exclusive, à l'acces privé du restaurant, le luxe n'attend plus que vous.</p>
                    
                    <ul class="contact-list">
                        <li>
                            <span>Head Office</span>
                            <strong>1 Avenue de l'Océan, Riviera</strong>
                        </li>
                        <li>
                            <span>Ligne privée</span>
                            <strong>+33 (0)4 93 12 34 56</strong>
                        </li>
                        <li>
                            <span>Email</span>
                            <strong>booking@lesaphir.com</strong>
                        </li>
                    </ul>
                </div>

                <div class="res-form">
                    <h3 class="serif" style="font-size: 2rem; margin-bottom: 2rem;">Remplissez Vos Informations</h3>
                    <form action="reservation.php" method="post">
                        
                        <div class="form-row">
                            <div class="form-group">
                                <label class="form-label">First Name</label>
                                <input name="name" type="text" class="form-input" placeholder="Enter your first name" required>
                            </div>
                            <div class="form-group">
                                <label class="form-label">Last Name</label>
                                <input name="last_name" type="text" class="form-input" placeholder="Enter your last name" required>
                            </div>
                        </div>

                        <div class="form-row">
                            <div class="form-group">
                                <label class="form-label">Email Address</label>
                                <input name="email" type="email" class="form-input" placeholder="email@example.com" required>
                            </div>
                            <div class="form-group">
                                <label class="form-label">Phone</label>
                                <input name="phone" type="tel" class="form-input" placeholder="+1 (555) 000-0000" required>
                            </div>
                        </div>

                        <div class="form-row">
                            <div class="form-group">
                                <label class="form-label">Check-in</label>
                                <input name="check_in" type="date" class="form-input" id="checkin-date" required>
                            </div>
                            <div class="form-group">
                                <label class="form-label">Check-out</label>
                                <input name="check_out" type="date" class="form-input" id="checkout-date" required>
                            </div>
                        </div>

                        <div class="form-group">
                            <label class="form-label">Select Accommodation</label>
                            <select name="room_type" class="form-input">
                                <option>Origin Suite</option>
                                <option>Ocean Beauty Suite</option>
                                <option>The Penthouse</option>
                                <option>The Royalty Signature</option>
                            </select>
                        </div>

                        <div class="form-group" style="margin-top: 25px;">
                            <label class="form-label">Consultation / Special Requests</label>
                            <textarea name="special_requests" class="form-input" placeholder="What would you like us to know about your stay?"></textarea>
                        </div>

                        <!-- Bouton Saphir pour rappeler le thème -->
                        <button type="submit" class="btn-sapphire">Réservation Fini</button>
                    </form>
                </div>

            </div>
        </section>

    </main>

    <!-- FOOTER LUXUEUX -->
    <footer class="site-footer">
        <div class="container">
            <div class="footer-grid">
                <div class="footer-brand">
                    <h2 class="serif">Le Saphir</h2>
                    <p>Découvrez un sanctuaire conçu pour le comfort et l'élégance.</p>
                </div>
                
                <div class="footer-col">
                    <h4>Links</h4>
                    <ul>
                        <li>Home</li>
                        <li>Residences</li>
                        <li>Gastronomy</li>
                        <li>Contact Us</li>
                    </ul>
                </div>

                <div class="footer-col">
                    <h4>Services</h4>
                    <ul>
                        <li>Private Jet Transfer</li>
                        <li>Spa & Wellness</li>
                        <li>Michelin Dining</li>
                        <li>Event Hosting</li>
                    </ul>
                </div>

                <div class="footer-col">
                    <h4>Subscribe</h4>
                    <p style="font-size: 0.85rem; color: var(--text-muted); margin-bottom: 1rem;">Unlock exclusive experiences and tailored offers.</p>
                    <div style="display: flex; border-bottom: 1px solid var(--sapphire-primary); padding-bottom: 10px;">
                        <input type="email" placeholder="Email Address" style="background: transparent; border: none; color: #fff; outline: none; width: 100%;">
                        <button style="color: var(--sapphire-light); text-transform: uppercase; font-size: 0.7rem; font-weight: bold; cursor: pointer;">Join ↗</button>
                    </div>
                </div>
            </div>
            
            <div class="footer-bottom">
                <p>&copy; 2024 Le Saphir Palace. All rights reserved.</p>
                <div style="display: flex; gap: 20px;">
                    <span>Instagram</span>
                    <span>LinkedIn</span>
                    <span>Twitter</span>
                </div>
            </div>
        </div>
    </footer>

    <!-- UNIQUE MODALE (MASTER-DETAIL) -->
    <div class="modal-overlay" id="master-modal">
        <div class="modal-content">
            <button class="modal-close" onclick="closeModal()">×</button>
            
            <div class="modal-gallery">
                <img id="m-img-1" class="modal-main-img" src="" alt="Image Principale">
                <div class="modal-sub-gallery">
                    <img id="m-img-2" class="modal-sub-img" src="" alt="Image Secondaire 1">
                    <img id="m-img-3" class="modal-sub-img" src="" alt="Image Secondaire 2">
                </div>
            </div>

            <div class="modal-body">
                <div class="modal-header">
                    <p style="color: var(--sapphire-light); text-transform: uppercase; letter-spacing: 3px; font-size: 0.8rem; margin-bottom: 15px;" id="m-subtitle">Category</p>
                    <h2 class="serif italic-accent" id="m-title">Title</h2>
                    <p class="modal-desc" id="m-desc">Description textuelle riche...</p>
                    <button class="btn-sapphire" style="margin-top: 1rem; width: auto;" onclick="closeModal(); window.location.href='#reservation'">Réservez</button>
                </div>
                <div class="modal-services">
                    <h3 class="serif">Exclusive Inclusions</h3>
                    <ul id="m-services">
                        <!-- Rempli par JS -->
                    </ul>
                </div>
            </div>
        </div>
    </div>
<script src="data/js/script.js"></script>
<script src="data/js/get_booked.js"></script>
   
</body>
</html>