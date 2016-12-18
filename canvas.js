/**
 * Created by nicolaskobelt on 12/12/16.
 */


//funcion para tomar valores ingresados

var t=0;


function miDibujo(alcanMax, altMax, velocidad, angulo, tiempo) {


    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");
    var vX = velocidad*Math.cos(angulo*Math.PI/180);
    var vY = velocidad*Math.sin(angulo*Math.PI/180);

    canvas.width = canvas.width;
    ctx.beginPath();
    ctx.fillStyle = "#f5f5f5";
    ctx.arc(vX*t,300-((vY*t)-(9.8*(t**2)/2)),20,0,2*Math.PI);
    ctx.closePath();
    ctx.fill();

    tmax = alcanMax/vX;
    t = t + tmax/400;

    var alcance = ((vX*t)*550)/alcanMax;

    if (t < tmax) {
        setTimeout(function () {
            miDibujo(alcanMax, altMax, velocidad,angulo,tiempo);
        }, 1000 / 25);

    }else {
        t=0;
    }
}