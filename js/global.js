// -----------------------  PERSONAJE y JUGADOR ------------------------

class Personaje {
    constructor(nombre){
        if ( nombre == 'vegito'){
            this.vida = 100;
            this.ataque1 = 35;
            this.ataque2 = 40;
            this.defensa = 10;
        } else if (nombre == 'celula') {
            this.vida = 120;
            this.ataque1 = 25;
            this.ataque2 = 30;
            this.defensa = 15;
        } else if (nombre == 'gohan') {
            this.vida = 150;
            this.ataque1 = 20;
            this.ataque2 = 35;
            this.defensa = 14;
        } else if (nombre == 'zamasu'){
            this.vida = 100;
            this.ataque1 = 35;   
            this.ataque2 = 40;   
            this.defensa = 10;
        }
    this.nombre = nombre;
    }
}
let jugador1;
let jugador2;
// ------------------------------------------------CAMBIAR PANTALLA ---------------------------------- 

let personajeSeleccionado1 = document.querySelector('.personajeSeleccionado1')
let personajeSeleccionado2 = document.querySelector('.personajeSeleccionado2')

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
        vida1.innerHTML = jugador1.vida
        vida2.innerHTML = jugador2.vida
         //console.log(jugador1.vida)
    } else if (fondo2.style.display == 'flex'){
        // mostrar jugador GANADOR
         cambio(fondo2,fondo3);
    }
}
// ------------------------- ASIGNAR PERSONAJE -------------------------
const asignarPersonaje = (personaje) => new Personaje(personaje);

let contenedorpj1 = document.getElementById('personajeSeleccionado1')
let contenedorpj2 = document.getElementById('personajeSeleccionado2')
let bannerSeleccionado1 = document.getElementById('bannerSeleccionado1')
let bannerSeleccionado2 = document.getElementById('bannerSeleccionado2')

// ----------------------- SELECCION PERSONAJE ----------------------------------

const seleccionPersonajes = (personaje) => {
    switch(personaje) {
        case 'celula':
            if (!jugador1) {
                jugador1 = asignarPersonaje('celula');
                contenedorpj1.style.backgroundImage = 'url("./imagenes/personajes/celulaPelea.png")'
                bannerSeleccionado1.style.backgroundImage = 'url("./imagenes/personajes/caraCelula.png")'
                // console.log(jugador1)
            } else if (!jugador2) {
                jugador2 = asignarPersonaje('celula')
                contenedorpj2 .style.backgroundImage = 'url("./imagenes/personajes/celulaPelea.png")'
                bannerSeleccionado2.style.backgroundImage = 'url("./imagenes/personajes/caraCelula.png")'
                //console.log(jugador2)
                setTimeout(cambiarPantalla, 2000);
            }
            break;
        case 'gohan':
            if (!jugador1) {
                jugador1 = asignarPersonaje('gohan');
                contenedorpj1.style.backgroundImage = 'url("./imagenes/personajes/gohanPelea.png")'
                bannerSeleccionado1.style.backgroundImage = 'url("./imagenes/personajes/caraGohan.png")'
            } else if (!jugador2) {
                jugador2 = asignarPersonaje('gohan')
                contenedorpj2.style.backgroundImage = 'url("./imagenes/personajes/gohanPelea.png")'
                bannerSeleccionado2.style.backgroundImage = 'url("./imagenes/personajes/caraGohan.png")'
                console.log(jugador2)
                setTimeout(cambiarPantalla, 2000);
            }
            break;
        case 'zamasu':
            if (!jugador1) {
                jugador1 = asignarPersonaje('zamasu');
                contenedorpj1.style.backgroundImage = 'url("./imagenes/personajes/zamasuPelea.png")'
                bannerSeleccionado1.style.backgroundImage = 'url("./imagenes/personajes/caraZamasu.png")'
            } else if (!jugador2) {
                jugador2 = asignarPersonaje('zamasu')
                contenedorpj2.style.backgroundImage = 'url("./imagenes/personajes/zamasuPelea.png")'
                bannerSeleccionado2.style.backgroundImage = 'url("./imagenes/personajes/caraZamasu.png")'
                setTimeout(cambiarPantalla, 2000);
            }
        break;
        case 'vegito':
            if (!jugador1) {
                jugador1 = asignarPersonaje('vegito');
                contenedorpj1.style.backgroundImage = 'url("./imagenes/personajes/vegitoPelea.png")'
                bannerSeleccionado1.style.backgroundImage = 'url("./imagenes/personajes/caraVegito.png")'
            } else if (!jugador2) {
                jugador2 = asignarPersonaje('vegito')
                contenedorpj2.style.backgroundImage = 'url("./imagenes/personajes/vegitoPelea.png")'
                bannerSeleccionado2.style.backgroundImage = 'url("./imagenes/personajes/caraVegito.png")'
                setTimeout(cambiarPantalla, 2000);
            }
            break;
    }
}

// --------------------------------------------- COMBATE -----------------------------------
let vida1 = document.getElementById('vida-1');
let vida2 = document.getElementById('vida-2');
let pjganador = document.querySelector(".personaje-ganador")

const ganador = () =>{
    if (jugador1.vida <= 0){
        pjganador.style.backgroundImage = 'url("./imagenes/seleccionpj/player2.png")'
        pjganador.style.backgroundSize = 'contain'
        pjganador.style.backgroundRepeat = 'no-repeat'
    } else {
        pjganador.style.backgroundImage = 'url("./imagenes/seleccionpj/player1.png")'
        pjganador.style.backgroundSize = 'cover'
    }
}
const atacar = (atacante, defensor, ataque) => {
    let vidaRestante;
    if (ataque == 'ataque1'){
        vidaRestante = defensor.vida - atacante.ataque1 + defensor.defensa;
        defensor.vida = vidaRestante
        //console.log(defensor.vida)
    } else {
        vidaRestante = defensor.vida - atacante.ataque2 + defensor.defensa;
        defensor.vida = vidaRestante
    }
    if (defensor.vida <= 0){
        ganador(atacante);
        cambiarPantalla();
    }
}
const combate = (jugador) => {    
    if (jugador == 'jugador1'){
        atacar(jugador1,jugador2);
    } else {
        atacar(jugador2,jugador1);
    }
    vida1.innerHTML = jugador1.vida
    vida2.innerHTML = jugador2.vida
}
// FUNCION PARA PARAR EL AUDIO HACIENDO CLICK EN CUALQUIER SITIO DEL VIDEO

const pausarAudio = () => {
    audio.pause();
}