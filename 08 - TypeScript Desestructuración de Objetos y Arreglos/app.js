"use strict";
(function () {
    var avenger = {
        nombre: 'Steve',
        clave: 'Capitan America',
        poder: 'Super Fuerza'
    };
    //Desestructuracion de objetos y arreglos
    var avengers = ['Thor', 'Ironman', 'Spiderman', 'Strange'];
    var nombre = avenger.nombre, clave = avenger.clave;
    var Thor = avengers[0], Ironman = avengers[1], Spiderman = avengers[2], Strange = avengers[3];
    //Accedo a las variables declaradas en la desestructuracion
    console.log(Thor);
    console.log(Ironman);
    console.log(Spiderman);
    console.log(Strange);
    console.log(nombre);
    console.log(clave);
    //Desestructuracion de objeto desde una constante
    var extraer = function (avenger) {
        var nombre = avenger.nombre, clave = avenger.clave, poder = avenger.poder;
        console.log(nombre);
        console.log(clave);
        console.log(poder);
    };
    //Desestructuracion objeto desde una funcion flecha
    var extraer2 = function (_a) {
        var nombre = _a.nombre, poder = _a.poder;
        console.log(nombre);
        console.log(poder);
    };
    //Desestructuracion de arreglo desde una funcion flecha
    var extraerArr = function (_a) {
        var thor = _a[0], ironman = _a[1], spiderman = _a[2];
        console.log(thor);
        console.log(ironman);
        console.log(spiderman);
    };
    extraer(avenger);
    extraer2(avenger);
    extraerArr(avengers);
})();
