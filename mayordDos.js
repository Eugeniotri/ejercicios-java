//pide dos números y decir cual es mayor o si son iguales es para hacerlo en consola de navegador por el prompt
let num1=parseFloat(prompt("Introduce el primer número"));
let num2=parseFloat(prompt("Introduce segundo número"));

if (isNaN(num1)||isNaN(num2)){
    console.log("Introduce números validos");
}else if(num1>num2){
    console.log(`El número mayor es ${num1}`);
}else if(num2>num1){
    console.log(`El número mayor es ${num2}.`);
}else{
    console.log("son iguales");
}