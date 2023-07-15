function cadastrarUsuario(index, usuario) {
  localStorage.setItem(index, usuario);
}

function buscarUsuario(key) {
  const usuarioJson = localStorage.getItem(key);
  return !usuarioJson;
}

export { cadastrarUsuario, buscarUsuario };