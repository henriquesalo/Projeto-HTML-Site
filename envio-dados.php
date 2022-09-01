<?php
 
if (isset($_POST['texto'])) {
   $texto = $_POST['texto'];
 
   $arquivo = fopen('dados/dadosUser.txt', 'w');
   fwrite($arquivo, $texto);
   fclose($arquivo);
}
?>