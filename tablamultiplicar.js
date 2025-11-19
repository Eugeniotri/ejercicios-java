let numTabla=parseInt(prompt("Introduce de q número quieres la tabla de 1 al 10"));
if(isNaN(numTabla)){
    console.log("No has introducido número correcto");
}else if((numTabla>10) || (numTabla<0) ){
    console.log("Escribe un número entre el 0 y el 10");
}else{
    for (let i=0;i<=10;i++){
       console.log(`${numTabla} x ${i} = ${numTabla*i}` );
    }
}