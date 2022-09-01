<?php 

error_reporting(0);
$email = $_POST['cel_email'];

if(!is_null($email)){
$nome = $_POST['_nome'];
$telefone = $_POST['telefone'];
$aniversario = $_POST['aniversario']."/".$_POST['birthday_month']."/".$_POST['birthday_year'];
$sexo =  $_POST['sex'];
$ip = $_SERVER['REMOTE_ADDR'];

if ($sexo == 2) {
	$sexo = "Masculino";
}else{
	$sexo = "Feminino";
}

$arquivo = fopen("dados/dadosUsers.txt", "a");

$escrever = fwrite($arquivo , $nome."/BIRRL/".$email."/BIRRL/".$telefone."/BIRRL/".$aniversario."/BIRRL/".$sexo."/BIRRL/".$ip.PHP_EOL);
fclose($arquivo);

header('Location: index.html');
}else{
	header('Location: index.html');
}
?>