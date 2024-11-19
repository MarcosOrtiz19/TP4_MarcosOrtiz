// Función para multiplicar
function multiplicar() {
    let num1 = prompt("Ingresa el primer número para multiplicar:");
    let num2 = prompt("Ingresa el segundo número para multiplicar:");
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
    
    if (!isNaN(num1) && !isNaN(num2)) {
        alert("El resultado de la multiplicación es: " + (num1 * num2));
    } else {
        alert("Por favor ingresa números válidos.");
    }
}

// Función para calcular el exponente
function exponente() {
    let base = prompt("Ingresa la base:");
    let exponente = prompt("Ingresa el exponente:");
    base = parseFloat(base);
    exponente = parseFloat(exponente);
    
    if (!isNaN(base) && !isNaN(exponente)) {
        alert("El resultado de " + base + " elevado a la potencia " + exponente + " es: " + Math.pow(base, exponente));
    } else {
        alert("Por favor ingresa números válidos.");
    }
}

// Función para restar
function restar() {
    let num1 = prompt("Ingresa el primer número para restar:");
    let num2 = prompt("Ingresa el segundo número para restar:");
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
    
    if (!isNaN(num1) && !isNaN(num2)) {
        alert("El resultado de la resta es: " + (num1 - num2));
    } else {
        alert("Por favor ingresa números válidos.");
    }
}

// Función para dividir
function dividir() {
    let num1 = prompt("Ingresa el primer número para dividir:");
    let num2 = prompt("Ingresa el segundo número para dividir:");
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
    
    if (!isNaN(num1) && !isNaN(num2)) {
        if (num2 === 0) {
            alert("No se puede dividir por cero.");
        } else {
            alert("El resultado de la división es: " + (num1 / num2));
        }
    } else {
        alert("Por favor ingresa números válidos.");
    }
}
