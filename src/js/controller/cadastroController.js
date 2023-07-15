import { nome, sobrenome, cpf, email, senha, confSenha ,cep, numero, complemento, logradouro, bairro, cidade, estado, botao } from "../view/cadastroView.js";
import { buscarUsuario, cadastrarUsuario } from "./usuarioController.js";
import Usuario from "../model/usuarioModel.js";

botao.addEventListener('click', (event) => {
  event.preventDefault();
  const validaDados = validacao();

  if(validaDados) {
    const usuario = new Usuario(
      nome.value,
      sobrenome.value,
      cpf.value,
      email.value,
      senha.value,
      cep.value,
      logradouro.value,
      numero.value,
      complemento.value,
      bairro.value,
      cidade.value,
      estado.value
    );

    if(buscarUsuario(usuario._email)) {
      try {
          cadastrarUsuario(usuario._email ,JSON.stringify(usuario));
          Swal.fire('Cadastro realizado com sucesso, você será redirecionado.');
          setTimeout(() => {
            window.location.href = './login.html';
          }, 2000);
      } catch (e){
        throw new Error(e);
      }
    } else {
      Swal.fire('Email já cadastrado');
    }
  }
});

function validacao() {
  const formulario = document.querySelector('.cad-formulario');
  const inputs = formulario.querySelectorAll('input[required]');

  let validacao = true;

  for (const input of inputs) {
    if (input.value.trim() === '') {
      Swal.fire('Preencha todos os dados obrigatórios');
      validacao = false;
      break;
    }
  }

  if (validacao) {
    if (senha.value !== confSenha.value) {
      Swal.fire('As senhas não conferem.');
      validacao = false;
    } else if (senha.value.length < 5) {
      Swal.fire('A senha deve conter pelo menos 5 caracteres.');
      validacao = false;
    }
  }

  return validacao;
}
