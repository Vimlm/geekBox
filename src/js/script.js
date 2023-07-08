const head = document.querySelector('head');

const usuarioController = document.createElement("script");
const enderecoModel = document.createElement("script");
const usuarioModel = document.createElement("script");
const usuariosModel = document.createElement("script");
const view = document.createElement("script");

usuarioController.setAttribute("src", "../../controller/usuarioController.js");
usuarioModel.setAttribute("src", "../../model/usuarioModel.js");
usuariosModel.setAttribute("src", "../../model/usuariosModel.js");
view.setAttribute("src", "../../view/view.js");

head.appendChild(usuarioController);
head.appendChild(enderecoModel);
head.appendChild(usuarioModel);
head.appendChild(usuariosModel);
head.appendChild(view);