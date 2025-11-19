let edad =35;
if (isNaN(edad) || (edad<0)){
    console.log("Edad no válida");
}else if(edad<18){
    console.log("Menor de edad");
}else if(edad=>18){
    console.log("Mayor de edad");
}else{
    console.log("Jubileta");
}