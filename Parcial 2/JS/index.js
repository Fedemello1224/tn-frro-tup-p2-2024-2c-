const x = "X";
const o = "O";
let players = "Jugador 1"
let juego = false;


const cuadrados = Array.from(document.querySelectorAll(".cell"));
const mensaje = document.querySelector(".message");

cuadrados.forEach((cuadrado,i) => {
  cuadrado.addEventListener("click", ()=>{
    if(juego === true) return;
    if(cuadrado.textContent !== "") return;
    cuadrado.innerText = players === "Jugador 1"? x : o;
    cuadrado.style.backgroundColor = players === "Jugador 1" ? "yellow" : "blue";
    const resultado = condicionesDeJuego()
    if (resultado === "empate") //En caso de empate muestra el mensaje de empate
    {
      mostrarMensaje("Empate!!");
    }
    players = players === "Jugador 1" ? "Jugador 2" : "Jugador 1";
  })
});
//Condiciones del juego para ganar y empatar
function condicionesDeJuego(){
  const tablero = cuadrados.map(cuadrado => cuadrado.textContent)
  console.log(tablero)

  //Horizontales
  for (let i = 0; i <= 9; i+=3)
  {
    if(tablero[i] && tablero[i] === tablero[i+1] && tablero[i] === tablero[i+2])
      {
        return ganar() ;
      }
    
  }

  //Verticales
  for (let i = 0; i <= 3; i++)
    {
      if(tablero[i] && tablero[i] === tablero[i+3] && tablero[i] === tablero[i+6])
        {
          return ganar();
        }
      
    }
  

  //Cruzadas
  if(tablero[0] && tablero[0] === tablero[4] && tablero[0] === tablero[8])
    {
      return ganar();
    }
    if(tablero[2] && tablero[2] === tablero[4] && tablero[2] === tablero[6])
    {
      return ganar();
    }
  //Empate
  if(!tablero.includes("")) return "empate";

  //Funcion para cuando hay ganador
 }
 function ganar(){
  juego = true
  mostrarMensaje("Ganador:" + players +" QEPD PALMA")
 }
 //Funcion de mostrar mensaje
 function mostrarMensaje(texto) {
  mensaje.innerText = texto;
  mensaje.style.display="block";
  setTimeout(() => {
    mensaje.style.display = "none"
  }, 5000);
 }

 //Boton de Reset
 const reset = document.querySelector(".restart-btn").addEventListener("click",() =>
  {
    cuadrados.forEach(cuadrado =>{
    cuadrado.textContent = ""
    cuadrado.style.backgroundColor = "";
    juego = false
    mensaje.style.display = "none"
    players = "Jugador 1"; 
    } );
  })




 


