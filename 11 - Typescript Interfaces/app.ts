(() => {

    //Creamos la interfaz
    interface Xmen {

        nombre: string;
        edad: number;
        habilidad: string;
        poder: number;

    }

    //Creamos las acciones del superheroe
    const enviarMision = (xmen: Xmen) => {
        console.log(`${xmen.nombre} es enviado a la mision`);
    }

    const realizarAtaque = (xmen: Xmen) => {

        let puntosVida = 100;
        puntosVida -= xmen.poder;

        console.log(`${xmen.nombre} realizo un ataque con su hablidad ${xmen.habilidad} infligiendo un daño de ${xmen.poder}`);
        console.log(`Total de punto s de vida restantes ${puntosVida}`);
    }

    const regresarAlCuartel = (xmen: Xmen) => {
        console.log(`${xmen.nombre}  esta regresando al cuartel`);
    }

    //Creamos al superheroe
    const wolverine = {
        nombre: 'Logan',
        edad: 60,
        habilidad: 'Super Clawn',
        poder: 45
    }

    //Ejecutamos las acciones del superheroe
    enviarMision(wolverine);
    realizarAtaque(wolverine);
    regresarAlCuartel(wolverine);
})();