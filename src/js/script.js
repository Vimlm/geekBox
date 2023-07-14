const head = document.querySelector('head');

//Controller
const usuarioController = document.createElement("script");

//Model
const usuarioModel = document.createElement("script");

//Controller
usuarioController.setAttribute("type", "module");
usuarioController.setAttribute("src", "../js/controller/usuarioController.js");

//Model
usuarioModel.setAttribute("type", "module");
usuarioModel.setAttribute("src", "../js/model/usuarioModel.js");

//Controller
head.appendChild(usuarioController);

//Model
head.appendChild(usuarioModel);

export { head }