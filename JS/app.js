function calcularEdad(fechaNacimiento) {
    var nacimiento = new Date(fechaNacimiento);
    var ahora = new Date();
    var edad = ahora.getFullYear() - nacimiento.getFullYear();
    var mesActual = ahora.getMonth() + 1;
    var mesNacimiento = nacimiento.getMonth() + 1;
    if (mesActual < mesNacimiento || (mesActual === mesNacimiento && ahora.getDate() < nacimiento.getDate())) {
        edad--;
    }
    return edad;
}

var fechaNacimiento = "1998-05-20";
var edad = calcularEdad(fechaNacimiento);
console.log("La edad es:", edad);
