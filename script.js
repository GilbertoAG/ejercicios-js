// Escribir una funcion que regrese la cantidad de valores true que hay en un array
/*
countTrue([true, false, false, true, false]) ➞ 2
countTrue([false, false, false, false]) ➞ 0
countTrue([]) ➞ 0
 */
// Regresar 0 si el array es vacio
// usar recursion

console.log ("Reto 1");
function countTrue (array){
    if(array.length === 0) {
        return 0;
    } else if (array[0]) {
        return 1 + countTrue(array.slice(1));
    } else {
        return countTrue(array.slice(1));
    }
}


//comprobacion
console.log(countTrue([true, false, false, true, false])); //2
console.log(countTrue([false, false, false, false])); // 0
console.log(countTrue([])); //0


// Escribir una funcion para encontrar el mayor comun divisor de 2 numeros positivos enteros
// Usar recursion

console.log("Reto 2");
function mayorCD (a, b){
    if(b == 0){
        return a;
    }else {
        return mayorCD(b, a % b);
    }
}

//Comprobacion
console.log(mayorCD(4, 6));
console.log(mayorCD(20, 15));
console.log(mayorCD(1, 33));


// Encontrar los primeros n elementos de la serie fibonacci
// Usar recursion

// WIP no he logrado que me salga
// console.log("Reto 3");
// function fibonacci(n){
//     if(n <= 0){
//         return 0;
//     }else if(n == 1){
//         return 1;
//     }else{
//         return fibonacci(n - 1) + fibonacci(n - 2);
//     }
// }

// //Comprobacion
// console.log(fibonacci(0));
// console.log(fibonacci(1));
// console.log(fibonacci(1));
// console.log(fibonacci(2));
// console.log(fibonacci(3));



// Encontrar el numero n de una figura piramidal triangular (tetrahedron)
// (nivel) -> cantidad de numeritos

console.log("reto 4");

function tetrahedron(n){
    if(n == 1){
        return 1;
    }else{
        return n + tetrahedron(n-1);
    }
}
//Comprobacion
console.log(tetrahedron(10));
console.log(tetrahedron(20));
console.log(tetrahedron(30));

// Crear una funcion que tome el nombre de un pais y su area
// (nombre, a)
// Debe regresar la proporcion del area del pais en acorde a el area de tierra en el planeta
//('Russia', 17098242) -> Russia is 11.48%
// ("USA", 9372610) -> "USA is 6.29
console.log("Reto 5");
function aPais (nombre, a){
    var proporcion = (a / 148940000) * 100;
    return nombre + " is " + proporcion.toFixed(2) + "%";
}

//Comprobacion
console.log(aPais('Russia', 17098242)); //Russia is 11.48%
console.log(aPais("USA", 9372610)); //USA is 6.29

// Escribir una funcion que retorne 0 si el input es 1 y 1 si el input es 0
// No se pueden utilizar condicionales, ternarios, negaciones ni operatores bit
console.log("Reto 6");
function cambio(input){
    return Math.abs(input- 1);
}

//Comprobacion
console.log(cambio(0));
console.log(cambio(1));

// Messenger bzzz
// (0 ) n
// Si no hay nadie -> "No hay nadie en linea"
// Si hay 1 persona -> "user1 esta en linea"
// Si hay 2 personas -> "user1 y user2 estan en linea"
// Si hay n>2 personas, "user1 y n-1 mas estan en linea"

 console.log("Reto 7");

function bzzz(n){
    if(n == 0){
        return "No hay nadie en linea";
    }else if (n == 1){
        return users[0] + " esta en linea";
    }else if (n == 2){
        return users[0] + " y " + users [1] + " estan en linea";
    }else {
        return users[0] + " y " + (n-1) + " mas estan en linea";
    }
}
//Comprobacion
const users = ["user1", "user2"];
console.log(bzzz(0));
console.log(bzzz(1));
console.log(bzzz(2));
console.log(bzzz(7)); 



///////////////////////// Arrays

// Encontrar el nombre de una sociedad secreta segun los datos de los nombres para cada integrante
// secretName(["Felipe", "Fer", "Zabdiel"]) -> FFZ
// secretName(['Phoebe', 'Ross', 'Chandler', 'Joey', 'Monica', 'Rachel']) -> CJMPRR
// secretName(['Harry', 'Ron', 'Hermione']) -> HHR

