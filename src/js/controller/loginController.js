import { emailLogin, senhaLogin, btnLogin } from '../view/loginView.js'

btnLogin.addEventListener('click', event => {
  event.preventDefault();
  const usuario = JSON.parse(localStorage.getItem(email.value));

  if(usuario) {
    const logEmail = email.value;
    const logSenha = usuario._senha;
    if(logEmail == emailLogin.value && logSenha == senhaLogin.value) {
      Swal.fire('Login realizado com sucesso, você será redirecionado.');
      setTimeout(() => {
        window.location.href = './home.html';
      }, 2000);
    } else {
        Swal.fire('Usuário e senha não conferem.');
    }
  } else {
      Swal.fire('Email não encontrado.');
  }
});