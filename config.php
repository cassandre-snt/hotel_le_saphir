<?php 
require 'vendor/autoload.php';

use Dotenv\Dotenv;

try {
    $dotenv = Dotenv::createImmutable(__DIR__);
    $dotenv->load();
} catch (Exception $e) {
    die("Erreur : Impossible de charger le fichier .env");
}

$servername = $_ENV['DB_HOST'] ?? 'localhost';
$username   = $_ENV['DB_USER']   ?? 'root';
$password   = $_ENV['DB_PASSWORD'] ?? '';
$dbname     = $_ENV['DB_NAME']     ?? 'ma_base';

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    error_log("Connection failed: " . $conn->connect_error);
    die("Une erreur de connexion est survenue. Veuillez réessayer plus tard.");
}
$conn->set_charset("utf8mb4");