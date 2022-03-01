// -----------------------  PERSONAJE y JUGADOR ------------------------

class Personaje {
    constructor(nombre){
        if ( nombre == 'vegito'){
            this.vida = 100;
            this.ataque = 25;
            this.defensa = 10;
            this.imagen = './imagenes/seleccionpj/VegitoBlue.png';
        } else if (nombre == 'celula') {
            this.vida = 120;
            this.ataque = 15;
            this.defensa = 15;
            this.imagen = './imagenes/seleccionpj/cell.png';
        } else if (nombre == 'gohan') {
            this.vida = 150;
            this.ataque = 15;
            this.defensa = 14;
            this.imagen = './imagenes/seleccionpj/gohan.png';
        } else if (nombre == 'zamasu'){
            this.vida = 100;
            this.ataque = 25;      
            this.defensa = 10;
            this.imagen = './imagenes/seleccionpj/ZamasuRose.png';
        }
    this.nombre = nombre;
    }
}

let jugador1;
let jugador2;
// ------------------------------------------------CAMBIAR PANTALLA ---------------------------------- 
let personajeSeleccionado1 = document.querySelector('.personajeSeleccionado1')
let personajeSeleccionado2 = document.querySelector('.personajeSeleccionado2')
let vida1 = document.getElementById('vida1');
let vida2 = document.getElementById('vida2');

const cambio = (fondo1,fondo2) => {
    fondo1.style.display = 'none';
    fondo2.style.display = 'flex';
}

const cambiarPantalla = () => {
    let fondo1 = document.querySelector(".contenedor-seleccion");
    let fondo2 = document.querySelector(".contenedor-batalla");
    let fondo3 = document.querySelector(".contenedor-ganador");

    if (fondo1.style.display == 'flex') {
        cambio(fondo1,fondo2);
        // personajeSeleccionado1.innerHTML = personaje.imagen
        // personajeSeleccionado2.innerHTML = personaje.imagen
        // vida1.innerHTML = personaje.vida
        // vida2.innerHTML = personaje.vida
        

    } else if (fondo2.style.display == 'flex'){
        // mostrar jugador GANADOR
         cambio(fondo2,fondo3);
    }
}
// ------------------------- ASIGNAR PERSONAJE -------------------------
const asignarPersonaje = (jugador, personaje) => {
    jugador = new Personaje(personaje);
    return jugador
}
// let contenedorpj1 = document.getElementsByClassName(".personajeSeleccionado1")
// let contenedorpj2 = document.getElementsByClassName(".personajeSeleccionado2")
const seleccionPersonajes = (personaje) => {

    switch(personaje) {
        case 'celula':
            if (!jugador1) {
                jugador1 = asignarPersonaje(jugador1, 'celula');
                //contenedorpj1.style.background-image=url("../imagenes/personajes/celulaPelea.png")
                console.log(jugador1)
            } else if (!jugador2) {
                jugador2 = asignarPersonaje(jugador2, 'celula')
                //contenedorpj2 .style.background-image = 'url("../imagenes/personajes/celulaPelea.png"')
                console.log(jugador2)
                cambiarPantalla();
            }
            break;
        case 'gohan':
            if (!jugador1) {
                jugador1 = asignarPersonaje(jugador1,'gohan');
            } else if (!jugador2) {
                jugador2 = asignarPersonaje(jugador2, 'gohan')
                console.log(jugador2)
                cambiarPantalla();
            }
            break;
        case 'zamasu':
            if (!jugador1) {
                jugador1 = asignarPersonaje(jugador1,'zamasu');
            } else if (!jugador2) {
                jugador2 = asignarPersonaje(jugador2, 'zamasu')
                cambiarPantalla();
            }
            break;
        case 'vegito':
            if (!jugador1) {
                jugador1 = asignarPersonaje(jugador1,'vegito');
            } else if (!jugador2) {
                jugador2 = asignarPersonaje(jugador2, 'vegito')
                cambiarPantalla();
            }
        break;
    }
}

// --------------------------------------------- COMBATE -----------------------------------
 
const Atacar = (defensor, atacante,contadorVida) => {
        contadorVida = defensor.personaje.vida - atacante.personaje.ataque1 + defensor.personaje.defensa;
        return contadorVida = defensor.personaje.vida;
 }

// ----------------------- VOLVER A JUGAR --------------------
const RepetirJuego = () => {
    if (fondo3.style.display == 'flex') return cambiarPantalla(fondo3,fondo1);
}


   
    
