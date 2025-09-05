const movetonewpage = () => {
    window.location.href="contenido/hojas_imagenes/gato_1.html";
}
const movetonewpage2 = () => {
    window.location.href="contenido/hojas_imagenes/gato_2.html";
}
const movetonewpage3 = () => {
    window.location.href="contenido/hojas_imagenes/gato_3.html";
}
const movetonewpage4 = () => {
    window.location.href="contenido/hojas_imagenes/gato_4.html";
}
const movetonewpage5 = () => {
    window.location.href="contenido/hojas_imagenes/gato_5.html";
}

const volver_a_listado = () => {
    window.location.href="../../ListadoAdopciones.html";
}

const volver_al_inicio = () => {
    window.location.href="../../view.html";
}


var BotonVolverAtras = document.getElementById("volver-listado-btn");
var BotonVolverInicio = document.getElementById("volver-inicio-btn");
BotonVolverAtras.addEventListener("click",volver_a_listado);
BotonVolverInicio.addEventListener("click",volver_al_inicio);