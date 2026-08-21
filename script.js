const musictoggle = document.getElementById('music-toggle');
const baackgroundMusic = document.getElementById('background-music');
const playIcon = document.getElementById('play-icon');
const pauseIcon = document.getElementById('pause-icon');

let isPlaying = false;

musictoggle.addEventListener('click', () => {
    if (isPlaying) {
        baackgroundMusic.pause();
        isPlaying = false;
        playIcon.classList.remove('music-icon-hidden');
        pauseIcon.classList.add('music-icon-hidden');
        musictoggle.setAttribute('aria-label', 'Turn on Music');
    } else {
        baackgroundMusic.play()
        .then(() => {
            isPlaying = true;
            playIcon.classList.add('music-icon-hidden');
            pauseIcon.classList.remove('music-icon-hidden');
            musictoggle.setAttribute('aria-label', 'Turn off Music');
        })
        .catch((err) => console.error('Playback Failed', err));
    }
});

// our Flying gurll
// Will add this laterr 
const hero = document.querySelector('header.hero');
const kiki = document.querySelector('.kiki-fly');
const nav = document.querySelector('nav');

let mouseX = hero.clientWidth / 2;
let mouseY = hero.clientHeight / 2;
let kikiX = mouseX - 50;
let kikiY = mouseY - 50;

const smoothing  = 0.08;
const sparkleInterval = 80;
let lastSparkleTime = 0;

