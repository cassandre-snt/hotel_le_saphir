<?php
require 'config.php';

/* =============== GET ============= */

function checkDisponibility($conn, $suite_name, $date_in, $date_out) {
    $checkDates = $conn->prepare("SELECT reservation_id FROM reservation 
        WHERE suite_name = ? 
        AND status != 'cancelled'
        AND ((date_in < ? AND date_out > ?))"); 
    $checkDates->bind_param("sss", $suite_name, $date_out, $date_in);
    $checkDates->execute();
    return $checkDates->get_result()->fetch_all(MYSQLI_ASSOC);
}

function getLastDisponibility($conn, $suite_name) {
    $query = "SELECT date_out FROM reservation 
              WHERE suite_name = ? 
              AND status != 'cancelled' 
              ORDER BY date_out DESC 
              LIMIT 1";
    
    $stmt = $conn->prepare($query);
    $stmt->bind_param("s", $suite_name);
    $stmt->execute();
    return $stmt->get_result()->fetch_assoc();
}

/* =============== POST ============= */


/* =============== PATCH ============= */

