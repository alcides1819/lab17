function mostrarMensaje(){
    alert("Hola Bienvenidos....");
}
// Validación de formulario
function validarFormulario(){
 let nombre = document.getElementById('nombre').value;
 let email = document.getElementById('email').value;
 if (nombre === '' || email === '') {
 alert('Por favor, completa todos los campos.');
 event.preventDefault();
 } else {
 alert('¡Formulario enviado correctamente!');
 }
}
