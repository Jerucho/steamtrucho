const juegos = [
  {
    titulo: "NBA 2K24",
    precio: "59.99 USD",
    url_tienda: "https://store.steampowered.com/app/2338770/NBA_2K24/",
    descuento: "10%",
    imagen:
      "https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2023/07/nba-2k24-3076874.jpg",
    generos: ["Deportes", "Simulación"],
  },
  {
    titulo: "F1 24",
    precio: "49.99 USD",
    url_tienda: "https://store.steampowered.com/app/2488620/F1_24/",
    descuento: "",
    imagen: "../../images/f1_24.avif",
    generos: ["Carreras", "Simulación"],
  },
  {
    titulo: "Fifa 24",
    precio: "69.99 USD",
    url_tienda:
      "https://store.steampowered.com/app/2195250/EA_SPORTS_FC_24/?l=spanish",
    descuento: "",
    imagen: "https://i.blogs.es/934844/20/450_1000.png",
    generos: ["Deportes", "Simulación"],
  },
  {
    titulo: "Red Dead Redemption 2",
    precio: "39.99 USD",
    url_tienda:
      "https://store.rockstargames.com/game/buy-red-dead-redemption-2?",
    descuento: "25%",
    imagen:
      "https://cdn1.epicgames.com/b30b6d1b4dfd4dcc93b5490be5e094e5/offer/RDR2476298253_Epic_Games_Wishlist_RDR2_860x1148_UE_V01-860x1148-78a06414cf9e1ff9232069d4924d29fd.jpg",
    generos: ["Acción", "Aventura", "Mundo Abierto"],
  },
  {
    titulo: "Cyberpunk 2077",
    precio: "29.99 USD",
    url_tienda:
      "https://store.epicgames.com/es-ES/p/cyberpunk-2077--ultimate-edition",
    descuento: "",
    imagen:
      "https://cdn1.epicgames.com/offer/77f2b98e2cef40c8a7437518bf420e47/EGS_Cyberpunk2077_CDPROJEKTRED_S2_03_1200x1600-b1847981214ac013383111fc457eb9c5",
    generos: ["Acción", "RPG", "Mundo Abierto"],
  },
  {
    titulo: "Starfield",
    precio: "79.99 USD",
    url_tienda: "https://store.steampowered.com/app/1716740/Starfield/",
    descuento: "",
    imagen: "../../images/starfield.jpg",
    generos: ["RPG", "Ciencia Ficción", "Mundo Abierto"],
  },
  {
    titulo: "Ark",
    precio: "49.99 USD",
    url_tienda: "https://store.epicgames.com/es-ES/p/ark",
    descuento: "15%",
    imagen: "../../images/ark.jpg",
    generos: ["Supervivencia", "Mundo Abierto", "Aventura"],
  },
  {
    titulo: "Counter Strike 2",
    precio: "19.99 USD",
    url_tienda: "https://store.steampowered.com/app/730/CounterStrike_2/",
    descuento: "50%",
    imagen: "../../images/cs2.jpg",
    generos: ["Acción", "FPS", "Multijugador"],
  },
  {
    titulo: "Doom",
    precio: "34.99 USD",
    url_tienda: "https://store.steampowered.com/app/2280/DOOM_1993/",
    descuento: "",
    imagen: "../../images/doom.jpg",
    generos: ["Acción", "FPS", "Terror"],
  },
  {
    titulo: "Forza Horizon 4",
    precio: "59.99 USD",
    url_tienda: "https://store.steampowered.com/app/1293830/Forza_Horizon_4/",
    descuento: "",
    imagen: "../../images/forza.jpg",
    generos: ["Carreras", "Mundo Abierto", "Simulación"],
  },
  {
    titulo: "Genshin Impact",
    precio: "Free to Play",
    url_tienda: "https://genshin.hoyoverse.com/es/",
    descuento: "",
    imagen: "../../images/genshin_impact.jpg",
    generos: ["RPG", "Aventura", "Mundo Abierto"],
  },
  {
    titulo: "God of War Ragnarok",
    precio: "69.99 USD",
    url_tienda: "https://www.playstation.com/es-pe/games/god-of-war-ragnarok/",
    descuento: "",
    imagen: "../../images/gof_of_war.jpg",
    generos: ["Acción", "Aventura", "Mitología"],
  },
];

// Recuperar el contenedor del HTML
const contenedor = document.getElementById("juegos");
const botonFiltrar = document.getElementById("filtrar");
const botonLimpiar = document.getElementById("borrar-filtro");
// Creamos el metodo/funcion para mostrar los juegos
const mostrarJuegos = (juegosFiltrados) => {
  // Recorremos el array de juegos
  juegosFiltrados.forEach((juego) => {
    const card = document.createElement("div");
    card.innerHTML = `<div class="tarjeta-juego">
    <a class="card-a" href=${juego.url_tienda} target="_blank">
            <img
              src=${juego.imagen}
              alt="Imagen del juego"
            />
            <div class="juego-descripcion">
                
              <span class="juego-titulo">${juego.titulo}</span>
              <div class="precio">
                ${
                  juego.descuento
                    ? '<div class="descuento-tarjeta">' +
                      juego.descuento +
                      "</div>"
                    : ""
                }
                <span>${juego.precio}</span>
              </div>
            </div>
          </a>
          </div>
    `;
    contenedor.appendChild(card);
  });
};

const filtrarJuegos = () => {
  // Seleccionar todos los checkboxes
  const checkboxes = document.querySelectorAll('input[type="checkbox"]');

  // Filtrar los juegos que contengan los generos seleccionados
  const generosSeleccionados = Array.from(checkboxes)
    .filter((checkbox) => checkbox.checked)
    .map((checkbox) => checkbox.nextSibling.textContent.trim());

  // Filtrar los juegos que contengan todos los generos seleccionados
  const juegosFiltrados = juegos.filter((juego) =>
    generosSeleccionados.every((genero) => juego.generos.includes(genero))
  );

  // mostrarJuegos(juegosFiltrados);
  return juegosFiltrados;
};

botonFiltrar.addEventListener("click", () => {
  contenedor.innerHTML = "";
  const juegosFiltrados = filtrarJuegos();

  if (juegosFiltrados.length === 0) {
    const mensaje = document.createElement("div");
    mensaje.innerHTML = `<div class="mensaje">
      <span>No se encontraron juegos con los generos seleccionados</span>
    </div>`;
    contenedor.appendChild(mensaje);
  }
  mostrarJuegos(juegosFiltrados);
});

botonLimpiar.addEventListener("click", () => {
  contenedor.innerHTML = "";
  mostrarJuegos(juegos);
  const checkboxes = document.querySelectorAll('input[type="checkbox"]');
  checkboxes.forEach((checkbox) => (checkbox.checked = false));
});

mostrarJuegos(juegos);
