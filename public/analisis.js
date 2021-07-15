const salariosCol = colombia.map((person) => person.salary);

// Helpers or utils
const esPar = (numero) => {
    return numero % 2 === 0;
}

const calcularPromedio = (lista) => {
    const sumaLista = lista.reduce((valorAcumulado = 0, nuevoElemento) => {
        return valorAcumulado + nuevoElemento;
    })

    return promedio = sumaLista / lista.length
}

const calcularMediana = (lista) => {
    console.debug();
    const mitad = parseInt(lista.length / 2);

    if (esPar(lista.length)) {
        const personMitad1 = lista[mitad - 1];
        const personMitad2 = lista[mitad];

        mediana = calcularPromedio([personMitad1, personMitad2]);

        return mediana;

    } else {
        const personMitad = lista[mitad];
        return personMitad;
    }
}

const medianaGeneral = calcularMediana(salariosCol);

// Mediana del top 10%
const splicesStart = (salariosCol.length * 90) / 100;
const spliceCount = salariosCol.length - splicesStart;

const salariosColTop10 = salariosCol.splice(splicesStart, spliceCount);

const medianaTop10 = calcularMediana(salariosColTop10);

console.log({
    medianaGeneral,
    medianaTop10,
});