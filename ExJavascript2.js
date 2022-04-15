//Criar uma função chamada (ConcatenaPalavras)
//Recebe um array de palavras e retorna uma string com espaços entre elas.

const MeuArray = ['Coloque', 'sua','palavra','aqui', 'ou', 'como', 'argumento', 'da', 'função']

function ConcatenaPalavras(arg){
    
    return arg.join(' ');
}

console.log(ConcatenaPalavras(MeuArray))
//console.log(ConcatenaPalavras([]))
