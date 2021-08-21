"use strict";
(() => {
    const retirarDinero = (montoRetirar) => {
        let dineroActual = 1000;
        return new Promise((resolve, reject) => {
            1;
            if (montoRetirar > dineroActual) {
                reject('¡No hay suficientes fondos!');
            }
            else {
                dineroActual -= montoRetirar;
                resolve(dineroActual);
            }
        });
    };
    retirarDinero(200)
        .then(montoActual => { console.log(`Saldo actual : ${montoActual}`); })
        .catch(err => { console.warn(err); });
})();
