let numero = -8;
//determina si es positivo o negativo
let signo = (numero >= 0) ? "positivo" : "negativo";
//determina si es par o impar
let tipo = (numero % 2 === 0) ? "par" : "impar";
//mostrar el resultado
console.log(`el numero ${numero} es ${tipo} y ${signo}`);


//Ahora vamos a ver si el numero es mayor , menor o igual a 100
let num = 100;
let resultado = (num > 100) ? "mayor de 100"
    : (num < 100) ? "menor de 100"
        : "igual a 100";
console.log(`El numero ${num} es ${resultado}`);