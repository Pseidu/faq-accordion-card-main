/*
    document.addEventListener('DOMContentLoaded', function () {

    // Bloqueamos los desplegables de Talla y Ubicación, y todos los botones 
    document.getElementById("desplegableTalla").disabled=true;
    //document.getElementById("desplegableUbicacion").disabled=true;
    document.getElementById("botonAgregarACesta").disabled=true;
    
    // Cargamos los valores del desplegable Prendas
    cargarDesplegablePrendas();
    
});

    document.getElementById("desplegablePrenda").addEventListener('change', function () {})

<script>
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}
</script>


*/

function expand(element) {
    element.style.fontWeight = 'bold';
    element.nextElementSibling.style.height = 'auto';
}

//