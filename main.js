
let decision = null;
let historial = [];


function validarNum(num) {
    let numero = parseFloat(num);
    return !isNaN(numero) ? numero : null;
}


function suma(a, b) {
    return a + b;
}


function resta(a, b) {
    return a - b;
}


function multiplicacion(a, b) {
    return a * b;
}


function division(a, b) {
    if (b === 0) {
        alert("No se puede dividir entre cero!!");
        return null;
    }
    return a / b;
}


function agregarAlHistorial(tipo, num1, num2, result) {
    let operacion = {
        tipo: tipo,
        num1: num1,
        num2: num2,
        result: result
    };
    historial.push(operacion);
}


do {
    decision = parseInt(prompt("Que desea realizar a continuación: \n ---------------------------------- \n 1- Suma \n 2- Resta \n 3- Multiplición \n 4- División \n 0- Salir \n ---------------------------------- \n El historial de las operaciones realizadas queda en la consola al finalizar la calculadora (seleccionar '0')"));
    
    let num1, num2, result;

    switch (decision) {
        case 1:
            num1 = validarNum(prompt("Primer número a sumar:"));
            num2 = validarNum(prompt("Segundo número a sumar:"));
            if (num1 !== null && num2 !== null) {
                result = suma(num1, num2);
                alert("El resultado de la suma es: " + result);
                agregarAlHistorial("Suma", num1, num2, result);
            } else {
                alert("Uno de los valores no es válido!");
            }
            break;
        case 2:
            num1 = validarNum(prompt("Primer número a restar:"));
            num2 = validarNum(prompt("Segundo número a restar:"));
            if (num1 !== null && num2 !== null) {
                result = resta(num1, num2);
                alert("El resultado de la resta es: " + result);
                agregarAlHistorial("Resta", num1, num2, result);
            } else {
                alert("Uno de los valores no es válido!");
            }
            break;
        case 3:
            num1 = validarNum(prompt("Primer número a multiplicar:"));
            num2 = validarNum(prompt("Segundo número a multiplicar:"));
            if (num1 !== null && num2 !== null) {
                result = multiplicacion(num1, num2);
                alert("El resultado de la multiplicación es: " + result);
                agregarAlHistorial("Multiplicación", num1, num2, result);
            } else {
                alert("Uno de los valores no es válido!");
            }
            break;
        case 4:
            num1 = validarNum(prompt("Primer número a dividir:"));
            num2 = validarNum(prompt("Segundo número a dividir:"));
            if (num1 !== null && num2 !== null) {
                result = division(num1, num2);
                if (result !== null) {
                    alert("El resultado de la división es: " + result);
                    agregarAlHistorial("División", num1, num2, result);
                }
            } else {
                alert("Uno de los valores no es válido!");
            }
            break;
        case 0:
            alert("Hasta Luego!!");
            console.log("Historial de operaciones:");
            historial.forEach((operacion, index) => {
                console.log(`OpN°${index + 1}- ${operacion.tipo} de ${operacion.num1} y ${operacion.num2} = ${operacion.result}`);
            });
            break;
        default:
            alert("Seleccione una opción válida");
            break;
    }
} while (decision !== 0);
