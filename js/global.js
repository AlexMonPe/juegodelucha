// -----------------------  PERSONAJE y JUGADOR ------------------------

class Personaje {
    constructor(nombre){
        if ( nombre == 'vegito'){
            this.vida = 120;
            this.ataque = 15;
            this.defensa = 10;
            this.imagen = './imagenes/seleccionpj/VegitoBlue.png'
        } else if (nombre == 'celula') {
            this.vida = 110;
            this.ataque = 15;
            this.defensa = 10;
            this.imagen = './imagenes/seleccionpj/cell.png'
        } else if (nombre == 'gohan') {
            this.vida = 120;
            this.ataque = 15;
            this.defensa = 10;
            this.imagen = './imagenes/seleccionpj/gohan.png'
        } else if (nombre == 'zamasu'){
            this.vida = 120;
            this.ataque = 15;      
            this.defensa = 10;
            this.imagen = './imagenes/seleccionpj/ZamasuRose.png'
        }
    this.nombre = nombre;
    }
        
}

let jugador1;
let jugador2;
// ------------------------------------------------CAMBIAR PANTALLA ---------------------------------- 
const cambio = (fondo1,fondo2) => {
    fondo1.style.display = 'none';
    fondo2.style.display = 'flex';
}

const cambiarPantalla = () => {
    let fondo1 = document.querySelector(".contenedor-seleccion");
    let fondo2 = document.querySelector(".contenedor-batalla");
    let fondo3 = document.querySelector(".contenedor-ganador");

    if (fondo1.style.display == 'flex') cambio(fondo1,fondo2);
    if (fondo2.style.display == 'flex') cambio(fondo2,fondo3);
}

const asignarPersonaje = (jugador, personaje) => {
    jugador = new Personaje(personaje);
    return jugador
}
const seleccionPersonajes = (personaje) => {

    switch(personaje) {
        case 'celula':
            if (!jugador1) {
                jugador1 = asignarPersonaje(jugador1, 'celula');
            } else if (!jugador2) {
                jugador2 = asignarPersonaje(jugador2, 'celula')
                cambiarPantalla();
            }
            break;
        case 'gohan':
            if (!jugador1) {
                jugador1 = asignarPersonaje(jugador1,'gohan');
            } else if (!jugador2) {
                jugador2 = asignarPersonaje(jugador2, 'gohan')
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
console.log(jugador1);
console.log(jugador2);
}

// ----------------------- VOLVER A JUGAR --------------------
const RepetirJuego = () => {
    if (fondo3.style.display == 'flex') return cambiarPantalla(fondo3,fondo1);
}






















    // Atacar(defensor, atacante) {
    //     let contadorVida;
    //     contadorVida = defensor.personaje.vida - atacante.personaje.ataque1 + defensor.personaje.defensa;
    //     return contadorVida = defensor.personaje.vida;
    

// ------------------- JUGADORES -----------------



// const seleccionpersonaje = (personaje) => {

//     switch (personaje) {

//         case 'Vegito':
//             if (jugador1) {
//                 jugador1 = VegitoBlue;
//             } else {
//                 jugador2 = VegitoBlue;
//                 Batalla();
//             } 
//         case 'Celula':
//             if (jugador1) {
//                 jugador1 = Celula;
//             } else {
//                 jugador2 = Celula;
//                 Batalla();
//             } 
//         case 'Gohan':
//             if (jugador1) {
//                 jugador1 = Gohan;
//             } else {
//                 jugador2 = Gohan;
//                 Batalla();
//         case 'ZamasuRose':
//             if (jugador1) {
//                 jugador1 = ZamasuRose;
//             } else {
//                 jugador2 = ZamasuRose;
//                 Batalla();
//             }    
//     }
// }

