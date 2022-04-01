function carregar() {
    const msg = document.getElementById('msg');
    const foto = document.getElementById('imagem');
    const data = new Date();
    const hora = data.getHours();
    const minutos = data.getMinutes();
    msg.innerHTML = `Agora são ${hora} Horas e ${minutos} minutos`;


    if (hora >= 0 && hora < 12) { //MANHÃ
        foto.src = 'manha.jpg'
        document.body.style.background = '#ccbf2c6b'

    } else if (hora <= 18) { //TARDE
        foto.src= 'tarde.jpg'
        document.body.style.background = '#9778246b'

    } else { //NOITE
        foto.src= 'noite.jpg'
        document.body.style.background = '#1037a16b'
    }
}