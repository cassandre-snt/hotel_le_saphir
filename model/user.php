<?php
/* =============== GET ============= */

function getUserOderByResevationDate($conn) {
    $query = "SELECT u.user_id, u.name, u.last_name, r.date_in, r.date_out, r.status, r.suite_name
              FROM user u
              JOIN reservation r ON u.user_id = r.user_id
              ORDER BY r.date_in DESC";
    
    $stmt = $conn->prepare($query);
    $stmt->execute();
    return $stmt->get_result()->fetch_all(MYSQLI_ASSOC);
}

function getUsers($conn, $page = 1, $perPage = 10) {
    $offset = ($page - 1) * $perPage;
    $query = "SELECT user_id, name, last_name, email, password, phone FROM user LIMIT " . intval($perPage) . " OFFSET " . intval($offset);
    
    $stmt = $conn->prepare($query);
    $stmt->execute();
    return $stmt->get_result()->fetch_all(MYSQLI_ASSOC);
}

function getTotalUsers($conn) {
    $query = "SELECT COUNT(*) as total FROM user";
    $stmt = $conn->prepare($query);
    $stmt->execute();
    return $stmt->get_result()->fetch_assoc()['total'];
}

function getUserByEmail($conn, $email) {
    $query = "SELECT user_id FROM user WHERE email = ?";
    
    $stmt = $conn->prepare($query);
    $stmt->bind_param("s", $email);
    $stmt->execute();
    return $stmt->get_result()->fetch_assoc();
}

/* =============== DELETE ============= */

function deleteUserById($conn, $user_id) {
    $query = "DELETE FROM user WHERE user_id = ?";
    
    $stmt = $conn->prepare($query);
    $stmt->bind_param("i", $user_id);
    return $stmt->execute();
}

/* =============== CREATE ============= */

function createUser($conn, $name, $last_name, $email, $phone, $password) {
    $query = "INSERT INTO user (name, last_name, email, phone, password) VALUES (?, ?, ?, ?, ?)";
    
    $stmt = $conn->prepare($query);
    $stmt->bind_param("sssss", $name, $last_name, $email, $phone, $password);
    
    if ($stmt->execute()) {
        return $conn->insert_id;
    }
    return false;
}
