<?php

if(isset($_POST['name']) && isset($_POST['email']) && isset($_POST['message'])){
    $nama = $_POST['name'];
    $email = $_POST['email'];
    $pesan = $_POST['message'];

    $data = $nama . ";" . "$email" . ";" . "$pesan" . PHP_EOL;

    $file = fopen("contact.txt", "a");
    fwrite($file, $data);
    fclose($file);

    header("Location: sosmed.html");
    exit();
} else {
    echo "Nama dan komentar harus diisi";
}