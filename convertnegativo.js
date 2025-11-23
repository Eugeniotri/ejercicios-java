function convert(numero){
   return isNaN(Number(numero))?"Introduce un número"
    :(numero)<0? numero
    :numero=(numero*-1);
}
console.log(convert(5));

const convierte=(numero)=>{
    return isNaN(Number(numero))?"introduce un numero"
    :(numero)<0 ? numero
    :(numero*-1);
}
console.log(convierte(2));