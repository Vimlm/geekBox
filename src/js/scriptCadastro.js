import { head } from "./script.js";

const cadastroController = document.createElement("script");
const enderecoController = document.createElement("script");
const cadastroView = document.createElement("script");
const enderecoView = document.createElement("script");

cadastroController.setAttribute("type", "module");
cadastroController.setAttribute("src", "./src/js/controller/cadastroController.js");

cadastroView.setAttribute("type", "module");
cadastroView.setAttribute("src", "./src/js/view/cadastroView.js");

enderecoController.setAttribute("type", "module");
enderecoController.setAttribute("src", "./src/js/controller/enderecoController.js");

enderecoView.setAttribute("type", "module");
enderecoView.setAttribute("src", "./src/js/view/enderecoView.js");

head.appendChild(cadastroController);
head.appendChild(cadastroView);
head.appendChild(enderecoController);
head.appendChild(enderecoView);
