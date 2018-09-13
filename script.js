$('#myModal').on('shown.bs.modal', function () {
    $('#myInput').trigger('focus')
})


const pressed = [];
const secretCode = 'meow';
const audio = document.getElementById('myAudio');
window.addEventListener('keyup', (e) => {
    console.log(e.key);
    pressed.push(e.key);
    pressed.splice(-secretCode.length - 1, pressed.length - secretCode.length);

    if (pressed.join('').includes(secretCode)) {
        audio.play();
    }
    console.log(pressed);
});