console.log("Reto 8");
function secretName(array) {
    let nombre = '';
    for (let i = 0; i < array.length; i++){
        nombre += array[i][0]; //cuando se utiliza el operador + para concatenar strings, JS ordena las letras alfabeticamente por defecto.
        // nombre.push(array[i][0]); //De igual forma en caso de querer regresar los elementos en el orden original existe el metodo push y el metodo join para unirlos.
    }
    return nombre;
    // return nombre.join('')

}
//Comprobacion
console.log(secretName(["Felipe", "Fer", "Zabdiel"])); //-> FFZ
console.log(secretName(['Phoebe', 'Ross', 'Chandler', 'Joey', 'Monica', 'Rachel']));//-> CJMPRR
console.log(secretName(['Harry', 'Ron', 'Hermione'])); //-> HHR


// onlineStatus(['mockIng99', 'J0eyPunch', 'glassedFer']) -> 'mockIng99, J0eyPunch and one 1 more online'

console.log("Reto 9");
function onlineStatus (array) {
    let online = '';
    for (let i = 0; i < array.length; i++){
        if (i === array.length - 1){
            online += 'and one 1 more online';
        } else {
            online += array[i] + ', ';
        }
    }
    return online;
}

//Comprobacion
console.log(onlineStatus(['mockIng99', 'J0eyPunch', 'glassedFer'])); //-> 'mockIng99, J0eyPunch and one 1 more online'

// Crear una funcion que tome 2 parametros, (numero, longitud) y regrse un array de longitud cantidad de numeros multiplos del numero por parametro
// arrayMultiplos(2, 10) -> [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]
// arrayMultiplos(17, 6) -> [17, 34, 51, 68, 85, 102]

console.log("Reto 10");

function arrayMultiplos (numero, longitud){
    let arrayN = [];
    for (let i = 0; i < longitud; i++){
        arrayN[i]=numero*(i+1);
    }

    return arrayN;

}

//Comprobacion
console.log(arrayMultiplos(2, 10)) //-> [2, 4, 6, 8, 10, 12, 14, 16, 18, 20])
console.log(arrayMultiplos(17, 6)) //-> [17, 34, 51, 68, 85, 102])

// Escrbir una funcion que descubra si el array es dominante positivo
// Un array es positivo dominante cuando la mayoria de sus elementos son positivos -> [1, -2, 55, 10]
// positiveDom([-1, -3, -5, 4, 6767]) -> false

console.log("Reto 11")
function positiveDom(array){
    let count = 0; 
    for (let i = 0; i < array.length; i++){ //se cuenta la cantidad de elementos que sean positivos para luego realizar una comparacion entre la cantidad vs la mitad del tamano del arreglo
        if (array [i] > 0)
        count++;
    }

    return count > array.length /2; 
}

//Comprobacion
console.log(positiveDom([1, -2, 55, 10])) //-> True
console.log(positiveDom([-1, -3, -5, 4, 6767])) //-> false

// Promedio antipode
// Dado un array, devolver un array de menor longitud de acuerdo a los siguentes pasos:
// - Dividir el array en 2 partes iguales*. Si no son iguales, eliminar el elemento en medio para obtener 2 arrays iguales
// - Sumar cada numero de la primera parte con los numeros inversos de la segunda parte
// [1,2,3] [5,22,6] -> 1 + 6, 2 + 22, 3 + 5 -> [7, 24, 8]
// - Dividir cada numero del array final entre 2  -> [3.5, 12, 4]

console.log("Reto 12")
function antipode(arr) {
    // Paso 1: dividir el array en dos partes iguales (o eliminar el elemento medio)
    const halfLength = Math.floor(arr.length / 2);
    if (arr.length % 2 !== 0) {
      arr.splice(halfLength, 1);
    }
    const arr1 = arr.slice(0, halfLength);
    const arr2 = arr.slice(halfLength);
  
    // Paso 2: sumar cada número de la primera parte con los números inversos de la segunda parte
    const arr3 = [];
    for (let i = 0; i < arr1.length; i++) {
      arr3.push(arr1[i] + arr2[arr2.length - i - 1]);
    }
  
    // Paso 3: dividir cada número del array final entre 2
    for (let i = 0; i < arr3.length; i++) {
      arr3[i] /= 2;
    }
    return arr3;
  }

//Comprobacion
console.log(antipode([1,2,3,5,22,6]))