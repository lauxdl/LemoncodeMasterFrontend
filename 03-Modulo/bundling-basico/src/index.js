import sendSaludo from './enviaSaludo';
import logoImg from './content/logo_1.png';
import "./style.scss";

const saludo = sendSaludo();
document.getElementById('saludo').innerHTML = "<p>" + saludo + "</p>";

const img = document.createElement('img');
img.src = logoImg;
document.getElementById('imgContainer').appendChild(img);
