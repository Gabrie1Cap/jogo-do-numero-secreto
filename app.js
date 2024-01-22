let limiteDeNumeros = 10
let listaDeNumerosSorteados = [];
let numeroSecreto = gerarNumero();
console.log(numeroSecreto)

let numTentativas = 1

//utilizando funções com parâmetros
function exibirTexto(tag , texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
};

    mensagemInicial()

function verificarChute(){
    let chute = document.querySelector('input').value;
        if(chute == numeroSecreto){
            let palavraTentativa = numTentativas > 1? 'tentativas' : 'tentativa';
            let mensagemTentativas = `você acertou com ${numTentativas} ${palavraTentativa}`;


            exibirTexto('h1' , 'Acertou');
            exibirTexto('p', mensagemTentativas);

            novoJogo = document.getElementById('reiniciar').removeAttribute('disabled')

    }else{
            if(chute > numeroSecreto){
                exibirTexto('h1', 'você errou');
                exibirTexto('p' , 'o número secreto é menor');
            }else{
                exibirTexto('h1', 'você errou');
                exibirTexto('p' , 'o número secreto é maior') ;
            }
    }numTentativas++
    limparCampo()
};




function gerarNumero(){
    let elementosSorteados = listaDeNumerosSorteados.length
    let numeroEscolhido = parseInt(Math.random() * limiteDeNumeros + 1);

    if(elementosSorteados == limiteDeNumeros){
        listaDeNumerosSorteados = [];
    }

    if(listaDeNumerosSorteados.includes(numeroEscolhido)){
        return gerarNumero()
    }else{
        listaDeNumerosSorteados.push(numeroEscolhido)
        console.log(listaDeNumerosSorteados)
        return numeroEscolhido;
    }

};

function limparCampo(){
    chute = document.querySelector('input')
    chute.value = ''
}

function reiniciarJogo(){
    numeroSecreto = gerarNumero();
    limparCampo()
    numTentativas = 1
    mensagemInicial()
    document.getElementById('reiniciar').setAttribute('disabled', true)
}

function mensagemInicial(){
    exibirTexto('h1' , 'Jogo do numero secreto');
    exibirTexto('p' , 'Escolha um número entre 1 e 10');
}


/*  EXERCÍCIOS
function olaMundo(){
   console.log('olá mundo!')
}
olaMundo()
function exibirNome(nome){
    console.log(`olá, ${nome}`)
}
exibirNome('mateus')

function dobro(num){
    console.log(num * 2);
}
dobro(3)

function media(num1 , num2 , num3){
    console.log((num1 + num2 + num3)/3);
}
media(5 , 5 , 5)

function maiorNumero(num1 , num2){
    if(num1 > num2){
        console.log(`o número ${num1} é maior que ${num2}`)
    }else{
        console.log(`o número ${num2} é maior que ${num1}`)
    }
}
maiorNumero(13 , 2)

function multiplicacao(numero){
    console.log(numero*numero)
}

multiplicacao(5)
*/
