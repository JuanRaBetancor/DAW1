$(document).ready(function() {
    $("#register").click(function() {
        var name = $("#name").val();
        var email = $("#email").val();
        var password = $("#password").val();
        var cpassword = $("#cpassword").val();
        var checky = $("#checky").prop('checked');
        if (name == '' || email == '' || password == '' || cpassword == '') {
            alert("Por favor, rellene todos los campos!!!!!!");
        } else if ((password.length) < 8) {
            alert("La contraseña debe de tener al menos 8 caracteres!!!!!!");
        } else if (!(password).match(cpassword)) {
            alert("No coinciden las contraseñas. Inténtelo de nuevo");
        } else if (!checky) {
            alert("Tiene que aceptar los terminos de uso");
        } else {
            alert("Se ha creado la cuenta correctamente");
        }
    });

    $("#login").click(function() {
        var name = $("#name").val();
        var password = $("#password").val();
        if (name == '' || password == '') {
            alert("Por favor, rellene todos los campos!!!!!!");
        } else if ((password.length) < 8) {
            alert("La contraseña debe de tener al menos 8 caracteres!!!!!!");
        } else if (name == 'pepe' && password == '11111111'){
            alert("Se ha iniciado sesión correctamente");
        } else {
            alert("Error al iniciar sesión. Inténtelo de nuevo");
        }
    });

    $("#recuperar").click(function() {
        var email = $("#email").val();
        if (email == '') {
            alert("Por favor, rellene todos los campos!!!!!!");
        } else if (email == 'pepe@gmail.com') {
            alert("Se ha enviado un correo para restablecer la cuenta!!!!!!");
        } else {
            alert("La cuenta no existe. Inténtelo de nuevo");
        }
    });
});