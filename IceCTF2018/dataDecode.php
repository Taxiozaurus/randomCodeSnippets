<?php

$file = fopen("data.txt", "r");
$text = fread($file, filesize("data.txt"));
fclose($file);

echo base64_decode($text);

// $decode_file = fopen("data_decoded.txt", "w");
// fwrite($decode_file, base64_decode(base64_decode($file)));
// fclose($decode_file);