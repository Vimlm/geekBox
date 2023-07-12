const head = document.querySelector('head');

const recSenhaController = document.createElement("script");
const recSenhaView = document.createElement("script");

recSenhaController.setAttribute("type", "module");
recSenhaController.setAttribute("src", "./src/js/controller/recSenhaController.js");

recSenhaView.setAttribute("type", "module");
recSenhaView.setAttribute("src", "./src/js/view/recSenhaView.js");

head.appendChild(recSenhaController);
head.appendChild(recSenhaView);