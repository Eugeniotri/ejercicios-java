function filtra(arr){
    return arr.filter(num=>num%2===0);
}
console.log(filtra([1,5,2,8,]));

function busca(arr){
    return arr.find(num=>num<0);
}
console.log(busca([-2,5,-3,4]));