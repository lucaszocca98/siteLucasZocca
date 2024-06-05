function verMais(){
    var maisTexto = document.getElementById('hide-skills');
    var botao = document.getElementById('read-button');
    var buttonContainer = document.getElementById('button-container');

    if(maisTexto.style.display === 'none' || maisTexto.style.display === ''){
        maisTexto.style.display = 'inline';
        botao.innerHTML = 'Ver menos';
        buttonContainer.style.background = 'rgba(255, 255, 255, 0)';
    }
    else{
        maisTexto.style.display = 'none';
        botao.innerHTML = 'Ver mais';
        buttonContainer.style.background = 'linear-gradient(to bottom, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.06))';
    }
}