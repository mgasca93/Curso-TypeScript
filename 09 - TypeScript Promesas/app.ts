(() => {

    console.log("Inicio");


    const prom1 = new Promise( (resolve, reject) =>{

        setTimeout(() =>{

            //Esto captura el then
            resolve("Se termino el timeout");
            //Esto captura el error
            reject('Se termino el timeout');
        }, 1000);
    } );

    prom1
        .then( mensaje => console.log(mensaje) )
        .catch( err => console.warn( err ) );

    console.log("Fin");

})();