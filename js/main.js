
let usuario = "EliseoSalamone";

let Password = "Pass1234";

let i = 0;

while( i < 3){
    i++;
    let UsuarioIngresado = prompt("Ingrese su nombre de Usuario")
    let PasswordIngresado= prompt("Ingrese su contrasena")

    if (UsuarioIngresado == usuario && PasswordIngresado == Password){
        console.log("Bienvenido " + usuario);
        break;
    }

    else {
        console.log("Usuario incorrecto. Te quedan " + (3 - i) + "intentos");
    }




}
