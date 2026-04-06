<?php
function generateRandomPassword($longueur = 16) {
    $caracteres = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()-_=+';
    $nbCaracteres = strlen($caracteres);
    $motDePasse = '';

    for ($i = 0; $i < $longueur; $i++) {
        $indexAleatoire = random_int(0, $nbCaracteres - 1);
        $motDePasse .= $caracteres[$indexAleatoire];
    }

    return $motDePasse;
}