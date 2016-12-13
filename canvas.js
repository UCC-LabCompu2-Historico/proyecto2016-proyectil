/**
 * Created by nicolaskobelt on 12/12/16.
 */


//funcion para tomar valores ingresados
function miDibujo() {

    var myCanvas = document.getElementById("canvas");
    var ctx = myCanvas.getContext("2d");
    var X = alcanMax;
    var Y = altMax;

    }
//intento de animacion 
    function mAnimar (){

        myCanvas.width= myCanvas.width;
        ctx.beginPath();
        ctx.arc(X,Y,0,2*Math.PI);
        ctx.moveTo(X,0);
        ctx.lineTo(X,Y);
        ctx.fillStyle = 'black';
        ctx.fill();
        ctx.stroke();
        ctx.closePath();
    }