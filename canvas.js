/**
 * Created by nicolaskobelt on 12/12/16.
 */


//funcion para tomar valores ingresados

function miDibujo() {

    var elemento = document.getElementById("canvas");
    canvas = elemento.getContext("2d");

    canvas.beginPath();
    canvas.moveTo(50, 300);
    canvas.quadraticCurveTo(100, 100, 50, 50);
    canvas.stroke();
    canvas.strokeStyle="#f5f5f5";

    }