const head = document.querySelector('head');

const usuarioController = document.createElement("script");
const enderecoController = document.createElement("script");

const usuarioModel = document.createElement("script");

const enderecoView = document.createElement("script");

usuarioController.setAttribute("type", "module");
usuarioController.setAttribute("src", "./src/js/controller/usuarioController.js");


enderecoController.setAttribute("type", "module");
enderecoController.setAttribute("src", "./src/js/controller/enderecoController.js");


usuarioModel.setAttribute("type", "module");
usuarioModel.setAttribute("src", "./src/js/model/usuarioModel.js");


enderecoView.setAttribute("type", "module");
enderecoView.setAttribute("src", "./src/js/view/enderecoView.js");

head.appendChild(usuarioController);
head.appendChild(enderecoController);

head.appendChild(usuarioModel);

head.appendChild(enderecoView);