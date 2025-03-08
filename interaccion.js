function validarFormulario() {
    console.log('entra');
    
    var nombre = document.getElementById("Nombre").value;
    var email = document.getElementById("Email").value;
    var tema = document.getElementById("Tema").value;
    var mensaje = document.getElementById("Mensaje").value;

    if(nombre==="" || email==="" || tema ==="" || mensaje ===""){
        alert("Todos los campos son obligatorios.")
        return false;
    }
    alert("Formulario enviado correctamente.")
    return true;
    
}