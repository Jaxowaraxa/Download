<?php
$conn = new mysqli("localhost", "root", "", "instruktor");

if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $email = $conn->real_escape_string($_POST['email']);
    $pytanie = $conn->real_escape_string($_POST['pytanie']);


    $stmt = $conn->prepare("INSERT INTO Pytania (Email, Pytanie) VALUES (?, ?)");
    $stmt->bind_param("ss", $email, $pytanie);

    if ($stmt->execute()) {
        echo "<script>alert('Pytanie zostało pomyślnie wysłane');</script>";
        echo "<script>window.location.href = 'pytania.html';</script>";
    } else {
        echo "Błąd zapisu: " . $stmt->error;
    }

    $stmt->close();
}

$conn->close();
?>
