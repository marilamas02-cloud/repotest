// // pedir al usuario una palabra e indicar cuantas vocales tiene y cuales son
// const palabra = prompt("ingresar palabra");
// let contadorVocales = 0;
// let vocales = "";
// for (let i = 0; i < palabra.length; i++) {
//   const palabraMinuscula = palabra[i].toLowerCase();
//   switch (palabraMinuscula) {
//     case "a":
//       contadorVocales++;
//       if (!vocales.includes("A")) {
//         vocales = vocales + "A";
//       }
//       break;

// const { cacheSignal } = require("react");

//     case "e":
//       contadorVocales++;
//       if (!vocales.includes("E")) {
//         vocales = vocales + "E";
//       }
//       break;

//     case "i":
//       contadorVocales++;
//       if (!vocales.includes("I")) {
//         vocales = vocales + "I";
//       }
//       break;

//     case "o":
//       contadorVocales++;
//       if (!vocales.includes("O")) {
//         vocales = vocales + "O";
//       }
//       break;

//     case "u":
//       contadorVocales++;
//       if (!vocales.includes("U")) {
//         vocales = vocales + "U";
//       }
//       break;
//   }
// }
// alert(
//   `la palabra es ${palabra} y tiene ${contadorVocales} que son  ${vocales} `
// );

// Ejercicio 1:
// Pedir una palabra y reemplazar todas las vocales por *.
// Por ej: javascript → j*v*scr*pt || Franco -> Fr*nc*

// const palabra = prompt("escribe una palabra").toLowerCase();
// let palabraCompleta = "";
// for (let i = 0; i < palabra.length; i++) {
//   if (
//     palabra[i] == "a" ||
//     palabra[i] == "e" ||
//     palabra[i] == "i" ||
//     palabra[i] == "o" ||
//     palabra[i] == "u"
//   ) {
//     palabraCompleta = palabraCompleta + "*";
//   } else {
//     palabraCompleta = palabraCompleta + palabra[i];
//   }
// }
// alert(palabraCompleta);

// Ejercicio 2: Palíndrom
// Pedir una palabra y verificar si se lee igual al revés.
// Oso -> Es Palindromo porque se lee igual al derecho que al reves
// Neuquen -> Es Palindromo
// Franco -> No es Palindromo

// const palabra = prompt("Escribe una palabra").toLowerCase();

// let inicio = 0;
// let fin = palabra.length - 1;
// let esPalindromo = true;

// while (inicio < fin) {
//   if (palabra[inicio] !== palabra[fin]) {
//     esPalindromo = false;
//     break;
//   }
//   inicio++;
//   fin--;
// }

// if (esPalindromo) {
//   alert(`${palabra} es palíndromo`);
// } else {
//   alert(`${palabra} NO es palíndromo`);
// }

// Ejercicio 3: Palabra al revés
// Pedir una palabra y mostrarla invertida.
// Por ej: hola → aloh

// const palabra = prompt("Escribe una palabra");
// let invertida = "";

// for (let i = 0; i < palabra.length; i++) {
//   invertida = palabra[i] + invertida;
// }

// alert(invertida);

// Pedir una palabra.
// Contar cuántas consonantes tiene.
// Mostrar el resultado.

// const palabra = prompt("escribe una palabra").toLowerCase();
// let contadorConsonante = 0;
// for (let i = 0; i < palabra.length; i++) {
//   if (
//     palabra[i] !== "a" &&
//     palabra[i] !== "e" &&
//     palabra[i] !== "i" &&
//     palabra[i] !== "o" &&
//     palabra[i] !== "u"
//   ) {
//     contadorConsonante++;
//   }
// }
// alert(`${palabra} tiene ${contadorConsonante} consonantes`);

// Pedir una palabra o frase al usuario.
// Contar cuantas letras tiene
// Mostrar el resultado.
//
// Ejemplos:
// "hola123" → 3 números
// "a1b2c3" → 3 números
// "franco" → 0 números

