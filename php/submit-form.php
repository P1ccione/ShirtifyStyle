<?php
// Recupero i valori del form
$color = $_POST['color-input'];
$size = $_POST['size-input'];
$quantity = $_POST['number-input'];
$price = floatval($_POST['prezzo']);
$idProduct = intval($_POST['idProductSelected']);
$imageName = ($_POST['file-name']);

// Calcolo il prezzo totale
$totalPrice = $price * $quantity;

// Genero un ID univoco per l'oggetto
$id = uniqid();

// Salvo l'immagine nella cartella "userImages"
$targetDir = "../img/user-images/";
$targetFile = $targetDir . $imageName;
move_uploaded_file($imageName, $targetFile);

// Creo l'oggetto
$newItem = new stdClass();
$newItem->id = uniqid();
$newItem->idProdottoCatalogo = $idProduct;
$newItem->taglia = $size;
$newItem->quantita = $quantity;
$newItem->prezzoTot = $quantity * $price;
$newItem->img = $imageName;

// Aggiungo l'oggetto all'array "cartArray"
$cartArray = json_decode($_POST['cartArray'], true);
array_push($cartArray, $newItem);

// Serializzo l'array e lo salvo nel local storage
$cartArrayJSON = json_encode($cartArray);
echo "<script>localStorage.setItem('cartArray', '$cartArrayJSON');</script>";

// Controlla se è stato caricato un file
if (isset($_FILES['file-input']) && $_FILES['file-input']['error'] === UPLOAD_ERR_OK) {
    // Percorso della cartella in cui salvare il file caricato
    $target_dir = "../img/user-images/";

    // Crea la cartella se non esiste
    if (!file_exists($target_dir)) {
      mkdir($target_dir, 0777, true);
    }

    // Nome del file
    $target_file = $target_dir . basename($_FILES['file-input']['name']);

    // Sposta il file caricato nella cartella specificata
    if (move_uploaded_file($_FILES['file-input']['tmp_name'], $target_file)) {
      echo "Il file " . htmlspecialchars(basename($_FILES['file-input']['name'])) . " è stato caricato con successo.";
    } else {
      echo "Si è verificato un errore durante il caricamento del file.";
    }
  } else {
    echo "Si è verificato un errore durante il caricamento del file.";
  }

// Reindirizzo l'utente alla pagina "cart.html"
// header("Location: ../pages/cart.html");
// exit();
?>