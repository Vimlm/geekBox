import { head } from "./script.js";

const cadastroController = document.createElement("script");
const cadastroView = document.createElement("script");

cadastroController.setAttribute("type", "module");
cadastroController.setAttribute("src", "./src/js/controller/cadastroController.js");

cadastroView.setAttribute("type", "module");
cadastroView.setAttribute("src", "./src/js/view/cadastroView.js");

head.appendChild(cadastroController);
head.appendChild(cadastroView);
