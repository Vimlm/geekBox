import { nome, sobrenome, cpf, email, senha ,cep, numero, /*complemento,*/ logradouro, bairro, cidade, estado, botao } from "../view/cadastroView.js";
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
<<<<<<< HEAD
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
  cadastrarUsuario(usuario.email ,JSON.stringify(usuario));
  Swal.fire('Cadastro realizado com sucesso, você será redirecionado.');
  setTimeout(() => {
    window.location.href = 'http://127.0.0.1:5500/login.html';
  }, 2000);
=======
  const dadosUsuario = recolherDados();
  cadastrarUsuario(dadosUsuario);
  console.log(usuarios);
>>>>>>> parent of f9f043b (feat: :sparkles: Cadastro usuário)
});