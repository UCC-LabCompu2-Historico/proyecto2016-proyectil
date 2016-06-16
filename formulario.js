//parte de selector.html //

function sigPagina (nombre) {

    if (nombre == "Dtotal") {
        window.location.replace('formularioDistancia.html');
    }

    else if (nombre == "tiempo") {
        window.location.replace('formularioTiempo.html');
    }

    else if (nombre == "Alt") {
        window.location.replace('formularioAltura.html');
    }
}



// formularioDistancia  //

function valDistacia () {
    var el=document.getElementById("formDist").elements;

    var url = 'resultadoDistancia.html#' + el["vInicial"].value + "#" + el["aSalida"].value;
    window.location.replace(url);

}

// formulario altura maxima //


function valAltura () {
    var el = document.getElementById("formAlt").elements;

    var url = 'resultadoAltura.html#' + el["vInicial"].value + "#" + el["aSalida"].value;
    window.location.replace(url);
}

//formulario tiempo //

function valtiempo () {
    var el = document.getElementById("formTiemp").elements;

    var url = 'resultadoTiempo.html#' + el ["vInicial"].value;
    window.location.replace(url);

}



// cargar resultado en resultadohtml //

function cargarResDist() {

    var myArr = window.location.hash.split('#');
    var vInicial = myArr[1];
    var aSalida = myArr[2];

    var rDistancia = (Math.pow((myArr[1]),2)*(Math.sin(myArr[2]))/9.8)
    var unidad = "m";

    document.getElementById("rDis").value = rDistancia + unidad;
}

// cargar resultado altura //

    function cargarResAlt() {

        var myArr = window.location.hash.split('#');
        var vInicial = (myArr[1]);
        var aSalida = (myArr[2]);

        var rAltura = ((Math.pow(myArr[1],2))*(Math.pow(Math.sin(myArr[2]),2)))/9.8;
        var unidad = "m";

        document.getElementById("rAlt").value = rAltura + unidad ;
    }

// cargar resultado tiempo // 


function cargarResTiemp() {

    var myArr = window.location.hash.split('#');
    var vInicial = (myArr[1]);
    var aSalida = (myArr[2]);

    var rTiempo = (myArr[1])/9.8;
    var unidad = "seg";

    document.getElementById("rTiem").value = rTiempo + unidad ;
}
    

