var MeuArray = [1,3,5,10]

function SomaArray(arg){
    let soma = 0;

    for (let i = 0; i < MeuArray.length; i++){
        soma += MeuArray[i];
    }
    return soma;
}
console.log(SomaArray())

