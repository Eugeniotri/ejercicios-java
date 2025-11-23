/*function siesPar(numero){
    return(
    (Number.isNaN(Number(numero))|| numero===(undefined)|| numero===null)?"debes introducir un número":
    (numero%2===0)?`El número${numero}es par`:
    "Es impar");
    
}
let numero=5;
console.log(siesPar(numero));*/
//otra forma de funcion
let numero=5;
const esPar=(numero)=>{
    return((numero%2===0)?"Espar":"EsImpar");
}
console.log(esPar(numero));