// let palabra = prompt("ingrese una palabra o frase");
// let contador = 0;

// for (let i = 0; i < palabra.length; i++) {
//   contador++;
// }
// alert(`${palabra} tiene ${contador} letras`);

// Pedir una palabra al usuario.
// Contar cuántas veces hay DOS letras iguales seguidas.
// Mostrar el resultado.
//
// Ejemplos:
// "llama" → 1  (ll)
// "coffee" → 1 (ff)
// "bookkeeper" → 2 (oo, ee)
// "hola" → 0

// let palabra = prompt("ingrese una palabra");
// let contador = 0;
// for (let i = 0; i < palabra.length - 1; i++) {
//   if (palabra[i] === palabra[i + 1]) {
//     contador++;
//   }
// }
// alert(`${palabra} tiene ${contador} letras iguales seguidas`);

// Ejercicio: Peloteo de tenis
// Pedir una secuencia de golpes escrita con letras:
// "D" = derecha
// "R" = revés
//
// Contar cuántos golpes válidos hubo.
// Un golpe es válido si:
// - NO hay dos golpes iguales seguidos
//
// Mostrar el total de golpes válidos.
//
// Ejemplos:
// "DRDR" → 4 golpes válidos
// "DDRR" → 2 golpes válidos (D, R)
// "DRRDR" → 4 golpes válidos

// “Si el golpe actual es distinto al anterior, suma.”

// let secuencia = prompt(
//   "Ingrese una secuencia de golpes: D = derecha, R = revés"
// );

// let contadorGolpes = 0;
// let esValida = true;

// for (let i = 0; i < secuencia.length; i++) {
//   // 1️⃣ Validar letra
//   if (secuencia[i] !== "D" && secuencia[i] !== "R") {
//     esValida = false;
//     break;
//   }

//   // 2️⃣ Contar golpe válido
//   if (i === 0 || secuencia[i] !== secuencia[i - 1]) {
//     contadorGolpes++;
//   }
// }

// // 3️⃣ Mostrar resultado
// if (esValida) {
//   document.writeln("El total de golpes válidos es: " + contadorGolpes);
// } else {
//   document.writeln("Error: solo se permiten las letras D y R");
// }

// crear una funcion que reciba dos numeros, los sume entre ellos y los devuelva el resultado

// function sumarNumeros(numero1, numero2) {
//   let suma = 0;
//   suma = numero1 + numero2;
//   return suma;
// }
// const valor1 = 5;
// const valor2 = 2;
// console.log(sumarNumeros(valor1, valor2));

// crear una funcion que reciba 3 parametros, dos de ellos numeros y el tercero la operacion aritmetica, y segun la operacion devolver el resultado correspondiente

// (3,3,"multiplicar") -> 9

// function realizarOperacion(num1, num2, operacion) {
//   let resultado = 0;
//   if (operacion === "suma") {
//     resultado = num1 + num2;
//   } else if (operacion === "resta") {
//     resultado = num1 - num2;
//   }
//   return resultado;
// }

// console.log(realizarOperacion(3, 3, "suma"));

// function realizarOperacion(num1, num2, operacion) {
//   switch (operacion) {
//     case "suma":
//       return num1 + num2;
//     case "resta":
//       return num1 + num2;
//   }
// }
// console.log(realizarOperacion(3, 3, "suma"));

// crear una funcion que reciba un string y un caracter y reemplace las vocales y por dicho caracter
// ('Franco', 'X') -> 'FrXncX'

// function reemplazarCaracter(palabra, caracter){
//     let palabraFinal = '';
//     for (let i = 0; i < palabra.length; i++) {
//      if ('aeiou'.includes(palabra[i].toLowerCase())) {
//         palabraFinal = palabraFinal + caracter
//      } else {
//         palabraFinal = palabraFinal + palabra[i]
//      }
//     }
//     return palabraFinal;
// }

// console.log(reemplazarCaracter('Franco','x'))

