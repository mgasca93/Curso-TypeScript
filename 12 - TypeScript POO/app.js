"use strict";
(() => {
    class Avenger {
        // nombre: string;
        // equipo: string;
        // nombreReal: string;
        // puedePelear: boolean;
        // peleasGanadas: number;
        // habilidad ?: string;        
        constructor(nombre, equipo, nombreReal, puedePelear = true, peleasGanadas = 0) {
            this.nombre = nombre;
            this.equipo = equipo;
            this.nombreReal = nombreReal;
            this.puedePelear = puedePelear;
            this.peleasGanadas = peleasGanadas;
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
