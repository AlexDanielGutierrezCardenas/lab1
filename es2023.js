//Variables let y const: El estándar ES2015 introdujo las palabras clave let y const para declarar
// variables. La diferencia entre let y var es que las variables declaradas con let tienen un ámbito de bloque,
// mientras que las variables declaradas con var tienen un ámbito de función. La palabra clave const se
// utiliza para declarar variables constantes que no pueden ser reasignadas.

//example
// let nombre = "Alex";
// const PI = 3.1416;

// Arrow Functions: ES2015 introdujo las funciones flecha (=>) que permiten escribir funciones de forma
// más concisa. Las funciones flecha no tienen su propio objeto this, lo que significa que se hereda el objeto
// this del contexto en el que se definen.

//example
// const suma =(a,b)=> a + b;

// Plantillas de cadena: Las plantillas de cadena (template strings) permiten incluir variables y expresiones
// en cadenas de texto utilizando la sintaxis de comillas invertidas ( ) y ${}.

// const nombre ="Alex";
// console.log(`Mi name is ${nombre}`);

// Desestructuración de objetos y matrices: La desestructuración permite asignar variables a los valores
// de propiedades de objetos o elementos de matrices de manera más sencilla y eficiente.

// const persona = {nombre:"Alex",edad:23};
// const {nombre,edad} = persona
// console.log(nombre,edad)

// Módulos: ES2015 introdujo la capacidad de exportar e importar módulos en JavaScript, lo que hace que
// sea más fácil organizar y reutilizar el código.

// import { PI } from "./modulo";
// console.log(PI);

//Clases: ES2015 introdujo la capacidad de crear clases en JavaScript, lo que permite una programación
// orientada a objetos más sencilla y más fácil de leer

// class Persona {
//     constructor(nombre,edad){
//         this.nombre=nombre;
//         this.edad=edad;
//     }
//     saludar(){
//         console.log(`Hola mi nombre es ${this.nombre}`);
//     }
// }

// const persona = new Persona("Alex",23);
// persona.saludar();

// Operador Spread: El operador spread (...) permite expandir una matriz en una lista de argumentos o
// una matriz nueva. Esto simplifica la manipulación de matrices y objetos.

// const numeros=[1,2,3];
// const numerosDuplicados=[...numeros,...numeros];
// console.log(numerosDuplicados);

//Promesas: Las promesas proporcionan una forma más clara y sencilla de trabajar con código
// asincrónico y evitar el anidamiento excesivo de llamadas de retorno.

// const promesa = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("la operacion se completo correctamente");
//     },2000);
// });
// promesa.then(resultado=>{
//     console.log(resultado);
// }).catch(error =>{
//     console.log(error);
// })

// Valores predeterminados para parámetros: ES2015 permite establecer valores predeterminados para
// los parámetros de una función, lo que hace que sea más fácil trabajar con argumentos opcionales.

//desafio 1
// const resultado = obtener=()=>{
//     numero.forEach(element => console.log(element));
// };


const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];

const resultado = (numbers)=>{
  const resultado = [];
  numbers.forEach((number) => {
    let elevado = Math.pow(number, 2);
    if (elevado > 10 && elevado % 2 == 0) {
      resultado.push(elevado);
    }
  });
  return resultado;
}
console.log(resultado(numbers));


// let total = 0;
// numbers.forEach((number) => {total+=number});
// console.log(total);

//desafio 2

// const persona = [
//   { nombre: "Juan", edad: 30 },
//   { nombre: "Ana", edad: 25 },
//   { nombre: "Pedro", edad: 27 },
//   { nombre: "Maria", edad: 22 },
//   { nombre: "Juana", edad: 21 },
// ];
// //forEach
// let menor = 50;
// persona.forEach((res) => {
//   if (res.edad < menor) {
//     menor = res.edad;
//     console.log(res);
//   }
// });

// //for
// function datos() {
//   let dato = persona[0].edad;
//   let nuevo = [];
//   for (let i = 0; i < persona.length; i++) {
//     // console.log(i,dato);
//     // console.log(persona[i].edad);
//     if (persona[i].edad <= dato) {
//       dato = persona[i].edad;
//       nuevo = persona[i];
//     }
//   }
//   console.log("la persona menor es: ", nuevo);
//   return nuevo;
// }
// datos();

// // const premio = persona.forEach((object) => {
// //   if (object.nombre === "Juan") {
// //     return (object);
// //   }
// // });
// // console.log(premio);

// // let user = persona.find((item) => item.edad == 21);

// // console.log(user.edad); // Celina

// const menorPersona = persona.map(function (menor) {
//   return menor;
// });

// console.log(menorPersona);
// // const object1 = { a: 1, b: 2, c: 3 };

// // const resultados = Object.fromEntries(
// //   Object.entries(persona)
// //   .map(([ key, val ]) => [ key, val * 2 ])
// // );

// // console.log(resultados);
// // { a: 2, b: 4, c: 6 }

// const comidas = [
//   { id: 1, momento: "Desayuno" },
//   { id: 2, momento: "Almuerzo" },
//   { id: 3, momento: "Comida" },
//   { id: 4, momento: "Merienda" },
//   { id: 5, momento: "Cena" },
// ];

// const momentoComida = comidas.map(function (comida) {
//   return comida.momento;
// });

// console.log(momentoComida);

// console.log("=======================================");

// let argu = persona.find(function (dato) {
//   // console.log(dato);
//   let menor = 100;
//   for (let i = 0; i < dato.length; i++) {
//     if (dato.edad <= menor) {
//       menor = dato.edad;
//       console.log(dato[i]);
//     }
//   }
//   console.log("el dato menor es: ", menor);
//   // }
//   // if(dato.edad === menor){
//   //   return dato;
//   // }
// });
// // console.log(argu)

// console.log("=======================================");
// // function encuentraMenor (persona){
// //   let años=100;
// //   for(let i=0;i<persona.length;i++){
// //     console.log(persona.edad);
// //   }
// // }
// // let nuevo = encuentraMenor();
// // console.log(nuevo)

// let posicionesReservadas = [
//   {
//     nombre: "Ana",
//     edad: 24,
//   },

//   {
//     nombre: "Beth",
//     edad: 22,
//   },

//   {
//     nombre: "Cara",
//     edad: 25,
//   },

//   {
//     nombre: "David",
//     edad: 30,
//   },

//   {
//     nombre: "Ethan",
//     edad: 26,
//   },
// ];

// function encontrarPorIndice(persona, indice) {
//   return indice === 3;
// }

// let miPosicion = posicionesReservadas.find((persona, indice) =>
//   encontrarPorIndice(persona, indice)
// );

// console.log(miPosicion);

// /*
// {
// edad: 30,
// nombre: "David"
// }
// */
