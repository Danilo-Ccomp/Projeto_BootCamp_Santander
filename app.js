let sortedNumbers = [];
let maxNumber = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibiTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate: 1.2});
}

function exibirMensagemInicial(){
    exibiTextoNaTela('h1', 'Jogo do Número Secreto');
    exibiTextoNaTela('p', 'Escolha um número entre 1 e 10!');
}

function verificarChute(){
    let chute = document.querySelector('input').value;

    if(chute == numeroSecreto){
        exibiTextoNaTela('h1', 'Parabéns! Você acertou o número secreto!');
        let palavraTentativa = tentativas == 1 ? 'tentativa' : 'tentativas';
        let mensagem = 'Você acertou o número secreto em ' + tentativas + ' ' + palavraTentativa + '!';
        exibiTextoNaTela('p', mensagem);

        document.getElementById('reiniciar').disabled = false;

    } else if(chute < numeroSecreto){
        exibiTextoNaTela('p', 'O número secreto é maior!');
    }
    else exibiTextoNaTela('p', 'O número secreto é menor!');
    tentativas++;
    limparCampo();
}


function gerarNumeroAleatorio(){
    let numeroEscolhido = parseInt(Math.random() * maxNumber) + 1;
    let quantidadeElementos = sortedNumbers.length;
    if(quantidadeElementos >= maxNumber){
        sortedNumbers = [];
    }
    if(sortedNumbers.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
    }else{
        sortedNumbers.push(numeroEscolhido);
        return numeroEscolhido;
    }
}

function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
    chute.focus();
}

function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').disabled = true;
    limparCampo();
}

exibirMensagemInicial();

