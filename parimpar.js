function parimpar(numero){
    return  (isNaN(parseInt(numero)))
    ?"tienes q introducir un número"
    :(parseInt(numero)%2===0)
    ?`El numero ${numero}es par`
    :`El número ${numero}es Impar`;
} 
//ahora hago la funcion flecha y un ternario
const paresimpares=(numero)=>{
    return isNaN(parseInt(numero))?"Debes introducir un número"
    :parseInt(numero)%2===0?"Espar"
    :"EsIMPAR"
}
console.log(parimpar(5));
console.log(paresimpares(5));