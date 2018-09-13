$('#myModal').on('shown.bs.modal', function () {
    $('#myInput').trigger('focus')
})


const pressed = [];
const secretCode = 'meow'
const audio = audio.play('http://dev.interactive-creation-works.net/1/1.ogg');
window.addEventListener('keyup', (e) => {
    console.log(e.key);
    pressed.push(e.key);
    pressed.splice(-secretCode.length - 1, pressed.length - secretCode.length);

    if (pressed.join('').includes(secretCode)) {
        console.log('Ding Ding!');
        audio.play();
    }
    console.log(pressed);
});