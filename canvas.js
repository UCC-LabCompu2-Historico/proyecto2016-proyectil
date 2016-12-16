/**
 * Created by nicolaskobelt on 12/12/16.
 */


//funcion para tomar valores ingresados

function miDibujo() {

    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");

    ctx.beginPath();
    ctx.moveTo(50, 300);
    ctx.quadraticCurveTo(100, 100, 50, 50);
    ctx.stroke();
    ctx.strokeStyle="#f5f5f5";

    }