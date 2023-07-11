import { preencheEndereco } from '../view/enderecoView.js';

function buscaEndereco() {
  const request = new XMLHttpRequest();
  const cep = document.getElementById('cep').value;
  const url = `https://viacep.com.br/ws/${cep}/json/`;
  request.open('GET', url);
  if(cep.length === 8) {
    request.onload = () => {
        if (request.status === 200) {
          const endereco = JSON.parse(request.responseText);
          if(endereco.erro) {
            alert('CEP não encontrado');
            return;
          } else {
            preencheEndereco(endereco);
          }
        }
      }
  } else {
    alert('Cep Inválido');
  }
  request.send();
}

export { buscaEndereco };