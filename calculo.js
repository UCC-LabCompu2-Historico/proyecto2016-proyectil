/**
 * Created by nicolaskobelt on 30/11/16.
 */

function calc() {
    var velocidad = document.getElementById('velocidad').value;
    var angulo = document.getElementById('angulo').value;
    var tiempo = document.getElementById('tiempo').value;

    var anguloRad = (angulo/180)*Math.PI; //Pase el angulo a radianes

    var altmax = ((velocidad**2)*(Math.sin(anguloRad)))/(2*9.8); //calculo de la altura maxima del objeto
    var altmaxS = altmax.toFixed(3); //RESULTADO FINAL truncado a 3 cifras

    var alcanMax = (velocidad**2)/9.8; //calculo de alcance maximo en x
    var alcanMaxF = alcanMax.toFixed(3); // RESULTADO FINAL truncado a 3 cifras

    var eqTrayect = (Math.tan(anguloRad)*)
}

