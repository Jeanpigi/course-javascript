// código del cuadrado


const perimetroCuadrado = (lado) => {
    return lado * 4
}

const areaCuadrado = (lado) => {
    return lado * lado
}

const calcularPerimetroCuadrado = () => {
    const inputCuadrado = document.getElementById('InputCuadrado');
    const value = inputCuadrado.value;
    const perimetroValue = perimetroCuadrado(value);

    const perimetro = document.querySelector('.perimetro-cuadrado');
    perimetro.textContent = "El perimetro es: " + perimetroValue + " cm";
}

const calcularAreaCuadrado = () => {
    const inputCuadrado = document.getElementById('InputCuadrado');
    const value = inputCuadrado.value;
    const area = areaCuadrado(value);

    const areaCua = document.querySelector('.area-cuadrado');
    areaCua.innerText = `El área del cuadrado es: ${area} cm2`;
}


// código del triángulo
console.group("Triángulo")
const ladoTriangulo = 6
const baseTriangulo = 4
const alturaTriangulo = 5.5

const perimetroTriangulo = (ladoTriangulo, baseTriangulo) => {
    return ladoTriangulo + ladoTriangulo + baseTriangulo
}

const areaTriangulo = (baseTriangulo, alturaTriangulo) => {
    return (baseTriangulo * alturaTriangulo) / 2
}

let triangulo = perimetroTriangulo(ladoTriangulo, baseTriangulo);

console.log(`El perimetro del triángulo es: ${triangulo} cm2`);

triangulo = areaTriangulo(baseTriangulo, alturaTriangulo);

console.log(`El área del triángulo es: ${triangulo} cm2`);

console.groupEnd()

// código del circulo
console.group("Circulo");
const radioCirculo = 4;
const diametroCirculo = radioCirculo * 2
const pi = Math.PI;

const circunferencia = (diametroCirculo, pi) => {
    return diametroCirculo * pi
}

const areaCirculo = (radioCirculo, pi) => {
    return (radioCirculo * radioCirculo) * pi
}

let circulo = circunferencia(diametroCirculo, pi);

console.log(`La circunferencia de un circulo es: ${circulo} cm`);

circulo = areaCirculo(radioCirculo, pi);

console.log(`El área del circulo es: ${circulo} cm2`);

console.groupEnd();
