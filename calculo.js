/**
 * Created by nicolaskobelt on 30/11/16.
 */

function calc() {
    var velocidad = document.getElementById('velocidad').value;
    var angulo = document.getElementById('angulo').value;
    var tiempo = document.getElementById('tiempo').value;

    var anguloRad = (angulo/180)*Math.PI;

    var altmax = ((velocidad**2)*(Math.sin(anguloRad)))/(2*9.8);


    var alcanMax = (velocidad**2)/9.8;
    var alcanMaxF = alcanMax.toFixed(3);


}

