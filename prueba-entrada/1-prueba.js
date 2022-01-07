//que es una variable y para qué sirve?
//Una variable es un elemento de texto cuyo significado es designado. Sirve para almacenar cierta información para su posterior manipulación
//*Cuál es la diferencia entre declarar e inicializar una variable?*//
//Declarar una varaible significaría reservar el espacio en memoria para dicho nombre. Inicializarla significaría asignarle un valor
//*Cuál es la diferencia entre sumar números y concatenar strings?*//
//Son básicamente lo mismo. En la suma de números, se trabaja con estos, números. En la concatenación de strings, se trabaja con strings o números. JS tiene la capacidad de hacer una transformación implícita del valor número cuando sea el caso
//*Cuál operador permite sumar o concatenar?*//
//el operador de suma "+"

//*Determina el nombre y tipo de dato para almacenar en variables la siguiente información:
//*traduce a código la información del ejercicio anterior(variables)*//

// const platziStudent = {
//   Nombre: "Enrique",
//   Apellido: "Palomino",
//   "Nombre de usuario en Platzi": "enrigios",
//   Edad: 24,
//   "Correo electrónico": "octepc.97@gmail.com",
//   "Mayor de edad": true,
//   "Dinero ahorrado": 500,
//   Deudas: 50,
//   fullName: function () {
//     console.log(`The full name is: ${this.Nombre} ${this.Apellido}`);
//   },
//   realMoney: function () {
//     console.log(
//       `The quantity of the money of the student is ${
//         this["Dinero ahorrado"] - this.Deudas
//       }`
//     );
//   },
// };

// platziStudent.fullName();
// platziStudent.realMoney();

//*qué es una función?
// Es un bloque de código cuya función es realizar cierto trabajo especificado
//* cuándo me sirve usar una funci´no en mi código?
// cuando se busca realizar cierta modificación de los datos entrantes a la función
//* cuál es la diferencia entre argumentos y parámetros
// los parámetros se constituyen de una lista de valores encasillada entre paréntesis luego de la declaración de la funcion. Es de caracter opcional. Los argumentos son constituidos por aquellos valores que la función espera para poder correr las instrucciones
//* convertir lo siguiente en una función:

// const user = (name, lastName, nickName) => {
//   console.log(
//     `My name is ${name} ${lastName}, but I prefer being called ${nickName}`
//   );
// };

// user("Enrique", "Palomino", "enrigios");

//*qué es una condicional?
// es un bloque de código que evalua una afirmación determinando si es verdadera o falsa para actuar de cierta manera
//* qué tipos de condicionales existen en JS y cuáles son sus diferencias?
// while, switch and if.
//La condición while correrá hasta que el parámetro a evaluer se vuelve falso. Entonces parará con la ejecución
//La condición switch evaluará distintos statements y hará algo de acuerdo a su veracidad. No es tan flexible, pero su sintaxis es amigable
//La condición if es la más usada. Esta condicional ejecutará cierto comportamiento en la medida que el parámetro dado sea verdadero. Su sintaxis es liosa
//* se pueden combinar funciones y condicionales?
//Si, se pueden combinar
//* replica el siguiente código usando el tipo if

//// switch (tipoDeSuscripcion) {
////   case "Free":
////     console.log("Solo puedes tomar los cursos gratis");
////     break;
////   case "Basic":
////     console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
////     break;
////   case "Expert":
////     console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
////     break;
////   case "ExpertPlus":
////     console.log(
////       "Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año"
////     );
////     break;
// // }

// const tipoDeSuscripcion = "ExpertPlus";

// if (tipoDeSuscripcion === "Free") {
//   console.log("Solo puedes tomar los cursos gratis");
// } else if (tipoDeSuscripcion === "Basic") {
//   console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
// } else if (tipoDeSuscripcion === "Expert") {
//   console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
// } else if (tipoDeSuscripcion === "ExpertPlus") {
//   console.log(
//     "Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año"
//   );
// } else {
//   console.log("Sorry. We don't understand what you mean.");
// }

//* qué es un ciclo?
//un ciclo es la ejecución de ciertos parámetros en la medida que cumplan con cierta condición

//* qué tipo de ciclos existen en JS
// for(let i=0;i<somethign.length;i++), for(user in users), .foreach(()=>{})

//* qué es un infinite loop y por qué es un problema?
// Es un ciclo que nunca termina de ejecutarse pues la condición dada nucna es falsa. Es peligrodo porque dejará a la computadora bugueada gastando recursos hasta el fin del mundo

//* puedo mezclar ciclos y condicionales?
// si, se puede

//* replica el siguiente comportamiento usando el ciclo while
//// for (let i = 0; i < 5; i++) {
////   console.log("El valor de i es: " + i);
//// }

// let i = 2;

// while (i < 5) {
//   console.log("El valor de i es: " + i);
//   i++;
// }

// while (i < 10) {
//   console.log("El valor de i es: " + i);
//   i++;
// }

// const selectedNumber = parseInt(prompt("Cuánto es 2 + 2?"));

// if (selectedNumber === 4) {
//   alert("Felicidades! Eres bueno en mates");
// } else {
//   alert("Lo siento, pero no es la respuesta. Intenta de nuevo");
// }

//*qué es un array?
//*qué es un objeto?
//*cuándo es mejor usar objetos u arrays?
//Los arrays son ideales para listas de objetos. Los objetos son funcionales manejando valores con sus llaves
//*se puede mezclar arrays con objetos y visceversa?
//si

//*crea una función que reciba cualquier array como parámetro e imprima el primer elemento

const array = ["hola", "como", "estas"];
const object = {
  model: "tsunami",
  year: "idk",
  brand: "earth",
};
// const firstElement = (array) => {
//   console.log(array[1]);
// };

// const eachElement = (array) => {
//   for (let i = 0; i < array.length; i++) {
//     console.log(array[i]);
//   }
// };

const eachObject = (object) => {
  Object.entries(object);
};
eachObject(object);
