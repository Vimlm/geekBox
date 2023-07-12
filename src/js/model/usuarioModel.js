export class Usuario {
  constructor(nome, sobrenome, cpf, email, senha, cep, logradouro, numero, complemento, bairro, cidade, estado) {
    this._nomeCompleto = {
      nome,
      sobrenome
    }
    this._cpf = cpf;
    this.email = email,
    this._senha = senha,
    this._endereco = {
      cep,
      numero,
      logradouro,
      complemento,
      bairro,
      cidade,
      estado,
    }
  }
}

export default Usuario;