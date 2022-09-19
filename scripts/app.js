function cadastro(){
    alert("Seus cadastro foi efetuado com sucesso !");
    window.location.replace("https://21diasdeoracao.com/oracoes.html");
}
const firebaseConfig = {

    apiKey: "AIzaSyAsjcPpOoHtAH3ZtqR_P-YIONB4PbaS_I0",
    authDomain: "diasdeoracao.firebaseapp.com",
    projectId: "diasdeoracao",
    storageBucket: "diasdeoracao.appspot.com",
    messagingSenderId: "1067463051687",
    appId: "1:1067463051687:web:35da583bf663268d5cce82"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = firebaseApp.firestore();
const form = document.querySelector('#form_cadastro');

form.addEventListener('submit',(event)=>{
    event.preventDefault();

    let novoCadastro = {
        nome: form.nome.value,
        email: form.email.value,
        tel: form.tel.value,
        nascimento: form.nascimento.value
    }
    db.collection('Cadastros').add({
   novoCadastro: novoCadastro
})
    console.log(novoCadastro)
})