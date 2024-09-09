

let usser = prompt("Ingrese el Usuario","");
let pass = prompt("Ingrese la Contraseña","");

let num1 = parseInt(prompt("Ingrese el valor 1", 0));
let num2 = parseInt(prompt("Ingrese el valor 2", 0));

if(num1 > num2)
{
    Mayor=num1;
}
else
{
    Mayor = num2;
}

console.log("El numero mayor es:",Mayor);

const sum = num1 + num2;
const rest = num1 - num2;
const multi = num1 * num2;
const div = num1 / num2;

console.log("Bienvenido" +" ",usser);
console.log(num1, "+", num2,"=", sum );
console.log(num1,"-",num2,"=", rest);
console.log(num1,"*",num2,"=", multi);
console.log(num1,"/",num2,"=", div);

document.write("Bienvenido" +" ",usser,"<br/>");
document.write(num1, "+", num2,"=", sum,"<br/>" );
document.write(num1,"-",num2,"=", rest,"<br/>");
document.write(num1,"*",num2,"=", multi,"<br/>");
document.write(num1,"/",num2,"=", div,"<br/>");

document.write("El numero mayor es:",Mayor);
