import { logradouro, bairro, cidade, estado } from './cadastroView.js';

function preencheEndereco(endereco) {
  logradouro.value = endereco.logradouro;
  bairro.value = endereco.bairro;
  cidade.value = endereco.localidade;
  estado.value = endereco.uf;
}

export { preencheEndereco };