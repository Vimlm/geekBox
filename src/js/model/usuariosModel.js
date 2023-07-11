const usuarios = [];

function buscaEmail(email) {
  if(email == usuarios.email) {
    return true;
  } else {
    return false;
  }
}

function buscaSenha(senha) {
  if(senha == usuarios.senha) {
    return true;
  } else {
    return false;
  }
}

export { usuarios, buscaEmail, buscaSenha };
