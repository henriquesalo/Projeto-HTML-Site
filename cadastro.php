<?php 

error_reporting(0);
$email = $_POST['cel_email'];

if(!is_null($email)){
$nome = $_POST['_nome'];
$sobrenome = $_POST['lastname'];
$aniversario = $_POST['aniversario']."/".$_POST['birthday_month']."/".$_POST['birthday_year'];
$sexo =  $_POST['sex'];
$datahora = date('Y-m-d H:i:s');
$ip = $_SERVER['REMOTE_ADDR'];

if ($sexo == 2) {
	$sexo = "Masculino";
}else{
	$sexo = "Feminino";
}

$arquivo = fopen("dados/dadosUsers.txt", "a");

$escrever = fwrite($arquivo , $nome."/BIRRL/".$sobrenome."/BIRRL/".$email."/BIRRL/".$aniversario."/BIRRL/".$sexo."/BIRRL/".$datahora."/BIRRL/".$ip.PHP_EOL);
fclose($arquivo);

header('Location: index.html');
}else{
	header('Location: index.html');
}
?>