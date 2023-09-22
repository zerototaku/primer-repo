/**Perfil del usuario
Escriba un programa que solicite al usuario sus datos: 
nombre de usuario, edad y una lista de sus películas favoritas.
Almacene la información y luego muéstrela en la consola.  
Tenga en cuenta que el resultado de las películas debe 
agregar un pequeño mensaje como: 
'La película {película} es una de mis favoritas'. */

function hobbies(n,e,lista){
    console.log(`tu nombre es... ${n}`);
    console.log(`tu edad es ${e}`);
    console.log(`tus peliculas favoritas son${lista}`);
}

//hobbies("ricardo",31,"zelda,dxd")

/**
 * numero mas alto
 Escribe un programa que solicite 10 números.  
 Usando operadores lógicos y cualquier otra función/estructura de JavaScript que haya visto antes
 , determine y genere el mayor de esos números.
 */
 let max =0;
 
function compara(alto){
    for(let i = 0;i <= alto.length;i++){
        if (alto[i]>max){
            max = alto[i];
           
        }
    }console.log(`${max}`);
}

compara([12,34,54,98,109,3])

/**
 * Alarma

Escribe un programa que pregunte a un usuario la cantidad de segundos
necesarios hasta que se ejecute una alarma (mensaje) 
junto con un texto para mostrar una vez que hayan
pasado esos segundos en tiempo real.
 */

   function getUser() {
    console.log(`es tiempo`);
}
setTimeout(getUser,3000);


function invertirCadena(cad) {
    let nuevaCadena = "";
    for (let i = cad.length - 1; i >= 0; i--) {
        nuevaCadena += cad[i];
        if(cad==nuevaCadena){
            console.log( "es palindromo");
        }else console.log("no es palindromo" );
        break;
        }
   
}
invertirCadena('ana');


/**Factorial

 Escriba un programa que solicite un número entero n.  
 Donde 1 <= n.  
 Resuelve esto usando recursividad.
 * 
 */
