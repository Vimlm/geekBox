class Usuario {
  _nome;
  _sobrenome;
  _cpf;
  _email;
  _endereco;

  constructor(nome, sobrenome, cpf, email, endereco) {
    this._nome = nome;
    this._endereco = endereco;
    this._cpf = cpf;
    this._email = email;
    this._endereco = endereco;
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
    this.setSobrenome = sobrenome;
  }

  getCpf() {
    return this._cpf;
  }

  setCpf(cpf) {
    this._cpf = cpf;
  }

  getEndereco() {
    return this.endereco;
  }

  setEndereco(endereco) {
    this.endereco = endereco;
  }
}

class Endereco {
  _cep;
  _numero;
  _logradouro;
  _bairro;
  _cidade;
  _estado;

  getCep() {
    return this._cep;
  }

  setCep(cep) {
    this._cep = cep;
  }

  getNumero() {
    return this._numero;
  }

  setNumero(numero) {
    this._numero = numero;
  }

  getLogradouro() {
    return this._logradouro;
  }

  setLogradouro(logradouro) {
    this._logradouro = logradouro;
  }

  getBairro() {
    return this._bairro;
  }

  setBairro(bairro) {
    this._bairro = bairro;
  }

  getCidade() {
    return this._cidade;
  }

  setCidade(cidade) {
    this._cidade = cidade;
  }

  getEstado() {
    return this._estado;
  }

  setEstado(estado) {
    this._estado = estado;
  }
}