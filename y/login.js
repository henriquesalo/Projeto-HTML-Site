function validateFields(){
    //pega o valor do campo de email
    //verifica se o email nao é vazio e se o email é valido
    //se for true, habilita o botao de recuperar senha
    //se for false, desabilita o botao de recuperar senha
    const emailValid = isEmailValid();
    document.getElementById('recover-password-button').disabled = !emailValid;

    const password = isPasswordValid();
    document.getElementById('login-button').disabled = !emailValid || !passWordValid;
}

function isEmailValid(){
    const email = document.getElementById("email").value;
    if(!email){
        return false;
    }
    return validateEmail(email);
}

function isPasswordValid(){
    const password = document.getElementById('password');
    if (!password){
        return false;
    }
    return true;
}

function validateEmail(){
    //encontrei essa funcao na internet
    //e nao faço a minima ideia do pq 
    //a estrutura seja essa
    return /\S+@\S+\.\S+/.test(email);
}
