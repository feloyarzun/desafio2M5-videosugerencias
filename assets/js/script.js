//Integrantes: Araceli - Felipe Oyarzun - Teresa Olivares
class Multimedia {
  #url; // para ponerlo privado
  constructor(url) {
      this.#url = url;
  }
  get url() {
      return this.#url;
  }
  setInicio() {
      return "Este método es para realizar un cambio en la URL del video";
  }
}
class Reproductor extends Multimedia {
  #id;
  constructor(url, id) {
      super(url);
      this.#id = id;
  }
  playMultimedia() {
      reproductor.reproducir(this.url, this.#id);
  }
  setInicio(tiempo) {
      let nuevaUrl = `${this.url}&amp;start=${tiempo}`;
      reproductor.reproducir(nuevaUrl, this.#id);
  }
}
const reproductor = (() => {
  let verVideo = (url, id) => {
      const iframe = document.getElementById(id);
      iframe.setAttribute("src", url);
  };
  return {
      reproducir: (url, id) => {
          verVideo(url, id);
      }
  };
})();

const musica = new Reproductor("https://www.youtube.com/embed/2Rd0aSO59bE?si=e57_Tu_jKgsXclkD", "musica");
const pelicula = new Reproductor("https://www.youtube.com/embed/b59rxDB_JRg?si=mec1Xd2j2n6voF6b", "peliculas");
const serie = new Reproductor("https://www.youtube.com/embed/KMx4iFcozK0?si=nGL_Ov8mOZHe9M34", "series");
musica.playMultimedia();
pelicula.playMultimedia();
serie.playMultimedia();
pelicula.setInicio(30);
serie.setInicio(20);
musica.setInicio(120);