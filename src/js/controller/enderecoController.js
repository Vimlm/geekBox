import { cep } from '../view/cadastroView.js';
import { preencheEndereco } from '../view/enderecoView.js';

function buscaEndereco() {
  const request = new XMLHttpRequest();
  const cep = document.getElementById('cep').value;
  const url = `https://viacep.com.br/ws/${cep}/json/`;
  request.open('GET', url);
  request.onload = () => {
    if(cep.length === 8) {
      if (request.status === 200) {
        const endereco = JSON.parse(request.responseText);
        if(endereco.erro) {
          alert('CEP não encontrado');
          return;
        } else {
          preencheEndereco(endereco);
        }
        console.log(endereco);
      }
    } else {
      alert('CEP inválido');
    }
  }
  request.send();
}

cep.addEventListener('focusout', buscaEndereco);

export { buscaEndereco };