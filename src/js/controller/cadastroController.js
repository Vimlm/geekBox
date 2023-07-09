import { nome, sobrenome, cpf, email, cep, numero, logradouro, bairro, cidade, estado, botao } from "../view/cadastroView.js";
import { cadastrarUsuario, buscarUsuario } from "../controller/usuarioController.js";
import { usuarios } from "../model/usuariosModel.js";

//Recolher Dados de Usuário
function recolherDados() {
  const nomeValor = nome.value;
  const sobrenomeValor = sobrenome.value;
  const cpfValor = cpf.value;
  const emailValor = email.value;
  const cepValor = cep.value;
  const numeroValor = numero.value;
  const logradouroValor = logradouro.value;
  const bairroValor = bairro.value;
  const cidadeValor = cidade.value;
  const estadoValor = estado.value;

  const usuarioObj = {
    nome: nomeValor,
    sobrenome: sobrenomeValor, 
    cpf: cpfValor,
    email: emailValor,
    cep: cepValor,
    numero: numeroValor,
    logradouro: logradouroValor,
    bairro: bairroValor,
    cidade: cidadeValor,
    estado: estadoValor
  };
  return usuarioObj;
}

botao.addEventListener('click', (event) => {
  event.preventDefault();
  const dadosUsuario = recolherDados();
  cadastrarUsuario(dadosUsuario);
  console.log(usuarios);
});