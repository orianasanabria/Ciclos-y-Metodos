/* 1. Solicitar al usuario un número entre 1 al 100. Luego, se deberá imprimir por consola los números
desde el 0 hasta el número que ingresó el usuario. */

let userNumber = Number(prompt('Please enter a number from 1 to 100 🔥💯'));

for (let i = 0; i <= userNumber; i++) {
    console.log(i);
}

/* 2. Realizarle al usuario la pregunta “¿De qué color es el caballo blanco de Napoleón?”. Si el
usuario responde algo distinto a “blanco”, se le deberá volver a hacer la misma pregunta; de lo
contrario, se le dejará de hacer la pregunta. */

function promptHorse()
{
    let question = prompt('¿De qué color es el caballo blanco de Napoleón? 🐎💫');
    while (question != 'blanco') {
        question = prompt('¿De qué color es el caballo blanco de Napoleón? 🐎💫')
    }
    alert("¡Sí, sí es blanco! 🙀")
}

promptHorse();


/* 3. En este ejercicio deberá calcular el promedio de notas del usuario. Para ésto, la página web le
debe solicitar el promedio de notas de los ramos de Matemáticas, Física y Ciencias. Luego,
debe indicarle por pantalla el promedio de notas (puede hacer uso de la función alert()). El
promedio de notas mostrado debe estar redondeado a un número entero. */

mathScore = Number(prompt('¿Cuál fue tu promedio en Matemáticas? 📊'));
physicsScore = Number(prompt('¿Cuál fue tu promedio en Física? 🚆'));
scienceScore = Number(prompt('¿Cuál fue tu promedio en Ciencias? 🌐'));

scores = [mathScore, physicsScore, scienceScore];

let result = scores.reduce(function(total,num) {
    return total + num;
})

alert(`Tu promedio fue de: ${Math.round(result / scores.length)} 👯‍♀️🌟`);

/* 4. Solicite al usuario escribir el nombre de 3 frutas. Cada fruta que se ingrese se debe ingresar de
manera individual. Cuando ya se hayan ingresado la totalidad de frutas, se deben imprimir todas
por consola, a excepción de la que tenga el nombre de “manzana”. */

let fruit1 = prompt('¡Escribe el nombre de la primera fruta! 🙈');
let fruit2 = prompt('¡Ahora el de la segunda fruta! 🙉');
let fruit3 = prompt('¡Y el de la tercera fruta! 🙊');

let allFruits = [fruit1, fruit2, fruit3];

allFruits.filter(fr => fr != "manzana").forEach(el => console.log(el));

/* 5. Solicite al usuario escribir su nombre. Luego, debe determinar la cantidad de vocales y
consonantes que tiene dicho nombre y mostrarlos por pantalla (utilice alert()). */

let usersName = prompt('¿Cómo te llamas? 👀');

let vowelCount = usersName.match(/[aeiouáéíóú]/gi).length;
let consonantCount = usersName.match(/[bcdfghjklmnpqrstvwxyz]/gi).length;

alert(`${usersName}, tu nombre tiene ${vowelCount} vocales y ${consonantCount} consonantes 🤓🧠`);