
let decision = null

do {
    decision = parseInt(prompt("Que desea realizar a continuación: \n ---------------------------------- \n 1- Suma \n 2- Resta \n 3- Multiplición \n 4- División \n 0- Salir \n ---------------------------------- \n El historial de las operaciones realizadas queda en la consola al finalizar la calculadora (seleccionar '0')"));
    
    switch (decision) {
        case 1:
            let suma1 = parseFloat(prompt("Primer número a sumar:"))
            let suma2 = parseFloat(prompt("Segundo número a sumar:"))
            if (!isNaN(suma1) && !isNaN(suma2)) {
                console.log("El resultado de la suma es: " + (suma1+suma2));
                alert("El resultado de la suma es: " + (suma1+suma2));
            } else {
                alert("Uno de los valores no es válido!")
            }
            break;
        case 2:
            let resta1 = parseFloat(prompt("Primer número a restar:"))
            let resta2 = parseFloat(prompt("Segundo número a restar:"))
            if (!isNaN(resta1) && !isNaN(resta2)) {
                console.log("El resultado de la resta es: " + (resta1-resta2));
                alert("El resultado de la resta es: " + (resta1-resta2));
            } else {
                alert("Uno de los valores no es válido!")
            }
            break;
        case 3:
            let mult1 = parseFloat(prompt("Primer número a multipicar:"))
            let mult2 = parseFloat(prompt("Segundo número a multiplicar:"))
            if (!isNaN(mult1) && !isNaN(mult2)) {
                console.log("El resultado de la multiplicación es: " + (mult1*mult2));
                alert("El resultado de la multiplicación es: " + (mult1*mult2));
            } else {
                alert("Uno de los valores no es válido!")
            }
            break;
        case 4:
            let divi1 = parseFloat(prompt("Primer número a dividir:"))
            let divi2 = parseFloat(prompt("Segundo número a dividir:"))
            if (!isNaN(divi1) && !isNaN(divi2)) {
                if (divi2 !== 0) {
                    console.log("El resultado de la división es: " + (divi1/divi2));
                    alert("El resultado de la división es: " + (divi1/divi2));
                } else {
                    alert("No se puede dividir entre cero!!");
                }
            } else {
                alert("Uno de los valores no es válido!")
            }
            break;
        case 0:
            alert("Hasta Luego!!");
            break;
        default:
            alert("Seleccione una opción válida");
            break;
    }
} while (decision !== 0)

