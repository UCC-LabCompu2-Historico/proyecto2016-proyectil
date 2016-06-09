/**
 * Created by AlumnoXP on 02/06/16.
 */


//parte de selector.html //

function sigPagina (nombre) {

    if (nombre == "Dtotal") {
        window.location.replace('formulario.html');
    }

    else if (nombre == "Ang"){
        window.location.replace('formulario.html');
    }

    else if (nombre == "Vinicial"){
        window.location.replace('formulario.html');
    }

    else if (nombre == "Alt"){
        window.location.replace('formulario.html');
    }
}

//parte de formulario.html //


var formularioPrincipal = document.formulario;
    var primerElemento = document.formulario.input1;
    var segundoElemento = document.formulario.input2;
    var tercerElemento = document.formulario.input3;
    var cuartoElemento = document.formulario.input4;



// resultado //

function resultadoVelocidad() {
    var el = document.getElementById("formulario").elements;

    var url = 'resultado.html#' + el["masa"].value + "#" + el["unidadesMasa"].value + "#" + el["altura"].value;
    window.location.replace('resultado.html');
}


