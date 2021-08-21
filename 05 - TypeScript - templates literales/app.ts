(function(){

    function getEdad(){
        return 20 + 8 + 5;
    }
    const nombre:string = 'Mario';
    const apellido:string = 'Gasca';
    const edad:number = 28;


    const salida:string = `${nombre} ${apellido} (Edad: ${getEdad()})`;

    console.log(salida);
})();