// E1: Crear una *FUNCION* que reciba una palabra y un numero y segun las vocales realice la siguiente accion:
//        Si la vocal es abierta (AEO): Reemplazar la vocal por Mayusculas y la cantidad indicada segun el parametro de numero que se paso, por ejemplo:
//        ('Franco', 2) -> Devolver FrAAncOO
//        Si la vocal es cerrada (IU): Quitarla de la palabra devuelva
//        Por ejemplo: ('Sofia', 3) -> SOOOfAAA

// function reemplazarCaracter(palabra, numero) {
//   let resultado = "";
//   for (let i = 0; i < palabra.length; i++) {
//     if ("aeo".includes(palabra[i].toLowerCase())) {
//       resultado += palabra[i].toUpperCase().repeat(numero);
//     } else if (!"iu".includes(palabra[i].toLowerCase())) {
//       resultado += palabra[i];
//     }
//   }
//   return resultado;
// }
// console.log(reemplazarCaracter("Franco", "2"));
// console.log(reemplazarCaracter("Sofia", "2"));

// E2: Crear una *FUNCION* que reciba como parametros, una *FRASE* y *un* caracter especial (?!*/-+ o cualquiera) y realice las siguiente operaciones:
//        1. Si lo que ingreso *NO* es una palabra devolver un string diciendo que debe ingresar una frase
//        2. Si ingresa una frase se debe realizar lo siguiente:
//                  1.1: Reemplazar todos los espacios por el caracter especial, por ejemplo: ('Hola como estas?', '*') -> 'Hola*como*estas?'
//                  1.2: Si la frase tiene un numero *PAR* de caracteres colocar un '!' al final en el caso que sea impar colocar un '?', por ejemplo:
//                   ('Hola como estas?', '*') -> 'Hola*como*estas??'

// function reemplazarCaracter(frase, caracter) {
//   let palabraCompleta = "";
//   if (!frase.includes(" ")) {
//     alert("Debe ingresar una frase");
//     return;
//   }
//   for (let i = 0; i < frase.length; i++) {
//     if (frase[i] === " ") {
//       palabraCompleta += caracter;
//     } else {
//       palabraCompleta += frase[i];
//     }
//   }
//   if (palabraCompleta.length % 2 === 0) {
//     palabraCompleta += "!";
//   } else {
//     palabraCompleta += "?";
//   }
//   return palabraCompleta;
// }
// console.log(reemplazarCaracter("Hola orne ", "*"));

// Crear una funcion para cifrar frases, debe recibir dos parametros, la frase y un numero, la funcion debe hacer lo siguiente:
// 1. Invertir el orden la frase y ademas cambia la letra segun el numero del parametro, el numero indicara la cantidad de saltos hacia delante en el abecedario.
// Por ejemplo:
// ('Hola', 2) -> cnqj
// En pocas palabras inverte y cambia la letra por el numero del saltos
// la letra A cambio por la C (2 saltos)
// La letra L por la N (2 Saltos)
// La letra O por la Q (2 saltos)
// La letra H por la J (Dos saltos)

// crear una funcion que reciba un string y devuelva el numero de vocales que contiene
// let frase = "";
// let input;
// do {
//   input = prompt("escribi una frase");
//   if (input === null && input.trim() === "") {
//     break;
//   } else if (input !== null && input.trim() !== "") {
//     frase = input;
//   } else {
//     alert("Error, palabra invalida");
//   }
// } while (input === null || input.trim() === "" || !isNaN(input));

// function vocales(frase) {
//   let contador = 0;

//   for (let i = 0; i < frase.length; i++) {
//     let letras = frase.charAt(i);
//     if ("aeiouAEIOU".includes(letras)) {
//       contador++;
//     }
//   }
//   return contador;
// }
// let resultado = vocales(frase);

// alert(`La palabra ${input} contiene ${resultado} vocales`);

