function cadastrarUsuario(index, usuario) {
  localStorage.setItem(index, usuario);
}

function buscarUsuario(email) {
  const chave = localStorage.getItem(email);
  if(!chave) {
    alert('Usuario não encontrado.');
  } else {
    return localStorage.getItem(JSON.parse(email));
  }
}

export { cadastrarUsuario, buscarUsuario };