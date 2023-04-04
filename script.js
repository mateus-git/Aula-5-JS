// QUANDO MUDA O VALOR DE OPÇÃO, MUDA A MENSAGEM PRINTADA NA TELA
// let opcao = 4
/*
let opcao = parseInt(prompt('Digite uma opção'))

switch(opcao){
    case 1:
        document.write('Primeira Opção')
        break;
    case 2:
        document.write('Segunda Opção')
        break;
    case 3:
        document.write('Terceira opção')
        break;
    default:
        document.write('Nenhuma das opções')
        break;

}
*/

//Laço de repetição com for
for(let i=0; i<=10; i++){ // primeito valor é onde começa, o segundo a condição e o terceiro o incrimento ou decrimento tudo dentro das chaves será executada enquanto for verdadeira
    console.log('agora i vale ' + i );
    
}

// for no carros
let carros = ['gol', 'fusca', 'audi', 'corsa']
for(let i = 0; i < carros.length; i++){
    document.write(carros[i]);
    document.write('<br><br>');
}


