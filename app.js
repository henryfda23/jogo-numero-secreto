alert('Bem vindo ao jogo número secreto');
let numeroMaximo = 1000
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1); // para pegar um  numero inteiro
console.log (numeroSecreto);
let chute;
let tentativas = 1;

// enquanto nao acertar
while (chute != numeroSecreto){ // diferente
    chute = prompt (`Escolha um número entre 1 e ${numeroMaximo}`);

    if (chute == numeroSecreto) {
    break;
        } else {
         if(chute > numeroSecreto){
            alert(`Número secreto é menor que ${chute}`);

         }  else { 
                alert(`Número secreto é maior que ${chute}`);
        }
        tentativas++; // aumentar tentativas em +1
    }
}

let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa'; // para nao utilizar if e else e deixar o codigo mais extenso
alert(`Parabéns, você acertou o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa} `);