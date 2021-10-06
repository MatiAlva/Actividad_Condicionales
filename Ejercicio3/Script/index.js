// Crear una funcion que permita ingresar usuario y contraseña, Si la contraseña es
// correcta indicarle que puede ingresar al sitio, sino decirle que no puede ingresar

function LoginUSusario() {
    let nombreTipeo = prompt("Ingrese Su nombre de usuario");
    let ClaveTipeo = prompt("Ingrese su clave")

    let nombreOriginal = "Pepito"
    let ClaveOriginal = 123 

    if (nombreTipeo == "pepito" && ClaveTipeo==123){
        alert("Puede ingresar al sitio")
    }else{
        alert("No puede ingresar")
    }
}
console.log(LoginUSusario());