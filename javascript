    //deleta elemento
    function deletacircle(element){
        element.style.display = "none";
    }

    //função para criar novo circulo de cor aleatoria, criando novo elemento com a classe definida e definindo a funcao onclick
    function criacircle(){
        var novo = document.createElement('div')
        novo.className = 'circle'
        var x = Math.floor(Math.random() * 256);
        var y = Math.floor(Math.random() * 256);
        var z = Math.floor(Math.random() * 256);
        var bgColor = "rgb(" + x + "," + y + "," + z + ")";
        //console.log(bgColor);
        novo.style.backgroundColor = bgColor
        document.body.appendChild(novo)
        novo.onclick = function() {return deletacircle(novo)}
    }

    //botao para criar novos circulos
    var botao = document.createElement('button');
    botao.textContent = 'Criar mais um circulo';
    botao.onclick = criacircle;
    document.body.appendChild(botao);

    //Inicia site com um círculo
    criacircle()
