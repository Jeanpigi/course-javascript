const lista1 = [
    100,
    200,
    300,
    500,
    600,
]

const calcularPromedio = (lista) => {
    // let sumaLista = 0;
    // for (let i = 0; i < lista.length; i++) {
    //     sumaLista += lista[i];
    // }

    // otra forma de iterar y sumar
    const sumaLista = lista.reduce((valorAcumulado = 0, nuevoElemento) => {
        return valorAcumulado + nuevoElemento;
    })

    return promedio = sumaLista / lista.length
}

// calculo de un promedio ponderado
const notes = [
    {
        course: "Javascript",
        note: 3,
        credit: 2,
    },
    {
        course: "Programación en Go",
        note: 4,
        credit: 4,
    },
    {
        course: "Programación Python",
        note: 5,
        credit: 5,
    },
]

const noteWithCredit = notes.map((note) => note.note * note.credit);

const sumOfNotesWithCredit = noteWithCredit.reduce((acumulador, newValue) => acumulador + newValue);

const credits = notes.map((note) => note.credit);

const sumOfCredits = credits.reduce((sum, newValue) => sum + newValue);

const promedioPonderado = sumOfNotesWithCredit / sumOfCredits;

console.log(promedioPonderado);

// Parte para encontrar la mediana

//Function para comparar un numero como par
const esPar = (numero) => {
    if (numero % 2 === 0) {
        return true
    } else {
        false
    }
}

const CalcularMediana = (lista) => {
    let mediana;
    const mitadLista = parseInt(lista.length / 2);

    if (esPar(lista.length)) {
        const elemento1 = lista[mitadLista - 1];
        const elemento2 = lista[mitadLista];

        mediana = calcularPromedio([elemento1, elemento2]);

        return mediana;

    } else {
        return mediana = lista[mitadLista];
    }
}

console.log(CalcularMediana(lista1));

// calcular la moda
const numbers = [2,2,2,3,123,344,56,7,8,2,3,9,87,50];


const findModa = (lista) => {
    const moda = lista.sort((a, b) => {
        lista.filter(v => v === a).length - lista.filter(v => v === b).length
    }).pop();

    return moda;
}

console.log(findModa(numbers))