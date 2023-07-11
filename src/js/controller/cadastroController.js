import { nome, sobrenome, cpf, email, cep, numero, logradouro, bairro, cidade, estado, botao } from "../view/cadastroView.js";
import { cadastrarUsuario } from "../controller/usuarioController.js";
import { usuarios } from "../model/usuariosModel.js";

//Recolher Dados de Usuário
function recolherDados() {
  const usuarioObj = {
    nome: nome.value,
    sobrenome: sobrenome.value, 
    cpf: cpf.value,
    email: email.value,
    endereco: {
      cep: this.cep.value,
      numero: this.numero.value,
      logradouro: this.logradouro.value,
      bairro: this.bairro.value,
      cidade: this.cidade.value,
      estado: this.estado.value,
    }
  };
  return usuarioObj;
}

botao.addEventListener('click', (event) => {
  event.preventDefault();
  const dadosUsuario = recolherDados();
  cadastrarUsuario(dadosUsuario);
  console.log(usuarios);
});