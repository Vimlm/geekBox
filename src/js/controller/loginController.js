import { emailLogin, senhaLogin, btnLogin, btnRegistre } from '../view/loginView.js'

btnLogin.addEventListener('click', event => {
  event.preventDefault();
  const usuario = JSON.parse(localStorage.getItem(email.value));

  if(usuario) {
    const logEmail = email.value;
    const logSenha = usuario._senha;
    if(logEmail == emailLogin.value && logSenha == senhaLogin.value) {
      Swal.fire('Login realizado com sucesso, você será redirecionado.');
      setTimeout(() => {
        window.location.href = 'http://127.0.0.1:5500/home.html';
      }, 2000);
    } else {
        Swal.fire('Usuário e senha não conferem.');
    }
  } else {
      Swal.fire('Email não encontrado.');
  }
});

btnRegistre.addEventListener('click', event => {
  event.preventDefault();
  setTimeout(() => {
    window.location.href = 'http://127.0.0.1:5500/cadastro.html';
  }, 200);
})