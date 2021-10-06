// Crear una funcion que permita ingresar numeros e indicar si son pares o impares!
function ParImpar() {
    let numero1= parseInt(prompt("Ingrese un numero"));
    let numero2= parseInt(prompt("Ingrese otro numero"));

    if (isNaN=!(numero1)) {
        alert("La primera variable ingresada no es un numero");
      }if(isNaN=!(numero2)) {
            alert("La segunda variable ingresada no es un numero");
          }else{
            if(numero1%2 == 0){
                alert("El numero"+ " " +numero1+ " " + "es un numero par")
            }if(numero2%2 == 0){
                alert("El numero"+ " "  +numero2+ " " + "es un numero par")
            }else{
                if(numero1%2 != 0){
                    alert("El numero"+ " " +numero1+ " " + " no es un numero par")
                }if(numero2%2 != 0){
                    alert("El numero"+ " " +numero2+ " " + " no es un numero par")
                }
            }
        }
    
}
console.log(ParImpar());

