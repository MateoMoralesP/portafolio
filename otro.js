document.addEventListener("DOMContentLoaded", function() {
    // Array de proyectos con sus títulos e imágenes
    var proyectos = [
      { titulo: "empleo", imagen: "img/empleo.png" },
      { titulo: "sistema de venta", imagen: "img/invca.jpg" },
      { titulo: "ventanilla unica", imagen: "img/ventanilla.png" },
      { titulo: "empleo", imagen: "img/empleo.png" },
      { titulo: "sistema de venta", imagen: "img/invca.jpg" },
      { titulo: "ventanilla unica", imagen: "img/ventanilla.png" }
    ];
  
    // Obtén el contenedor de la galería
    var galeriaContainer = document.getElementById("proyectosGaleria");
  
    // Recorre el array de proyectos y crea tarjetas para cada uno
    proyectos.forEach(function(proyecto) {
      var cardHtml = `
        <div class="col-md-4 mb-4">
          <div class="card">
            <img src="${proyecto.imagen}" class="card-img-top" alt="${proyecto.titulo}">
            <div class="card-body">
              <h5 class="card-title">${proyecto.titulo}</h5>
            </div>
          </div>
        </div>
      `;
  
      galeriaContainer.innerHTML += cardHtml;
    });
  });
  