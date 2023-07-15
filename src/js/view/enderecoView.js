import { cep, logradouro, bairro, cidade, estado } from './cadastroView.js';
import { buscaEndereco } from '../controller/enderecoController.js'

function preencheEndereco(endereco) {
  logradouro.value = endereco.logradouro;
  bairro.value = endereco.bairro;
  cidade.value = endereco.localidade;
  estado.value = endereco.uf;
}

cep.addEventListener('focusout', () => {
  if(cep.value === '') {
    Swal.fire('Primeiro você tem que preencher o cep');
  } else {
    buscaEndereco();
  }
});

export { preencheEndereco };