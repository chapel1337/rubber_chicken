// written by chapel1337
// help from mau

let functions = {

    playAudio(audio) {
        audio = new Audio(audio);
        audio.play();
    },

    changeImage(id, image) {
        document.getElementById(id).src = (image);
    },
}

function squeeze() {
    functions.changeImage("rubber_chicken", "media/squeezed_rubber_chicken.png");

    functions.playAudio("media/squeeze.mp3");

    setTimeout(() => functions.changeImage("rubber_chicken", "media/rubber_chicken.png"), 792)
}