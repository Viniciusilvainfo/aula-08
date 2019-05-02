console.log('audio.js');

const bt1 = document.querySelector('button');
const bt2 = document.querySelector('button:last-of-type');
const audio = document.querySelector('audio');

bt1.addEventListener('click', function (e) {
    audio.src = 'corinthians.mp3';
    audio.play();
});

bt2.addEventListener('click', function (e) {
    audio.src = 'flu.mp3';
    audio.play();
});
