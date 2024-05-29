function calcularEdad(fechaNacimiento: string): number {
    const nacimiento = new Date(fechaNacimiento);
    const ahora = new Date();

    let edad = ahora.getFullYear() - nacimiento.getFullYear();
    const mesActual = ahora.getMonth() + 1;
    const mesNacimiento = nacimiento.getMonth() + 1;

    if (mesActual < mesNacimiento || (mesActual === mesNacimiento && ahora.getDate() < nacimiento.getDate())) {
        edad--;
    }

    return edad;
}


const fechaNacimiento = "1998-05-20";
const edad = calcularEdad(fechaNacimiento);
console.log("La edad es:", edad);

