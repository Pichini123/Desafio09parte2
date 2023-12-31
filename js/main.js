function Libro(titulo, autor, precio, isbn, paginas, idioma, foto, sinopsis) {
  this.titulo = titulo;
  this.autor = autor;
  this.precio = precio;
  this.isbn = isbn;
  this.paginas = paginas;
  this.idioma = idioma;
  this.foto = foto;
  this.sinopsis = sinopsis;
/* No logro entender porque no me toma el getHtmlArticle lo entrego asi estuve tratando todo el finde,mire otros trabajos y se los toma */
  getHtmlArticle(){
    return `
    <article>
      <h2>${this.titulo}</h2>
      <h3><span class="de">de</span> ${this.autor}</h3>
      <div class="informacion">
      <a href="./images/ ${this.foto} " title="Presioná para ver la imagen en tamaño grande" target="_blank">
      <img src="./images/ ${this.foto} " alt="Portada de ${this.titulo}">
      </a>
      <p>
      <span>Precio:</span>
      <span>${this.precio}</span>
      </p>
      <p>
      <span title="International Standard Book Number">isbn:</span>
      <span>${this.isbn}</span>
      </p>
      <p>
      <span>Páginas:</span>
      <span>${this.paginas}</span>
      </p>
      <p>
      <span>Idioma:</span>
      <span>${this.idioma}</span>
      </p>
      </div>
      <div class="sinopsis">
      <p>${this.sinopsis}</p>
      </div>
      <div class="gradiente-blanco"></div>
    </article>`;
  }

}


let libro1 = new Libro(
  'Carrie',
  'Stephen King',
  '$2.399',
  '9789871138999',
  '256',
  'Español',
  'foto.jpg',
  'El legendario debut de Stephen King, sobre una marginada adolescente y la venganza que ejerce sobre sus compañeros de clase.'
)

let libro2 = new Libro(
  'Despierta',
  'Lorena Pronsky',
  '$3.049,00',
  '9789501516227',
  '336',
  'Español',
  '677866.jpg',
  'La mayoría de las decisiones que tomamos en nuestra vida las hacemos estando dormidos. Casi arrastrados por un estado de inercia. Cuando reaccionamos; el paso ya está dado y el resto del tiempo nos quedamos ahí -atrapados- intentando hacer algo con eso que ni advertimos haber decidido. Hay cosas que no se deshacen. Querer intentarlo es verle la cara a la frustración. Por el contrario; se hace necesario un viaje a nuestro mundo interior. Si registramos lo que hacemos y sentimos; ganamos libertad y la posibilidad urgente de conocer nuestros deseos más profundos. ¿Quién soy? ¿Qué quiero? ¿Cómo lo quiero? Ser conscientes de lo que sentimos: decirlo; palparlo y nombrarlo son formas en las que logramos adueñarnos de nuestra vida. Cuanto antes despertemos a nuestro mundo interior; más sabias y honestas serán nuestras decisiones. Despierta es el paso hacia una existencia verdadera. Una invitación a conocernos y animarnos a pisar firme y fuerte. Siempre hacia donde nos guíen nuestros latidos. Sí. Los nuestros. Lorena Pronsky.'
)

let libro3 = new Libro(
  'Confianza ciega',
  'John Katzenbach',
  '$4.399,00',
  '9789877801668',
  '592',
  'Español',
  '678518.jpg',
  'Cuando Maeve desaparece sin dejar rastro, su hija Sloane no se sorprende: si su madre tenía que desaparecer, solo podía ser en extrañas circunstancias. Sin embargo, esta vez es distinto: al cabo de unos días de la desaparición de su progenitora, Sloane recibe un paquete que esta misma le ha mandado, con varios miles de dólares, la escritura de su casa y un arma. También hay una nota con las siguientes palabras: "Vendelo todo. Quedate la pistola. Practica. Huye. Ahora". A solo dos semanas de graduarse como arquitecta y en medio de esta encrucijada personal, Sloane recibe la oferta de trabajo de un misterioso millonario que quiere construir seis memoriales para seis personas que murieron, de nuevo, en extrañas circunstancias. A medida que Sloane investiga esas muertes, el consejo de su madre se hace cada vez más presente. ¿En quién puede confiar ahora Sloane? ¿Tendrá tiempo de seguir las indicaciones de su madre cuando llegue al final del laberinto que ha ido creando su siniestro empleador?.'

)
let libro4 = new Libro(
  'Cocinemos juntos',
  'Maru Botana',
  '$3.890,00',
  '9789876378697',
  '220',
  'Español',
  '677978.jpg',
  'Maru cocina junto a sus hijos y amigos sus mejores recetas del día a día. Este manual con recetario ayudará a los jóvenes, a los recién mudados y a todo aquel que se inicia en la cocina a preparar los platos más deliciosos: bebidas, entradas, principales, panes, postres y tortas. Todo con los eximios sabores y la simplicidad de Maru Botana.'
)
let elemLibrosContainer = document.getElementById('libros');

let htmlNuevosLibros = libro1.getHtmlArticle() + libro2.getHtmlArticle() + libro3.getHtmlArticle() + libro4.getHtmlArticle();

elemLibrosContainer.innerHTML += htmlNuevosLibros;

