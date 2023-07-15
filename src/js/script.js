const head = document.querySelector('head');

const usuarioController = document.createElement("script");

const usuarioModel = document.createElement("script");

usuarioController.setAttribute("type", "module");
usuarioController.setAttribute("src", "../js/controller/usuarioController.js");

usuarioModel.setAttribute("type", "module");
usuarioModel.setAttribute("src", "../js/model/usuarioModel.js");

head.appendChild(usuarioController);

head.appendChild(usuarioModel);

export { head }