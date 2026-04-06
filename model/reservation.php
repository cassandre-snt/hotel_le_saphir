<?php

/* =============== GET ============= */

/* Récupère les réservations en attente */
function getResevationPending($conn) {
    $query = "SELECT reservation_id, user_id, suite_name, date_in, date_out, special_requests 
    FROM reservation WHERE status = 'pending'
    ORDER BY date_in ASC";
    
    $stmt = $conn->prepare($query);
    $stmt->execute();
    return $stmt->get_result()->fetch_all(MYSQLI_ASSOC);
}

/* Récupère toutes les réservations */
function getAllReservations($conn) {
    $query = "SELECT r.reservation_id, u.name, u.last_name, u.email, r.suite_name, r.date_in, r.date_out, r.special_requests, r.status 
              FROM reservation r 
              JOIN user u ON r.user_id = u.user_id
              ORDER BY r.date_in ASC";
    
    $stmt = $conn->prepare($query);
    $stmt->execute();
    return $stmt->get_result()->fetch_all(MYSQLI_ASSOC);
}

/* =============== PATCH ============= */

function updateReservationStatus($conn,$reservation_id, $status) {
    $query = "UPDATE reservation SET status = ? WHERE reservation_id = ?";
    
    $stmt = $conn->prepare($query);
    $stmt->bind_param("si", $status, $reservation_id);
    return $stmt->execute();
}

function updateDateReservation($conn,$reservation_id, $date_in, $date_out) {
    $query = "UPDATE reservation SET date_in = ?, date_out = ? WHERE reservation_id = ?";
    
    $stmt = $conn->prepare($query);
    $stmt->bind_param("ssi", $date_in, $date_out, $reservation_id);
    return $stmt->execute();
}

/* =============== DELETE ============= */

function deleteResevationById($conn,$reservation_id) {
    $query = "DELETE FROM reservation WHERE reservation_id = ?";
    
    $stmt = $conn->prepare($query);
    $stmt->bind_param("i", $reservation_id);
    return $stmt->execute();
}