// crear una funcion que reciba un array de 3 o 4 elementos y dependiendo el largo se devolvera el o los elementos intermedios
// ['a' , 'b' , 'c'] -> 'b' || si es impar
// ['a' , 'b' , 'c', 'd'] -> ['b', 'c']|| si es par
// recordar
// console.log(2%2) 0
// console.log(3%2) 1

// function devolver(arr) {
//   if (arr.length % 2 === 0) {
//     return arr.slice(1, 3);
//   }
//   return arr[1];
// }
// console.log(devolver(["a", "b", "c", "d"]));

// Ejercicio 1:

// El ácido desoxirribonucleico (ADN) es la principal molécula de almacenamiento de información en los sistemas biológicos. Está compuesto por cuatro bases de ácidos nucleicos: guanina (G), citosina (C), adenina (A) y timina (T).
// El ácido ribonucleico (ARN) es la principal molécula mensajera en las células. El ARN difiere ligeramente del ADN en su estructura química y no contiene timina. En el ARN, la timina se reemplaza por otro ácido nucleico, el uracilo (U).
// Cree una función que traduzca una cadena de ADN dada a ARN.
// Por ejemplo:
// "GCAT" => "GCAU"
// La cadena de entrada puede tener una longitud arbitraria; en particular, puede estar vacía. Se garantiza la validez de todas las entradas; es decir, cada cadena de entrada solo estará compuesta por "G", "C", "A" y/o "T".

// function traducirCadena(adn) {
//   let arn = "";
//   for (let i = 0; i < adn.length; i++) {
//     if (adn[i] === "T") {
//       arn += "U";
//     } else {
//       arn += adn[i];
//     }
//   }
//   return arn;
// }
// console.log(traducirCadena("GCAT"));

// Ejercicio 2:
// Completa la solución de forma que divida la cadena en pares de dos caracteres. Si la cadena contiene un número impar de caracteres, se debe reemplazar el segundo carácter que falta del par final con un guion bajo ('_').
// Ejemplos:
// * 'abc' => ['ab', 'c_']
// * 'abcdef' => ['ab', 'cd', 'ef']

// function dividirEnPares(texto) {
//   resultado = [];
//   letras = texto.split("");
//   par = "";
//   for (let i = 0; i < letras.length; i++) {
//     par += letras[i];
//     if (par.length % 2 === 0) {
//       resultado.push(par);
//       par = "";
//     }
//   }
//   if (par.length % 2 !== 0) {
//     resultado.push(par + "_");
//   }
//   return resultado;
// }
// console.log(dividirEnPares("abc"));
// console.log(dividirEnPares("abcdef"));

// Ejercicio 3:

// Escribe una función que tome un array de cadenas como argumento y devuelva un array ordenado que contenga las mismas cadenas, ordenadas de menor a mayor.
// Por ejemplo, si este array se pasa como argumento:
// ["Telescopios", "Gafas", "Ojos", "Monóculos"]
// Tu función devolvería el siguiente array:
// ["Ojos", "Gafas", "Monóculos", "Telescopios"]
// Todas las cadenas del array pasadas a tu función tendrán longitudes diferentes, por lo que no tendrás que decidir cómo ordenar varias cadenas de la misma longitud.

// function menoraMayor(array) {
//   return array.sort((a, b) => a.length - b.length);
// }
// let resultado = [
//   "Telescopios",
//   "Gafas",
//   "Ojos",
//   "Monóculos",
//   "otorrinolaringologia",
//   "sol",
//   "cinco",
// ];
// let resultado2 = menoraMayor(resultado);
// console.log(resultado2);

// metodo filter y find
// dado un array de edades, filtar unicamente las personas que sean mayores de edad.

// const edades = [15, 16, 17, 18, 19, 20, 21];
// const mayoresDeEdad = edades.filter((edades) => edades >= 18);
// console.log(mayoresDeEdad);

// // metodo Map
// // dado un array de numeros, crear un nuevo array donde cada numero este multiplicado por 2.

