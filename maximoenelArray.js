const numeros=[3,15,7,22,10];
if(numeros.length===0){
    console.log(`El array está vacio`);
}else{
    let maximo=numeros[0];
    for(let i=1;i<numeros.length;i++){
        if(numeros[i]>maximo){
            maximo=numeros[i];
        }
    }console.log(`El máximo es ${maximo}`);
}
