function cadastrarUsuario(index, usuario) {
  localStorage.setItem(index, usuario);
}

function buscarUsuario(key) {
  const usuarioJson = localStorage.getItem(key);
  const email = JSON.parse(usuarioJson)._email;
  if(!email) {
    return false;
  } else {
    return true;
  }
}
buscarUsuario('victor@email.com');
export { cadastrarUsuario, buscarUsuario };