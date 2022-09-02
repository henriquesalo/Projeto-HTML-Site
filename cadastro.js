const form = document.querySelector("#aform_cadastro");

form.addEventListener('submit', (event)=> {

   event.preventDefault();

   let novoCadastro = {
      nome : form.nome.value,
      email : form.email.value,
      tel : form.tel.value,
      sex : form.sex.value,
      aniversario : form.aniversario.value
    }
    console.log(novoCadastro)
})