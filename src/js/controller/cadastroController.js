import { nome, sobrenome, cpf, email, senha ,cep, numero, /*complemento,*/ logradouro, bairro, cidade, estado, botao } from "../view/cadastroView.js";
import { cadastrarUsuario } from "../controller/usuarioController.js";
import Usuario from "../model/usuarioModel.js";

botao.addEventListener('click', (event) => {
  event.preventDefault();
  const usuario = new Usuario(
    nome.value,
    sobrenome.value,
    cpf.value,
    email.value,
    senha.value,
    cep.value,
    numero.value,
    // complemento.value,
    logradouro.value,
    bairro.value,
    cidade.value,
    estado.value
  );
  console.log(usuario);
  console.log(typeof usuario);
  cadastrarUsuario(usuario._email ,JSON.stringify(usuario));
  Swal.fire('Cadastro realizado com sucesso, você será redirecionado.');
  setTimeout(() => {
    window.location.href = 'http://127.0.0.1:5500/login.html';
  }, 2000);
});