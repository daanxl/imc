const calcular = document.getElementById('calcular'); // cria uma variável cujo o valor é fixo, ou seja, uma constante somente leitura 

function imc(){ /* cria um novo objeto */
    const altura = document.getElementById('altura').value;
    const peso = document.getElementById('peso').value;
    const resultado = document.getElementById('resultado');

    if(altura !== '' && peso !== '') { // é uma estrutura condicional que executa a afirmação, dentro do bloco, se determinada condição for verdadeira
        const valorIMC = (peso / (altura * altura)).toFixed(1);

        let classificacao = ''; // permite que você declare variáveis limitando seu escopo no bloco, instrução, ou em uma expressão na qual ela é usada
        if(valorIMC <18.5){
            classificacao = 'Abaixo do peso';
        } else if (valorIMC <25){ // senão se
            classificacao = 'Peso ideal';
        } else if (valorIMC <30){
            classificacao = 'Sobrepeso';
        } else if (valorIMC <40){
            classificacao = 'Obesidade';
        } else{
            classificacao = 'Obesidade Grave, Cuidado!!';
        }
          


        resultado.textContent = `Seu IMC é ${valorIMC} e sua classificação é:${classificacao}.`;

        /*SE a altura for diferente de em branco e peso
        for difererente de em branco faça
        !== diferente
        == igual
        > maior
        < menor
        '' espaço em branco*/
    }
    else{
        resultado.textContent = `Preencha todos os campos!!`;
    }
}
calcular.addEventListener('click', imc)