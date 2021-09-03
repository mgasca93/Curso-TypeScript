(() => {

    class Avenger {

        // nombre: string;
        // equipo: string;
        // nombreReal: string;
        // puedePelear: boolean;
        // peleasGanadas: number;
        // habilidad ?: string;        

        constructor(    public nombre:string, 
                        public equipo: string, 
                        public nombreReal?: string, 
                        public puedePelear: boolean = true, 
                        public peleasGanadas: number = 0){
            // this.nombre = nombre;
            // this.equipo = equipo;
            // this.nombreReal = nombreReal;
            // this.puedePelear = puedePelear;
            // this.peleasGanadas = peleasGanadas;
        }
    }

    const antman = new Avenger('Antman', 'Capitan america');

    console.log(antman);
})();