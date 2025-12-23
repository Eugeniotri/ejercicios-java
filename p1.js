console.log("JS ejecutándose en el navegador");
alert("Hola desde el navegador");
console.log("Esto es javascript");
console.log("Estoy aprendiendo js");
let edad =(50);
console.log(edad);
let nombre = ("Eugenio");
console.log(nombre);
nombre="Maria";
console.log(nombre);
let a = 10;
let b =20;
let suma =(a+b);
console.log(a+b);
let texto =("la suma de a+b es: ");
console.log(`${texto} ${suma}`);
let edadUsuario= 18;
edadUsuario=15;
if(edadUsuario>=18){
    console.log("Es mayor de edad");
}else{console.log("Es menor de edad")}
let mensaje=(edadUsuario>=18)?"Es MAYOR de edad":
"Es MENOR de edad";
console.log(mensaje);
function mostrarEdad(edad){
    console.log(`tu edad es de  ${edad} años`);
}
mostrarEdad(18);
function multiplicar(a,b){
    return a*b;
}
let resultado=multiplicar(2,3);
console.log(resultado);
function sumar(resultado, X){
    return resultado+X;
}
let resultado2=sumar(resultado,1);
console.log(resultado2);

let alumno={
    nombre:"Eugenio",
    nota:10,
    mostrarNota:function(){
        console.log("la nota de "+ this.nombre+ " es de "+this.nota)
    }
}
alumno.mostrarNota();
