var myAudio=document.getElementById("sound");

document.getElementById('play').onclick = function() {
    play();
}

function play() {
    myAudio.play();
}
