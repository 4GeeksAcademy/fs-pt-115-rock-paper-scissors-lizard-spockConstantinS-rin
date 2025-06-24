const juego =["piedra", "papel", "tijeras","lagarto", "spock"];

const eleccionPC= Math.floor(Math.random()*juego.length);


console.log("El PC elige:"+juego[eleccionPC]);

const empezarJuego = (eleccionJugador) =>{
// Robert me ha ayudado a hacer esta parte con el !juego.includes   
if (!juego.includes(eleccionJugador)) {
    return console.log("Qué estás haciendo ?")    
}
else if (
    (eleccionJugador === "piedra" && (juego[eleccionPC]==="tijeras" || juego[eleccionPC]==="lagarto")) ||
    (eleccionJugador === "papel" && (juego[eleccionPC]==="piedra" || juego[eleccionPC]==="spock")) ||
    (eleccionJugador === "tijeras" && (juego[eleccionPC]==="papel" || juego[eleccionPC]==="lagarto")) ||
    (eleccionJugador === "lagarto" && (juego[eleccionPC]==="spock" || juego[eleccionPC]==="papel")) ||
    (eleccionJugador === "spock" && (juego[eleccionPC]==="tijeras" || juego[eleccionPC]==="piedra"))  
)
{console.log("You Win!!!");}

else if(eleccionJugador===juego[eleccionPC])
{console.log("Empate !!!");}
else {
    console.log("You Lose!!!");
}
console.log("Tú eliges:", eleccionJugador);
}

empezarJuego("papel");
