//Arrays

let nombres = ["Fernando", "Leonel", "Singh"];
let edades = [34, 28 ,37, 40, 43];
let valoresDeVerdad = [true, false, false];
let variados = ["Fernando", 24, true, false, [34, 28 ,37, 40, 43]];

//Un dato concreto dentro de un array

//console.log(valoresDeVerdad);

//¿Arrays dentro de arrays?

//console.log(variados[4][1]);

//Metodos para manipular los datos dentro de los arrays

let notas = [3, 5, 8, 10, 9, 7, 8, 8];

//notas.push(1);
//notas.push(2);
//notas.push(4);  

//let elUltimo = notas.pop();

//notas.shift();
//notas.shift();

//notas.unshift(1);

//notas.push(4);
//notas.push(4);

//notas.pop();

let posicionDelOcho = notas.indexOf(8);

if(posicionDelOcho != -1){
    console.log("Lo encontré");
}else{
    console.log("No lo encontré");
}

let resultadoJuntado = notas.join(', ');

let frutas = ['Manzana', 'Pera', 'Frutilla'];

console.log(frutas.includes('banana'));

console.log(resultadoJuntado);

//console.log(posicionDelOcho);
//console.log(elUltimo);
