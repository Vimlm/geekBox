import { botaoRegistreSe } from "../view/loginView.js";
import { emailLogin, senhaLogin } from "../view/loginView.js";
import { buscaEmail, buscaSenha } from "../model/usuariosModel.js";

botaoRegistreSe.addEventListener('click', event => {
  event.preventDefault();
});

if(chancesLogin == 3) {
  console.log('Você atingiu o número máximo de tentativas para login, favor recuperar a sua senha.');
} else {
  if(buscaEmail(emailLogin.value) && buscaSenha(senhaLogin.value)) {
    console.log('Entrou no sistema.');
    chancesLogin = 0;
  } else {
    chancesLogin += 1;
    console.log('Senha e email não conferem.');
  }
}