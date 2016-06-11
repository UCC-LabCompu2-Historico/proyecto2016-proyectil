

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
        window.location.replace("resultadoDistancia");
        
    }




// resultado //

function resultadoVelocidad() {
    var el = document.getElementById("formulario").elements;

    var url = 'resultado.html#' + el["masa"].value + "#" + el["unidadesMasa"].value + "#" + el["altura"].value;
    window.location.replace('resultado.html');
}
