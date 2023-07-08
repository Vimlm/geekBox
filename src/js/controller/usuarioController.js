 function criarUsuario(nome, sobrenome, senha, cpf, cep, numero, complemento, logradouro, bairro, cidade, estado) {

  const usuario = new Usuario(nome, sobrenome, senha, cpf, cep, numero, complemento, logradouro, bairro, cidade, estado);

  usuarios.push(usuario);
 }

 function buscarUsuario() {
  console.log('Fazer função para buscar usuário');
}