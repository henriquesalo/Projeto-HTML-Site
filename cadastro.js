import {nome} from './y/services.js'

const form = document.querySelector("#form_cadastro");

form.addEventListener('submit', (event)=> {

   event.preventDefault();

   let novoCadastro = {
      nome : form.nome.value,
      email : form.email.value,
      tel : form.tel.value,
      aniversario : form.aniversario.value
    }
    console.log(novoCadastro)
})