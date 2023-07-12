export class Usuario {
  constructor(nome, sobrenome, cpf, email, senha, cep, logradouro, numero, /*complemento,*/ bairro, cidade, estado) {
    this._nomeCompleto = {
      nome,
      sobrenome
    }
    this._cpf = cpf;
    this.email = email,
    this._senha = senha,
    this._endereco = {
      cep,
      logradouro,
<<<<<<< HEAD
      // complemento,
=======
      numero,
      complemento,
>>>>>>> parent of f9f043b (feat: :sparkles: Cadastro usuário)
      bairro,
      cidade,
      estado,
    }
  }
}

export default Usuario;
