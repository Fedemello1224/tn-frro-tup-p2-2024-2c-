

let usser = prompt("Ingrese el Usuario","");
let pass = prompt("Ingrese la Contraseña","");

let num1 = parseInt(prompt("Ingrese el valor 1", 0));
let num2 = parseInt(prompt("Ingrese el valor 2", 0));


const sum = num1 + num2;
const rest = num1 - num2;
const multi = num1 * num2;
const div = num1 / num2;

document.write("Bienvenido" +" ",usser,"<br/>")
document.write(num1, "+", num2,"=", sum,"<br/>" );
document.write(num1,"-",num2,"=", rest,"<br/>");
document.write(num1,"*",num2,"=", multi,"<br/>");
document.write(num1,"/",num2,"=", div,"<br/>");
