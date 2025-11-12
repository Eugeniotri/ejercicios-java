let nota =8;
let resultado = (nota>10||nota<0)?`Incorrecta`
:(nota<=10 && nota>=9)?`sobresaliente`
:(nota<9 && nota>=7)?`Notable`
:(nota<7 && nota>=5)?"Aprobado"
:`suspenso`;

console.log(`el resultado del examen es ${resultado}`);
