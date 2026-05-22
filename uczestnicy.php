<?php
$conn = new mysqli("localhost", "root", "", "instruktor");

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $imie = $conn->real_escape_string($_POST['imie']);
    $nazwisko = $conn->real_escape_string($_POST['nazwisko']);
    $numer_tel = $conn->real_escape_string($_POST['numer']);
    $email = $conn->real_escape_string($_POST['email']);
    $data_urodzenia = $conn->real_escape_string($_POST['data-urodzenia']);
    $miasto = $conn->real_escape_string($_POST['miasto']);
    $typ = $conn->real_escape_string($_POST['typ']);

    // z gpt

    $miastoQuery = "SELECT ID FROM Miasta WHERE Miasto = ?";
    $stmtMiasto = $conn->prepare($miastoQuery);
    $stmtMiasto->bind_param("s", $miasto);
    $stmtMiasto->execute();
    $miastoResult = $stmtMiasto->get_result();

    if ($miastoResult->num_rows > 0) {
        $miastoRow = $miastoResult->fetch_assoc();
        $miasto_id = $miastoRow['ID'];
    } else {
        die("Nie znaleziono miasta: $miasto");
    }

    $typQuery = "SELECT ID FROM Kursy_Typy WHERE Typ = ?";
    $stmtTyp = $conn->prepare($typQuery);
    $stmtTyp->bind_param("s", $typ);
    $stmtTyp->execute();
    $typResult = $stmtTyp->get_result();

    if ($typResult->num_rows > 0) {
        $typRow = $typResult->fetch_assoc();
        $typ_id = $typRow['ID'];
    } else {
        die("Nie znaleziono typu kursu: $typ");
    }

    //

    $stmt = $conn->prepare("INSERT INTO Uczestnicy (Imie, Nazwisko, Numer_tel, Email, Data_urodzenia, Miasto_ID, Typ_ID) 
                            VALUES (?, ?, ?, ?, ?, ?, ?)");
    $stmt->bind_param("sssssis", $imie, $nazwisko, $numer_tel, $email, $data_urodzenia, $miasto_id, $typ_id);

    if ($stmt->execute()) 
        {
            echo "<script>alert('Uczestnik został pomyślnie dodany');</script>";
            echo "<script>window.location.href = 'zapiszsie.html';</script>";
        }
    else 
        {
            // gpt
            echo "Błąd SQL: " . $stmt->error;
            //
        }

}

//real_escape_string działa przeciwko sql injection, na przykład przekształca apostrof lub cudzysłów

$conn->close();
?>