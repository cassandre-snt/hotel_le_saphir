<?php
require 'config.php';

$suite = $_GET['suite'] ?? 'Origin Suite';

$sql = "SELECT date_in, date_out FROM reservation WHERE suite_name = ? AND status != 'cancelled'";
$stmt = $conn->prepare($sql);
$stmt->bind_param("s", $suite);
$stmt->execute();
$result = $stmt->get_result();

$bookedDates = [];
while ($row = $result->fetch_assoc()) {
    $bookedDates[] = [
        "from" => $row['date_in'],
        "to" => $row['date_out']
    ];
}

echo json_encode($bookedDates);