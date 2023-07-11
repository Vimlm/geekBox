const head = document.querySelector('head');

const usuarioController = document.createElement("script");
const cadastroController = document.createElement("script");
const enderecoController = document.createElement("script");
const loginController = document.createElement("script");

const usuarioModel = document.createElement("script");
const usuariosModel = document.createElement("script");

const cadastroView = document.createElement("script");
const enderecoView = document.createElement("script");
const loginView = document.createElement("script");

usuarioController.setAttribute("type", "module");
usuarioController.setAttribute("src", "./src/js/controller/usuarioController.js");

cadastroController.setAttribute("type", "module");
cadastroController.setAttribute("src", "./src/js/controller/cadastroController.js");

enderecoController.setAttribute("type", "module");
enderecoController.setAttribute("src", "./src/js/controller/enderecoController.js");

loginController.setAttribute("type", "module");
loginController.setAttribute("src", "./src/js/controller/loginController.js");

usuarioModel.setAttribute("type", "module");
usuarioModel.setAttribute("src", "./src/js/model/usuarioModel.js");

usuariosModel.setAttribute("type", "module");
usuariosModel.setAttribute("src", "./src/js/model/usuariosModel.js");

cadastroView.setAttribute("type", "module");
cadastroView.setAttribute("src", "./src/js/view/cadastroView.js");

enderecoView.setAttribute("type", "module");
enderecoView.setAttribute("src", "./src/js/view/enderecoView.js");

loginView.setAttribute("type", "module");
loginView.setAttribute("src", "./src/js/view/loginView.js");



head.appendChild(usuarioController);
head.appendChild(cadastroController);
head.appendChild(enderecoController);
head.appendChild(loginController);

head.appendChild(usuarioModel);
head.appendChild(usuariosModel);

head.appendChild(cadastroView);
head.appendChild(enderecoView);
head.appendChild(loginView);