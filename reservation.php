<?php
require 'config.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $name = $_POST['name'] ?? '';
    $last_name = $_POST['last_name'] ?? ''; 
    $email = $_POST['email'] ?? '';
    $phone = $_POST['phone'] ?? '';
    $date_in = $_POST['check_in'] ?? '';
    $date_out = $_POST['check_out'] ?? '';
    $suite_name = $_POST['room_type'] ?? '';
    $special_requests = !empty($_POST['special_requests']) ? $_POST['special_requests'] : null;

    if (empty($name) || empty($email) || empty($date_in) || empty($date_out)) {
        die("Erreur : Les champs obligatoires sont vides.");
    }

    $conn->begin_transaction();

    try {
        $user_id = null;
        $checkUser = $conn->prepare("SELECT user_id FROM user WHERE email = ?");
        $checkUser->bind_param("s", $email);
        $checkUser->execute();
        $result = $checkUser->get_result();

        if ($row = $result->fetch_assoc()) {
            $user_id = $row['user_id'];
        } else {
            $createUser = $conn->prepare("INSERT INTO user (name, last_name, email, phone) VALUES (?, ?, ?, ?)");
            $createUser->bind_param("ssss", $name, $last_name, $email, $phone);
            $createUser->execute();
            $user_id = $conn->insert_id; 
        }

        $checkDates = $conn->prepare("SELECT reservation_id FROM reservation 
            WHERE suite_name = ? 
            AND status != 'cancelled'
            AND ((date_in < ? AND date_out > ?))"); 
        $checkDates->bind_param("sss", $suite_name, $date_out, $date_in);
        $checkDates->execute();
        
        if ($checkDates->get_result()->num_rows > 0) {
            throw new Exception("Désolé, cette suite est déjà réservée pour ces dates.");
        }

        $stmt = $conn->prepare("INSERT INTO reservation (user_id, suite_name, date_in, date_out, special_requests, status) VALUES (?, ?, ?, ?, ?, 'pending')");
        $stmt->bind_param("issss", $user_id, $suite_name, $date_in, $date_out, $special_requests);
        
        if ($stmt->execute()) {
            $conn->commit();
            
            header("Location: index.php?success=" . urlencode("reservation_success"));
            exit();
        } else {
            throw new Exception("Erreur lors de l'insertion : " . $stmt->error);
        }

    } catch (Exception $e) {
        $conn->rollback();
        header("Location: index.php?error=" . urlencode("error_reservation"));
        exit();
    }
}

$conn->close();
?>