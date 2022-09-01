function carregar() {
    let msg = document.getElementById('msg');
    let img = document.getElementById('imagem');
    let data = new Date();
    let minuto = data.getMinutes();
    let hora = data.getHours();
    msg.innerText = 'Agora são ' + hora + ':' + minuto + ' minutos.';
    if (hora >= 0 && hora < 12) {
        img.src = 'foto_manha.png'
        document.body.style.backgroundColor = '#FFB238';
    }
    else if (hora >= 12 && hora < 18) {
        img.src = 'foto_tarde.png'
        document.body.style.backgroundColor = '#BF4937';
    }
    else {
        img.src = 'foto_noite.png'
        document.body.style.backgroundColor = '#0E0A1F';
    }
}

