import Usuario from '../model/usuarioModel.js';
import { usuarios } from '../model/usuariosModel.js';

//Função para cadastrar usuário
function cadastrarUsuario(...usuarioObj) {
  const { nome, sobrenome, cpf, cep, numero, complemento, logradouro, bairro, cidade, estado } = usuarioObj[0];
  const usuario = new Usuario(nome, sobrenome, cpf, cep, numero, complemento, logradouro, bairro, cidade, estado);
  usuarios.push(usuario);
  // console.log(usuarios);
 }

 function buscarUsuario() {
  console.log('Fazer função para buscar usuário');
}

export { cadastrarUsuario, buscarUsuario };