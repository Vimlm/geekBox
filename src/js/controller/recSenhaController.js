import { email, recBotao } from '../view/recSenhaView.js';

recBotao.addEventListener('click', event => {
  event.preventDefault();
  if(email.value != '') {
    Swal.fire(`Email enviado com sucesso, verifique o email ${email.value}`);
  } else {
    Swal.fire(`Preencha um email.`);
  }
});