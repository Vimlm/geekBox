import { Endereco } from "./enderecoModel.js";

export class Usuario extends Endereco {
  constructor(nome, sobrenome, cpf, email, senha, cep, logradouro, numero, complemento, bairro, cidade, estado) {
    super(cep, logradouro, numero, complemento, bairro, cidade, estado);
    this._nomeCompleto = {
      nome,
      sobrenome
    };
    this._cpf = cpf;
    this._email = email;
    this._senha = senha;
  }
}

export default Usuario;
