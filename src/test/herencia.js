class animal {
  constructor(especie) {
    this.especie = especie;
  }
  sonido() {
    switch (this.especie) {
      case "perro":
        return "guau";
      case "gato":
        return "miau";
      case "pajaro":
        return "piu piu";
      case "cerdo" || "chancho" || "cochino":
        return "oing";
      default:
        return "algo";
    }
  }

  habla() {
    return `Yo digo ${this.sonido()}`;
  }
}

let unPerro = new animal("perro");
console.log(unPerro.habla());
let unGato = new animal("gato");
console.log(unGato.habla());

//hasta acá no se cumple principio solid. Queda abierto a la edicion.

class animal2 {
  constructor() {
    this.especie = "Cual es mi especie?";
}
  habla() {
    return `Yo digo algo según mi especie`;
  }
}

class perro extends animal2 {
  constructor() {
    super();
    this.especie = "perro";
  }

  habla() {
    return `Soy un ${this.especie} y digo guau!`;
  }
}

class gato extends animal2 {
  constructor() {
    super();
    this.especie = "gato"
  }
  habla() {
    return `Soy un ${this.especie} y digo miau!`;
  }
}

//Hasta aca si se aplico principios solid

let otroPerro = new perro();
let otroGato = new gato();

console.log(otroPerro.habla());
console.log(otroGato.habla());
otroPerro.especie = "cerdo"; // modifica a perro. Hay que usar atributos privados mas adelante
console.log(otroPerro.especie);
console.log(otroPerro.habla());
