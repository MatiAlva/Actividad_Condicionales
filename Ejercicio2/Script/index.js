// Crear una funcion que per"ita ingresar notas del 1 al 10 y devuelva:

// ”Insuficiente” si es entre 1 y 5.
// ”Suficiente” si es 6 ,
// “Bien” si el valor es 7,
// “Notable” si es 8
// ”Sobresaliente” si es entre 9 y10,

function Nota() {
    let numero= parseInt(prompt("Ingrese la nota (del 1 al 10)"));

    if (isNaN=!(numero)) {
        alert("Lo que ingresaste no es un numero");
      }else{
          if(numero >=1 && numero<=5){
                alert("INSUFICIENTE ")
          }
            else{
                if(numero ==6){
                alert("SUFICIENTE")
                }else{
                    if(numero==7){
                        alert("BIEN")
                    }else{
                        if(numero==8){
                            alert("NOTABLE")
                        }else{
                            if(numero >=9 &&  numero<=10){
                                alert("SOBRESALIENTE")
                            }if(numero>10){
                            alert("El numero ingresado no esta en el rango mencionado anteriomente")
                            }
                            }
                    }
                }
            }
        }
}
console.log(Nota());