// const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const numeroPor2 = numeros.map((numeros) => numeros * 2);
// console.log(numeroPor2);
// // dado un array de nombres, crear un nuevo array donde todos los nombres esten en mayusculas.
// const nombres = ["marisol", "ornella", "lucia", "juana"];
// const nombresEnMayuscula = nombres.map((nombres) => nombres.toUpperCase());
// console.log(nombresEnMayuscula);

// // filtar los numeros mayores a 10, multiplicarlos por 2 y encontrar el primero que sea mayor a 50.
// // const numeros = [5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 50, 51, 52, 53, 54, 55];
// // const mayoresA10 =

// // crear dos objetos con sus propiedades y crear un metodo para cada objeto y que muestre sus dichas propiedades mediante un mensaje
// const celular = {
//   color: "rojo",
//   modelo: "iphone",
// };
// celular.mensaje = function () {
//   return `el celular es ${this.color} y es de un modelo ${this.modelo}`;
// };

// console.log(celular.mensaje());

// // crear un objeto que tenga dos propiedades y dos metodos

// const auto1 = {
//   color: "azul",
//   modelo: "mercedes",
//   objeto: () => {
//     return `el auto es ${auto1.color} y es de un modelo ${auto1.modelo}`;
//   },
//   mensaje: () => {
//     return `el auto es azul y el modelo es mercedes benz`;
//   },
// };
// console.log(auto1.objeto());
// console.log(auto1.mensaje());

// // cuando ataco tengo que tener 20 puntos de mana y si los tengo realizar el ataque (console.LOG) y descontar esos 20 puntos de mana. Defiendo descontar 5 puntos de vida
// // USAR THIS

// const personaje = {
//   estaVivo: false,
//   vida: 100,
//   mana: 100,
//   atacar: function () {
//     if (mana > 20) {
//       console.log(`atacado`);
//     }
//   },
//   defender: function () {
//     if (this.vida === 5) {
//       this.estaVivo = false;
//       return `pj muerto`;
//     }
//     this.vida = this.vida - 5;
//     return `defensa ok`;
//   },
// };
// console.log(personaje.defender());
// console.log(personaje.vida);

// const persona = {
//   energia: 1000,
//   actividad: function (consumo) {
//     if (this.energia >= consumo) {
//       return (this.energia = this.energia - consumo);
//     }
//     return "Energia insuficiente";
//   },
//   comer: function (calorias) {
//     this.energia = this.energia + calorias;
//   },
// };
// console.log(persona.energia);
// persona.actividad(500);
// persona.comer(200);
// console.log(persona.energia);
// console.log(persona.actividad(1000));

// crear un array con 4 objetos que los mismos hagan referencia a una persona y tengan las siguientes propiedades (nombres, edades, apellido y pais)

// const personas2 = [
//   {
//     nombre: "marisol",
//     edad: 23,
//     apellido: "lamas",
//     pais: "argentina",
//   },
//   {
//     nombre: "julieta",
//     edad: 23,
//     apellido: "lopez",
//     pais: "argentina",
//   },
//   {
//     nombre: "lucia",
//     edad: 21,
//     apellido: "gomez",
//     pais: "españa",
//   },
//   {
//     nombre: "facundo",
//     edad: 22,
//     apellido: "camano",
//     pais: "chile",
//   },
// ];
// console.log(
//   personas2.find(
//     (personas2) => personas2.edad >= 18 && personas2.pais === "argentina"
//   )
// );

// crear una clase de un AUTO (marca, año , modelo) y funcion acelerar

// class Auto {
//   constructor(marca, anio, modelo) {
//     this.marca = marca;
//     this.anio = anio;
//     this.modelo = modelo;
//   }
//   acelerar = () => {
//     return `acelerando`;
//   };
//   informacion = () => {
//     return `este auto es de la marca ${this.marca} , del año ${this.anio} y modelo ${this.modelo}`;
//   };
// }
// const corolla = new Auto("Toyota", 2025, "corolla");
// console.log(corolla.informacion());
// console.log(corolla.acelerar());

