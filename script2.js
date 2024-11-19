
// Función que muestra un mensaje de bienvenida, pregunta el nombre y la edad del usuario
function bienvenida2() {
// Preguntar la edad del usuario
    let edad = parseInt(prompt("¿Cuántos años tienes?"));

    // Verificar si la edad es mayor o menor a 20 años
    if (edad > 20) {
        document.getElementById("edadMensaje").innerHTML = "¡Eres mayor de 20 años!";
        // Cambiar imagen si es mayor de 20
        document.getElementById("imagen").src = "mayor.png";  // Reemplaza "mayor.jpg" con la ruta de tu imagen
    } else {
        document.getElementById("edadMensaje").innerHTML = "Eres menor o igual a 20 años.";
        // Cambiar imagen si es menor o igual a 20
        document.getElementById("imagen").src = "mayor.png";  // Reemplaza "menor.jpg" con la ruta de tu imagen
    }
}

// Llamar la función para iniciar el proceso cuando la página cargue
window.onload = bienvenida2;