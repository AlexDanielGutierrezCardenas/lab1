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



// let nuevo = {nombre,edad} =personas;
// let datos = (nuevo)=>{
//     console.log(personas);
//     console.log(index);
//     // personas.forEach(element => {
//     //     console.log(element);
//     // });
// }

// console.log(datos)

// personas.forEach(element => {
//     console.log(element);
// });

// // console.log("hola mundo")

// for (let i=0;i<10;i++){
//     console.log(`el numero al que inserto es de: ${i}`);
// }

// let array = ['first', 'second', , 'fourth']

// array.forEach(function(element) {

// })
// console.log(nuevo);

// if (array[2] === undefined) {
//   console.log('array[2] is undefined')  // true
// }

// array = ['first', 'second', undefined, 'fourth']

// array.forEach(function(element) {
//   console.log(element)
// })

const arrayPaises = ["Bolivia", "Ecuador", "Francia", "Brasil", "Holanda"];
const arrayPrimos = [2, 3, 5, 7, 11, 13];
const arrayPersona = [
  {
    nombre: "Carlos",
    edad: 23,
  },
  {
    nombre: "Susana",
    edad: 13,
  },
  {
    nombre: "Pedro",
    edad: 12,
  },
];

// const recorreArray = (arr) => {
//   for (let i = 0; i <= arr.length - 1; i++) {
//     console.log(arr[i]);
//   }
// };

// recorreArray(arrayPaises);
// recorreArray(arrayPrimos);
// recorreArray(arrayPersona);
// console.log("===========");

// const personas = [
//   { nombre: "Juan", edad: 30 },
//   { nombre: "Ana", edad: 25 },
//   { nombre: "Pedro", edad: 27 },
//   { nombre: "Maria", edad: 22 },
// ];

// const recorrerArray = (arr) => {
//   let edadMenor = 100;
//   for (let i = 0; i <= arr.length - 1; i++) {
//     if (arr[i].edad <= edadMenor) {
//       edadMenor = arr[i].edad;
//     }
//   }
 
//   let approve = arr.find((student) => student.edad === edadMenor);
//   console.log(approve);
// };
// recorrerArray(personas);


// console.log(edadMenor);
// let approved = arr.filter((student) => student.edad === edadMenor);
// console.log(approved);
//con while
// const recorreArray = arr => {
//     let i = 0;
//     while(i<=arr.length-1){
//       console.log(arr[i])
//       i++;
//     }

//   }

// recorreArray(arrayPaises);
// recorreArray(arrayPrimos);
// recorreArray(arrayPersona);
//con do while
// const recorreArray = arr => {
//     let i = 0;
//     do{
//       console.log(arr[i])
//       i++;
//     }while(i<=arr.length-1);

// }
// con map
// const recorreArray = (arr) => arr.map(item => item);

// console.log(recorreArray(arrayPaises));
// console.log(recorreArray(arrayPrimos));
// console.log(recorreArray(arrayPersona));

//con forEach
// const recorreArray = arr => arr.forEach(item => {
//     console.log(item);
// });

// recorreArray(arrayPaises);
// recorreArray(arrayPrimos);
// recorreArray(arrayPersona);

//con for of
// const recorreArray = arr => {
//     for (item of arr){
//       console.log(item);
//     }
// }

// recorreArray(arrayPaises);
// recorreArray(arrayPrimos);
// recorreArray(arrayPersona);

// console.log("===========");
// var arr1 = [];
// var arr2 = [];
// let a={};
// const contar = (x) => {
//   let cont = 0;
//   for (let i = 0; i < texto.length; i++) {
//     if (texto.charAt(i) === x) {
//       cont++;
//       arr2.push(cont);
//     }
//   }
//   if(cont<=2){
//     // console.log(x, " ", cont);
//     arr1.push({x,cont})
//   }
//   // arr1.push({x: cont});
// };
// const texto = "Hola, mundo!";
// console.log(texto.length);
// for (let i = 0; i < texto.length; i++) {
//   contar(texto.charAt(i));
//   arr1.push(texto.charAt(i));
// }
// console.log(arr1)

// const texto = "Hola, mundo!";

// const resultado = (obtenerFrecuenciaLetra = (palabra) => {
//   const caracteres = palabra.split("");
//   const counts = {};
//   caracteres.forEach((caracter) => {
//     if (counts[caracter]) {
//       counts[caracter]++;
//     } else {
//       counts[caracter] = 1;
//     }
//   });
//   return counts;
// });

// console.log(resultado(texto));
