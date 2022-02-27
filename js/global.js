// -----------------------  PERSONAJE y JUGADOR ------------------------

class Personaje {
    constructor(nombre, ataque1, defensa, imagen)
        this.nombre = nombre
        this.vida = 100
        this.ataque1 = ataque1
        this.defensa = defensa
        this.imagenpj = img
}

class Jugador {
    constructor(personaje) {
        this.personaje = personaje;
    }
    Atacar(defensor, atacante) {
        let contadorVida;
        contadorVida = defensor.personaje.vida - atacante.personaje.ataque1 + defensor.personaje.defensa;
        return contadorVida = defensor.personaje.vida;
    }
    
}
// ---------------- CREACION PERSONAJES----------------- 

let VegitoBlue = new Personaje ("Vegito", 18, 10, `./imagenes/seleccionpj/VegitoBlue.png`);
let Celula = new Personaje     ("Celula", 13, 12, `./imagenes/seleccionpj/cell.png`);
let Gohan = new Personaje ("Gohan", 15, 13, `./imagenes/seleccionpj/gohan.png`);
let ZamasuRose = new Personaje ("ZamasuRose", 20, 6, `./imagenes/seleccionpj/ZamasuRose.png`);

console.log(VegitoBlue);
console.log(Celula);
console.log(Gohan);
console.log(ZamasuRose);

// ------------------- JUGADORES -----------------

let jugador1 = new Jugador();
let jugador2 = new Jugador();

const seleccionpersonaje = (personaje) => {

    switch (personaje) {

        case 'Vegito':
            if (jugador1) {
                jugador1 = VegitoBlue;
            } else {
                jugador2 = VegitoBlue;
                Batalla();
            } 
        case 'Celula':
            if (jugador1) {
                jugador1 = Celula;
            } else {
                jugador2 = Celula;
                Batalla();
            } 
        case 'Gohan':
            if (jugador1) {
                jugador1 = Gohan;
            } else {
                jugador2 = Gohan;
                Batalla();
        case 'ZamasuRose':
            if (jugador1) {
                jugador1 = ZamasuRose;
            } else {
                jugador2 = ZamasuRose;
                Batalla();
            }    
    }
}

