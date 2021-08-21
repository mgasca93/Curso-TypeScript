(function(){

    let mensaje: string = 'Hola';
    let numero: number = 1234;
    let booleano: boolean = true; //False
    let hoy: Date = new Date;



    let cualquiercosa: string | number | boolean | Date;
    cualquiercosa = mensaje;
    cualquiercosa = numero;
    cualquiercosa = booleano;
    cualquiercosa = hoy;


    let spiderman = {
        nombre: 'Peter',
        edad: 30
    };

    spiderman = {
        nombre : 'Juan',
        edad: 40
    };
})();