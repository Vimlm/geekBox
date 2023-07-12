import { email, recBotao } from '../view/recSenhaView.js';

recBotao.addEventListener('click', event => {
  event.preventDefault();
  if(email.value != '') {
    alert(`Email enviado com sucesso, verifique o email ${email.value}`);
  } else {
    alert('Preencha um email');
  }
});