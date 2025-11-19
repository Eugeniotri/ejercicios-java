//pide un número y muestra si es par o impar , cuando uso prompt es consola del navegador

let numero=parseInt(prompt("Introduce un número: ",10));
if(isNaN(numero)){console.log("No has introducido uno válido")

}else
    { if(numero%2===0){
    console.log(`El numero ${numero} es par`);
}else{console.log(`el número ${numero} es impar`)}}
