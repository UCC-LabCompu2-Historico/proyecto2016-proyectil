//parte de selector.html //

function sigPagina (nombre) {

    if (nombre == "Dtotal") {
        window.location.replace('formularioDistancia.html');
    }

    else if (nombre == "Ang") {
        window.location.replace('formulario.html');
    }

    else if (nombre == "Vinicial") {
        window.location.replace('formulario.html');
    }

    else if (nombre == "Alt") {
        window.location.replace('formulario.html');
    }
}



// formularioDistancia  //

function valDistacia () {
    var el=document.getElementById("formDist").elements;

    var url = 'resultadoDistancia.html#' + "#" + el["vInicial"].value + "#" + el["aSalida"].value;
    window.location.replace(url);

}

// formulario altura maxima //





// cargar resultado en resultadohtml //

function cargarResDist(){

    var myArr = window.location.hash.split('#');
    var vInicial=(myArr[2]);
    var aSalida=(myArr[3]);

    rDistancia = (((document.getElementById("vInicial").value ^ 2) * (Math.sin(document.getElementById("aSalida")))) / 9.8);
    unidad = "m" ;
    
    document.getElementById('rD').value = rDistancia + unidad ;
    

