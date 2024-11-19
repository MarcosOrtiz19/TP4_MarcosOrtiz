// Función para mostrar el mensaje de bienvenida y solicitar el nombre
function bienvenida() {
    // Mostrar un mensaje de bienvenida en la consola
    alert("¡Bienvenido a la página principal!");

    // Pedir al usuario su nombre
    let nombre = prompt("¿Cuál es tu nombre?");

    // Verificar si el usuario ha ingresado un nombre
    if (nombre) {
        // Mostrar el nombre en la página principal
        document.getElementById('bienvenida').innerHTML = `¡Bienvenido, ${nombre}!`;
    } else {
        // Si no se ingresó nombre, mostrar mensaje genérico
        document.getElementById('bienvenida').innerHTML = "¡Bienvenido, visitante!";
    }
}

// Llamar a la función cuando la página se carga
window.onload = bienvenida;

// Añadimos eventos a los botones para realizar acciones
document.addEventListener("DOMContentLoaded", () => {
    const button1 = document.getElementById("button1");
    const button2 = document.getElementById("button2");
    const button3 = document.getElementById("button3");
  
    // Acción del Botón 1
    button1.addEventListener("click", () => {
      alert("¡Has presionado el Botón 1!");
    });
  
    // Acción del Botón 2
    button2.addEventListener("click", () => {
      alert("¡Has presionado el Botón 2!");
    });
  
    // Acción del Botón 3
    button3.addEventListener("click", () => {
      alert("¡Has presionado el Botón 3!");
    });
  });
