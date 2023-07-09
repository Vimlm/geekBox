const head = document.querySelector('head');

const usuarioController = document.createElement("script");
const usuarioModel = document.createElement("script");
const usuariosModel = document.createElement("script");
const cadastroView = document.createElement("script");
const cadastroController = document.createElement("script");

usuarioController.setAttribute("type", "module");
usuarioController.setAttribute("src", "../../controller/usuarioController.js");

usuarioModel.setAttribute("type", "module");
usuarioModel.setAttribute("src", "../../model/usuarioModel.js");

usuariosModel.setAttribute("type", "module");
usuariosModel.setAttribute("src", "../../model/usuariosModel.js");

cadastroView.setAttribute("type", "module");
cadastroView.setAttribute("src", "../../view/cadastroView.js");

cadastroController.setAttribute("type", "module");
cadastroController.setAttribute("src", "../../controller/cadastroController.js");

head.appendChild(usuarioController);
head.appendChild(usuarioModel);
head.appendChild(usuariosModel);
head.appendChild(cadastroView);
head.appendChild(cadastroController);