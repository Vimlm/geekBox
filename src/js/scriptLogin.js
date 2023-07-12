import { head } from "./script.js";
const loginController = document.createElement("script");
const loginView = document.createElement("script");

loginController.setAttribute("type", "module");
loginController.setAttribute("src", "./src/js/controller/loginController.js");

loginView.setAttribute("type", "module");
loginView.setAttribute("src", "./src/js/view/loginView.js");

head.appendChild(loginController);
head.appendChild(loginView);