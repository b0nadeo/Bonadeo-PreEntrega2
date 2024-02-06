alert("Hola. Bienvenido a Balboa Fitness !");
const nombreUsuario1 = "rocky";
const passwordUsuario1 = "adrian";
let passwordUsuario2;
let nombreUsuario2;
let loginType = parseInt(
  prompt("\n1. Iniciar sesión \n2. Registrarse \n3. Vengo a chusmear")
);
let continuar = true;

// Inicio de sesión
const login = () => {
console.log(nombreUsuario1)
console.log(passwordUsuario1)
console.log(nombreUsuario2)
console.log(passwordUsuario2)
  let nuevoNombreUsuario = prompt("Introduzca su nombre de usuario");
  if (nuevoNombreUsuario === nombreUsuario1) {
    let nuevoPassUsuario = prompt("Introduzca su contraseña");
    if (nuevoPassUsuario === passwordUsuario1) {
      alert("Bienvenido de nuevo, " + nombreUsuario1);
      continuar = false;
      return continuar;} 
      else {
      alert("Contraseña incorrecta");
    }
  } 
  else if (nuevoNombreUsuario === nombreUsuario2) {
    nuevoPassUsuario = prompt("Introduzca su contraseña");
    if (nuevoPassUsuario === passwordUsuario2) {
      alert("Bienvenido de nuevo, " + nombreUsuario2);
      continuar = false;
      return continuar;} 
    else {
      alert("Contraseña incorrecta");
    }
    }
  else {
    alert("Usuario incorrecto");
  }

};

// Registrarse
const registrar = () => {
  nombreUsuario2 = prompt("Ingresa tu nombre de usuario"); /* String */
  passwordUsuario2 = prompt("Ingresa tu contraseña"); /* String */
  let verificaPass = prompt("Reingresa contraseña");

  let edadUsuario= parseInt(prompt("Ingrese su edad")); /* Number */
  console.log(edadUsuario)

if(edadUsuario >=18){
    alert("Edad verificada, oprima Aceptar para continuar su inscripción")
}else if (edadUsuario < 18){
    alert("Los menores de edad deben venir acompañados de padre, madre o tutor al gimnacio para la inscripción")
    return nombreUsuario2, passwordUsuario2;
} 
let alturaUsuario = parseFloat(prompt("Ingrese su altura (con punto, no coma por favor)")) /* Number */
console.log(alturaUsuario)

let pesoUsuario = prompt("Ingrese su peso") /* String */
console.log(pesoUsuario)

if (verificaPass == passwordUsuario2) {
    alert("Gracias por registrarte " + nombreUsuario2);
    return nombreUsuario2, passwordUsuario2;
  } else {
    alert("Contraseña incorrecta");
  }

  
};


while (loginType != 0 && continuar) {
  switch (loginType) {
    case 1:
      login();
      break;

    case 2:
      registrar();
      break;

    case 3:
      alert("Pasá, pasá !");
      continuar = false;
      break;

    default:
      alert("Elija una opción, por favor");
      break;
  }
  if (continuar) {
    loginType = parseInt(
      prompt("\n1. Iniciar sesión \n2. Registrarse \n3. Vengo a chusmear"),
      
    );
  }
}


//Array de Ropa
const ropa = [
  {id:1, nombre:"Remera Rocky", talle:"L", precio:5500},
  {id:2, nombre:"Remera Mick", talle:"M", precio:5500},
  {id:3, nombre:"Musculosa", talle:"M", precio:4500},
  {id:4, nombre:"Short", talle:"M", precio:5500},
  {id:5, nombre:"Gorra", talle:"S", precio:2500},
  {id:6, nombre:"Guantes", talle:"12 Oz.", precio:15500},
]

// let nuevoItem = {id:7, nombre:"Guantines", talle:"8 Oz.", precio:"13500"} //Agregar elemento al Array
// ropa.push(nuevoItem);
//ropa.shift(); //Elimina el primer objeto del Array 
//ropa.pop(); //Elimina el último objeto del Array 
// console.log(ropa);

// console.log("Nombre: " + ropa[0].nombre + " - Precio: $" + ropa[0].precio) //Búsqueda por orden de objetos
// console.log("Nombre: " + ropa[4].nombre + " - Precio: $" + ropa[4].precio)

// let buscarUno = ropa.find(busqueda => busqueda.id === 2) // Búsqueda por id
// console.log("Nombre: " + buscarUno.nombre + " - Precio: $" + buscarUno.precio)
// let buscarDos = ropa.find(busqueda => busqueda.nombre === "Musculosa") // Búsqueda por Nombre
// console.log("Nombre: " + buscarDos.nombre + " - Precio: $" + buscarDos.precio)

class Bolsa {
  constructor() {
    this.productos = [];
    this.descuento = 10;
    this.total = 0;
    this.productosConDescuento = 4;
  }

  agregarItem(id) {
    let producto = ropa.find(busqueda => busqueda.id === id);
    console.log(producto);

    if (producto) {
      this.productos.push(producto);
      console.log("Agregaste el Item N" + id + " a la Bolsa de Compras!");
    }
    else{
      console.log("No se encontró el producto");
    }
  }

  

  listaDeRopa(){
    let salida = "";
    this.productos.forEach(item => {
       salida += item.id + " - " + item.nombre + " - " + item.precio;
    })
    return salida;
  }


  calcularTotal() {
    return this.productos.length;
  }

  descuento(){ 
    if (this.calcularTotal() >= this.productosConDescuento){
      return Math.round((this.calcularSuma() * this.descuento) / 100);
    } 
    else {
      return 0;
  }
  }

  calcularSuma () {
    let total = 0;
    this.productos.forEach(item => {
      total += item.precio;
    });
    
    return total;

  }
} 

function listaDeRopa() {
  let listado = "";

  ropa.forEach(item => {
      listado += item.id + " - " + item.nombre + " - $" + item.precio + "\n";
  })

  return listado;
}

// const bolsa = new Bolsa();
// bolsa.agregarItem(2);
// bolsa.agregarItem(3);
// bolsa.agregarItem(4);
// bolsa.calcularTotal();
// console.log("Cantidad de elementos en mi bolsa " + bolsa.calcularTotal());

// let enTotal = bolsa.calcularSuma();
// // let descuento = bolsa.descuento();
// console.log("Total de la Compra: $" + enTotal);
// // console.log("Descuento: $" + descuento);
// // let totalFinal = enTotal - descuento;
// // console.log("Final: $" + totalFinal);

const bolsa = new Bolsa();
let opcionDeCompra = 6;

while (opcionDeCompra){
  opcionDeCompra=parseInt(prompt("Elegí tu producto\n" + listaDeRopa() + "0 - Terminar compra"))
  bolsa.agregarItem(opcionDeCompra)
}

let productosSeleccionados = "Facturación de su compra:\n" + bolsa.listaDeRopa()

let total = Math.round(bolsa.calcularSuma())

alert("El total de tu compra es $" + total)



