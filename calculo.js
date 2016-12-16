/**
 * Created by nicolaskobelt on 30/11/16.
 */

function calc() {
    var velocidad = document.getElementById('velocidad').value;
    var angulo = document.getElementById('angulo').value;
    var tiempo = document.getElementById('tiempo').value;


    var alt = ((velocidad**2)*(Math.sin(angulo*Math.PI/180)))/(2*9.8); //calculo de la altura maxima del objeto
    var altMax = alt.toFixed(3); //RESULTADO FINAL truncado a 3 cifras
    document.getElementById("altMax").value = altMax;


    var alcan = (velocidad**2)/9.8; //calculo de alcance maximo en x
    var alcanMax = alcan.toFixed(3); // RESULTADO FINAL truncado a 3 cifras
    document.getElementById("alcanMax").value = alcanMax;
    



    miDibujo(alcanMax,altMax, velocidad,angulo,tiempo);

}

