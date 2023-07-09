export class Usuario {
  constructor(nome, sobrenome, senha, cpf, cep, numero, complemento, logradouro, bairro, cidade, estado) {
    this._nomeCompleto = {
      nome,
      sobrenome
    }
    // this._senha = senha;
    this._cpf = cpf;
    this._endereco = {
      cep,
      numero,
      complemento,
      logradouro,
      bairro,
      cidade,
      estado,
    }
  }

  getNome() {
    return this._nome;
  }

  setNome(nome) {
    this._nome = nome;
  }

  getSobrenome() {
    return this._sobrenome;
  }

  setSobrenome(sobrenome) {
    this._sobrenome = sobrenome;
  }

  getSenha() {
    return this._senha;
  }

  setSenha(senha) {
    this._senha = senha;
  }

  getCpf() {
    return this._cpf;
  }

  setCpf(cpf) {
    this._cpf = cpf;
  }

  getEndereco() {
    return this._endereco;
  }

  setEndereco(endereco) {
    this._endereco = endereco;
  }
}

export default Usuario;
