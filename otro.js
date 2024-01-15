document.addEventListener("DOMContentLoaded", function() {
    // Array de proyectos con sus títulos e imágenes
    var proyectos = [
      { titulo: "Agenda", imagen: "img/agenda.png" },
      { titulo: "Calculadora (react)", imagen: "img/calculadora.png" },
      { titulo: "quiz Pacman", imagen: "img/pacman.png" },
      { titulo: "lista de Tareas", imagen: "img/tareas.png" },
      { titulo: "tres en raya", imagen: "img/tresenraya.png" },
      { titulo: "subneteo", imagen: "img/subneteo.png" }

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
  