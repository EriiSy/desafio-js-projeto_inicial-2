/* Pergunte ao usuário qual é o dia da semana. 
Se a resposta for "Sábado" ou "Domingo", mostre "Bom fim de semana!". 
Caso contrário, mostre "Boa semana!". */


let diaDigitado = prompt ('Hoje é que dia da Semana?'); 

if (diaDigitado === 'Sábado' || diaDigitado === 'Domingo') {
    console.log(diaDigitado);
    alert("Bom fim de Semana!");
} else {
    console.log(diaDigitado);
    alert('Boa semana!');
}

//Verifique se um número digitado pelo usuário é positivo ou negativo. 
// Mostre um alerta informando. Crie um sistema de pontuação para um jogo. 

let number = prompt('Digite um número');
console.log(number);

if (number == 0){
    var valor = 'neutro';
}
if (number> 0){
    var valor = 'positivo';
}else{
    var valor = 'negativo';
}
if (number == 0){
    var valor = 'neutro';
}
 alert(`O número ${number} é ${valor}`);


 /*Se a pontuação for maior ou igual a 100, mostre "Parabéns, você venceu!". 
Caso contrário, mostre "Tente novamente para ganhar.".*/

let points = prompt('Chute um número');

if (points >= 100){ 
    alert('Parabéns, você venceu!');
}else{
    alert('Tente novamente para ganhar.'); 
}


/* Crie uma mensagem que informa o usuário sobre o saldo da conta, 
usando uma template string para incluir o valor do saldo.*/
let saldo = 1000
alert(`Seu saldo é ${saldo}`); 


/* Peça ao usuário para inserir seu nome usando prompt. 
Em seguida, mostre um alerta de boas-vindas usando esse nome.*/

let nome = prompt('Digite seu nome');
alert(`Bem vindo ${nome}!`);
