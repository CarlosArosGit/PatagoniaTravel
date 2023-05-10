$(document).ready(function() {
  $('#natacion').hide();
  $('#ferry').hide();
});
$('#actividades').on('change', function () {
  var selectValor = $(this).val();
  if (selectValor == '1') {
    $('#trekking').show();
    $('#natacion').hide();
    $('#ferry').hide();
  } else if (selectValor == '2') {
    $('#trekking').hide();
    $('#natacion').show();
    $('#ferry').hide();
  } else if (selectValor == '3') {
    $('#trekking').hide();
    $('#natacion').hide();
    $('#ferry').show();
  }
});

//TREKKING
var imgTrekking = document.getElementById("imgTrekking");
var detalleTrekking = document.getElementById("detalleImg1");
imgTrekking.addEventListener("mouseover", mostrarDetalle1);
imgTrekking.addEventListener("mouseout", ocultarDetalle1);
function mostrarDetalle1() {
  imgTrekking.classList.add("imgCardDetalle");
  detalleTrekking.style.display = 'block';
}
function ocultarDetalle1() {
  imgTrekking.classList.remove("imgCardDetalle");
  detalleTrekking.style.display = 'none';
}

//NATACION
var imgNatacion = document.getElementById("imgNatacion");
var detalleNatacion = document.getElementById("detalleImg2");
imgNatacion.addEventListener("mouseover", mostrarDetalle2);
imgNatacion.addEventListener("mouseout", ocultarDetalle2);
function mostrarDetalle2() {
  imgNatacion.classList.add("imgCardDetalle");
  detalleNatacion.style.display = 'block';
}
function ocultarDetalle2() {
  imgNatacion.classList.remove("imgCardDetalle");
  detalleNatacion.style.display = 'none';
}

//FERRY
var imgFerry = document.getElementById("imgFerry");
var detalleFerry = document.getElementById("detalleImg3");
imgFerry.addEventListener("mouseover", mostrarDetalle3);
imgFerry.addEventListener("mouseout", ocultarDetalle3);
function mostrarDetalle3() {
  imgFerry.classList.add("imgCardDetalle");
  detalleFerry.style.display = 'block';
}
function ocultarDetalle3() {
  imgFerry.classList.remove("imgCardDetalle");
  detalleFerry.style.display = 'none';
}