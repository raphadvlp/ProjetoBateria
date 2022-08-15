//REPRESENTA O CORPO DO SITE
document.body.addEventListener('keyup', (event) => {
    //console.log(event.code); //REVIFICA QUAL A TECLA QUE FOI PRECIONADA
    playSound(event.code.toLowerCase()); //PARA DEIXAR TUDO MINUSCULO
});

document.querySelector('.composer button').addEventListener('click', ()=> {
    let song = document.querySelector('#input').value;

    if(song !== '') {
        let songArray = song.split('');
        playComposition(songArray);
    }
});


function playSound(sound) {
    let audioElement = document.querySelector(`#s_${sound}`);
    let keyElement = document.querySelector(`div[data-key="${sound}"]`);

    if(audioElement) {
        audioElement.currentTime = 0; //TIRANDO O DELAY, FAZ COM QUE SEJA POSSÍVEL TOCAR O MESMO SOM ANTES MESMO DE ACABAR.
        audioElement.play();
    }

    if(keyElement) {
        keyElement.classList.add('active');

        setTimeout(()=> {
            keyElement.classList.remove('active');
        }, 300);
    }
}

function playComposition(songArray) {
    let wait = 0;

    for(let sonItem of songArray) {
        setTimeout(()=> {
            playSound(`key${sonItem}`);
        }, wait);
    
        wait += 250;
    }
}