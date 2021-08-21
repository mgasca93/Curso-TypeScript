"use strict";
(function () {
    var miFunction = function (a) {
        return a.toUpperCase();
    };
    var sumarN = function (a, b) {
        return a + b;
    };
    var miFunctionFlecha = function (a) { return a.toUpperCase(); };
    var sumarF = function (a, b) { return a + b; };
    var hulk = {
        nombre: 'Hulk',
        smash: function () {
            var _this = this;
            setTimeout(function () {
                console.log(_this.nombre + " smash!!!");
            }, 1000);
        }
    };
    hulk.smash();
})();
