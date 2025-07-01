const { textSpanIntersectsWithTextSpan } = require("typescript");

class rectangulo{
    constructor(ancho,alto){
        this.ancho = ancho,
        this.alto = alto
    };
};

const unRectangulo = new rectangulo(15, 30);
console.log(unRectangulo.alto);

// si hago otroRectangulo = unRectangulo obtengo una copia por referencia
const otroRectangulo = new rectangulo(20, 40);
console.log(otroRectangulo.alto);

unRectangulo.alto = otroRectangulo.alto;
console.log(unRectangulo.alto);
console.log(otroRectangulo.alto);
otroRectangulo.alto = 2000;
console.log(otroRectangulo.alto);
console.log(unRectangulo.alto);

class persona {
    constructor(dni, nombre, apellido, edad)
    {
        this.dni = dni;
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
    }
    // metodo
    get cumpleAño() { return this.cambiarEdad(this.edad)}

    cambiarEdad (p_edad) {
        return p_edad + 1;
    };

};

let pedro = new persona(12345678, "Pedro", "Perez", 30);
let jorge = new persona(98765432, "Jorge", "Garcia", 25);
console.log(`${pedro.nombre} ${pedro.apellido} tiene ${pedro.edad}`);
console.log(`Mañana cumple ${pedro.cumpleAño}`);

//cuidado con la referencia
let sanchez = pedro;
sanchez.edad = 35;
console.log(`${pedro.nombre} ${pedro.apellido} tiene ${pedro.edad}`);
console.log(`Mañana cumple ${pedro.cumpleAño}`);

//nuevo objeto
let sanchez2 = new persona(121212, "Mario", "Sanchez", 50);
console.log(sanchez2.cumpleAño);