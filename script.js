let nombre, apellido, edad

nombre = prompt("Ingrese su nombre:").toLowerCase();
apellido = prompt("Ingrese su apellido").toLowerCase();
edad = parseFloat(prompt("Ingrese su edad:"));


do {
    
    if (isNaN(edad)) {
        alert("Porfavor ingrese su edad con numeros")
    }

    if (nombre === "" ) {
        alert("Porfavoor ingrese su nombre")
    }

    if (apellido === "") {
        alert("Porfavoor ingrese su apellido")
    }

} while((isNaN(edad)) || (nombre === "" || apellido === "" ))

alert (`Hola me presento soy ${nombre} ${apellido} y tengo ${edad} años. Saludos. `)