// crear una clase llamada Persona, que tenga los siguientes datos : Nombre, Apellido, edad, calorias y dos metodos :
// 1. comer (calorias) => aumentar calorias
// 2. actividad () => disminuya las calorias segun actividad

// class Persona {
//   constructor(nombre, apellido, edad, calorias) {
//     this.nombre = nombre;
//     this.apellido = apellido;
//     this.edad = edad;
//     this.calorias = calorias;
//   }
//   comer = (energia) => {
//     this.calorias = this.calorias + energia;
//     return `${this.nombre} aumento ${this.calorias} calorias`;
//   };
//   actividad = (consumo) => {
//     this.calorias = this.calorias - consumo;
//     return `dismuyeron las calorias y te quedan ${this.calorias}`;
//   };
// }
// const Resultado = new Persona("marisol", "lamas", 23, 100);
// console.log(Resultado.comer(1000));
// console.log(Resultado.actividad(500));

// class Profesor extends Persona {
//   constructor(nombre, apellido, edad, calorias, materiaDictada) {
//     super(nombre, apellido, edad, calorias);
//     this.materiaDictada = materiaDictada;
//   }
//   comer = () => {
//     return "No podes comer";
//   };
// }
// const francoProf = new Profesor("Franco", "Diaz", 31, 100, "Programacion");
// console.log(francoProf.comer(1000));

// si el elemento es un numero par agregar CSSLayerStatementRule(fondoazul), sino no
// const pElements = document.getElementsByTagName("p");
// for (let i = 0; i < pElements.length; i++) {
//   const element = pElements[i];
//   element.innerHTML = i;
//   if (i % 2 === 0) {
//     element.classList.add("fondoAzul");
//   }
// }

// crear una funcion a la que le tengo que pasar la cantidad de elementos a crear(p) y su elemento contenedor como parametros
// const div = document.querySelector("div");
// function crearElementoP(cantidad, contenedor) {
//   for (let i = 0; i < cantidad; i++) {
//     const p = document.createElement("p");
//     p.innerHTML = i;
//     contenedor.appendChild(p);
//   }
// }
// crearElementoP(1000, div);

// const buttonId = document.getElementById("buttonId");
// const body = document.querySelector("body");
// let estadoMg = false;
// buttonId.innerText = "Me gusta";
// buttonId.addEventListener("click", () => {
//   estadoMg = !estadoMg;
//   buttonId.innerText = `Me gusta ${estadoMg === true ? "👍" : ""}`;
//   if (estadoMg === true) {
//     buttonId.classList.add("mg");
//     return;
//   }
//   buttonId.classList.remove("mg");
// });

// const buttonId = document.getElementById("buttonId");
// const contador = document.getElementById("contador");
// const button = document.getElementById("button");
// const body1 = document.querySelector("body");
// buttonId.innerText = "+";
// button.innerText = "-";
// let acumulador = 0;
// buttonId.addEventListener("click", () => {
//   acumulador++;
//   contador.innerText = acumulador;
// });

// button.addEventListener("click", () => {
//   if (acumulador === 0) {
//   }
//   acumulador--;
//   contador.innerText = acumulador;
// });

// const num1 = document.getElementById("num1");
// const num2 = document.getElementById("num2");
// const spanText = document.getElementById("spanText");
// const btnResultado = document.getElementById("btnResultado");
// let numero1 = 0;
// let numero2 = 0;

// buttonId.addEventListener("blur", (e) => {
//   numero1 = e.target.value;
// });

// button.addEventListener("blur", (e) => {
//   numero2 = e.target.value;
// });
// btnResultado.addEventListener("click", () => {
//   spanText.innerText = number(numero1) + number(numero2);
// });

// const input = document.getElementById("itemInput");
// const button = document.getElementById("button1");
// const lista = document.getElementById("lista");
// button.addEventListener("click", function () {
//   if (input.value.trim() !== "") {
//     const valorInput = document.createElement("li");
//     valorInput.innerText = input.value;
//     lista.appendChild(valorInput);
//     input.value = "";
//   }
// });

