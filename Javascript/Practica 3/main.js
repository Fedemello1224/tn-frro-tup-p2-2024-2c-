//Ejercicio 7

/*let num1 = parseInt(prompt("Ingrese el valor 1", 0));
let num2 = parseInt(prompt("Ingrese el valor 2", 0));
let num3 = parseInt(prompt("Ingrese el valor 3", 0));
if(num1 > num2 && num1 > num3)
{
    Mayor=num1;
}
else if(num2 > num3)
{
    Mayor = num2;
}
else
{
    Mayor = num3;
}

console.log("El numero mayor es:", Mayor);
document.write("El numero mayor es:", Mayor);*/

//Ejercicio 8

/*let num1 = parseInt(prompt("Ingrese un valor", 0));

if(num1 % 2 === 0)
{
    console.log("El numero",num1,"es divisible por 2");
    document.write("El numero",num1,"es divisible por 2");
}
else
{
    console.log("El numero",num1,"no es divisible por 2");
    document.write("El numero",num1," no es divisible por 2");
}*/

//Ejercicio 13 y 14

/*let num1 = parseInt(prompt("Ingrese un valor", 0));

if(num1 % 2 === 0)
    {
        console.log("El numero",num1,"es divisible por 2");
        document.write("El numero",num1,"es divisible por 2");
    }
if(num1 % 3 === 0)   
    {
        console.log("El numero", num1,"es divisible por 3");
        document.write("El numero",num1,"es divisible por 3");
    }
if(num1 % 5 === 0)   
    {
        console.log("El numero", num1,"es divisible por 5");
        document.write("El numero",num1,"es divisible por 5");
    }          
if(num1 % 7 === 0)   
    {
        console.log("El numero", num1,"es divisible por 7");
        document.write("El numero",num1,"es divisible por 7");
    } 
*/
//Ejercicio 15

/*let num1 = parseInt(prompt("Ingrese un valor", 0));
document.write("Los numeros por los que ", num1, " es divisible son:");
for ( i= 0; i <= num1; i++)
{
    if(num1 % i === 0)
    {
        document.write(",",i);
    }
}
*/

//Ejercicio 16

/*var num1 = parseInt(prompt("Ingrese un valor", 0));
var num2 = parseInt(prompt("Ingrese un valor", 0));
if (num1 < num2)
{
    num3=num1;
}
else
{
    num3=num2;
}
document.write("Los numeros por los que "+ num1 +" y "+ num2 +" son divisibles son:");
for ( i= 0; i <= num3; i++)
{
    if(num1 % i === 0 && num2 % i === 0)
    {
        document.write(",",i);
    }
}
*/

//Ejercicio 17

/*let num1 = parseInt(prompt("Ingrese un valor", 0));
if (num1 <= 1)
{
    console.log(num1 + " no es un numero primo");
    document.write(num1 + " no es un numero primo");
}
else
{
    let esPrimo = true;

for (let i = 2; i <= num1 / 2; i++ )
{
    if (num1 % i === 0)
    {
        esPrimo = false;
        break;
    }
}
if(esPrimo)
{
    console.log(num1 + " es un numero primo");
    document.write(num1 + " es un numero primo");
}
else
{
    console.log(num1 + " no es un numero primo");
    document.write(num1 + " no es un numero primo");
}
}
*/
//Ejercicio 18

/*let num1 = parseInt(prompt("Ingrese un valor", 0));
if(num1 <= 18)
{
    console.log("No puede sacar el carnet de conducir")
    document.write("No puede sacar el carnet de conducir")
}
else
{
    console.write("Puede sacar el carnet de conducir")
    document.write("Puede sacar el carnet de conducir")
}
/*

//Ejercicio 19








