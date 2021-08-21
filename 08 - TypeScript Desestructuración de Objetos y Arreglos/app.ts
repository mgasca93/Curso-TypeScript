(() =>{
    

    const avenger = {
        nombre: 'Steve',
        clave: 'Capitan America',
        poder: 'Super Fuerza'
    }

    //Desestructuracion de objetos y arreglos
    const avengers:string[] = ['Thor', 'Ironman', 'Spiderman', 'Strange'];
    const { nombre, clave } = avenger;
    const [Thor, Ironman, Spiderman, Strange] = avengers;

    //Accedo a las variables declaradas en la desestructuracion
    console.log(Thor); 
    console.log(Ironman); 
    console.log(Spiderman); 
    console.log(Strange); 

    console.log(nombre);
    console.log(clave);

    //Desestructuracion de objeto desde una constante
    const extraer = (avenger:any) =>{
         
        const {nombre, clave, poder} = avenger;

        console.log(nombre);
        console.log(clave);
        console.log(poder);

    }

    //Desestructuracion objeto desde una funcion flecha
    const extraer2 = ( {nombre, poder }:any ) => {
        
        console.log(nombre);
        console.log(poder);

    }

    //Desestructuracion de arreglo desde una funcion flecha
    const extraerArr = ([thor, ironman, spiderman]:string[]) =>{

        console.log(thor);
        console.log(ironman);
        console.log(spiderman);

    }

    extraer(avenger);
    extraer2(avenger);
    extraerArr(avengers);


})();