// crear un formulario y que resultado arroje una tarjeta con los datos

// const datos = {
//   nombre: "marisol",
//   usuario: "",
//   email: "",
//   descripcion:
//     "Fanático de la tecnología y profesor de las artes de programación con Javascript",
//   imagen:
//     "https://img.freepik.com/vector-gratis/ilustracion-joven-sonriente_1308-174669.jpg?semt=ais_incoming&w=740&q=80",
// };

// const tarjeta = () => {
//   const contenedorTarjeta = document.getElementById("classCard");
//   const contenedor = document.createElement("div");
//   const img = document.createElement("img");
//   const contenedor2 = document.createElement("div");
//   const titulo = document.createElement("h5");
//   const parrafo = document.createElement("p");
//   const parrafo2 = document.createElement("p");
//   const button = document.createElement("a");
// };
// columnaTarjeta.className = "col mt-5";
// contenedor.className = "card";
// img.className = "card-img-top";
// img.setAttribute = `src, ${datos.imagen}`;
// img.setAttribute = `alt, ${datos.imagen}`;
// contenedor2.className = "card-body";
// titulo.className = "card-title";
// titulo.textContent = ` ${datos.nombre}`;
// parrafo.className = "card-text";
// parrafo2.className = "card";
// button.className = "card";

const userForm = document.getElementById("userForm");
const trBody = document.getElementById("trBody");
let userDB = [];
let idToEdit = null;

userForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const form = e.target;
  const formData = new FormData(form);
  let data = Object.fromEntries(formData);
  if (idToEdit) {
    data.id = idToEdit;
    userDB = userDB.map((user) => {
      if (user.id == idToEdit) {
        return (user = data);
      }
      return user;
    });
    idToEdit = null;
  } else {
    const idGenerado = numAleatorio(5);
    data.id = idGenerado;
    userDB.push(data);
  }
  trBody.innerHTML = "";
  console.log(userDB);
  userDB.forEach((user) => {
    const tdElement = `
            <tr>
                <td>${user.id}</td>
                <td>${user.name}</td>
                <td>${user.lastname}</td>
                <td>${user.birthDate}</td>
                <td>${user.city}</td>
                <td>${user.sex}</td>
                <td>
                    <i class="bi bi-trash" onclick="deleteUser(${user.id})"></i>
                    <i class="bi bi-pencil" onclick="updateUser(${user.id})"></i>
                </td>
            </tr>
        `;
    trBody.innerHTML += tdElement;
  });
  e.target.reset();
});

function numAleatorio(digitos) {
  let acumulador = [];
  for (let i = 0; i < digitos; i++) {
    const numRandom = parseInt(Math.random() * 9);
    acumulador.push(String(numRandom) || "0");
  }
  return acumulador.join("");
}

function deleteUser(id) {
  const userFound = userDB.find((user) => user.id == id);
  const continuar = confirm(`
        Desea eliminar el usuario ${userFound.name}, id: ${userFound.id}`);
  if (!continuar) {
    return;
  }
  userDB = userDB.filter((user) => user.id != id);
  trBody.innerHTML = "";
  userDB.forEach((user) => {
    const tdElement = `
            <tr>
                <td>${user.id}</td>
                <td>${user.name}</td>
                <td>${user.lastname}</td>
                <td>${user.birthDate}</td>
                <td>${user.city}</td>
                <td>${user.sex}</td>
                <td>
                    <i class="bi bi-trash" onclick="deleteUser(${user.id})"></i>
                    <i class="bi bi-pencil"></i>
                </td>
            </tr>
        `;
    trBody.innerHTML += tdElement;
  });
}

function updateUser(id) {
  const userFound = userDB.find((user) => user.id == id);
  idToEdit = id;
  userForm.name.value = userFound.name;
  userForm.lastname.value = userFound.lastname;
  userForm.birthDate.value = userFound.birthDate;
  userForm.city.value = userFound.city;
  userForm.sex.value = userFound.sex;
}
