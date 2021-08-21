(function(){

    const miFunction = function( a:string ){
        return a.toUpperCase();
    }

    const sumarN = function( a:number, b:number){
        return a + b;
    }

    const miFunctionFlecha = ( a:string ) => a.toUpperCase();   
    const sumarF = ( a:number, b:number ) => a + b;

    const hulk = {
        nombre: 'Hulk',        
        smash(){
            setTimeout( () => {
                console.log(`${ this.nombre } smash!!!`);
            }, 1000);
        }
    }

    hulk.smash();
})();