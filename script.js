const body = document.body;

function applyTheme() {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        body.classList.add('dark-theme');
        body.classList.remove('light-theme');
    } else {
        body.classList.add('light-theme');
        body.classList.remove('dark-theme');
    }
}

applyTheme();
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', applyTheme);

const menuButton = document.getElementById('menu-button');
const modal = document.getElementById('menu-modal');
const closeModalButton = document.getElementById('close-modal');

menuButton.addEventListener('click', () => {
    modal.style.display = 'block';
});

closeModalButton.addEventListener('click', () => {
    modal.style.display = 'none';
});

window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});

//for featured today

const carousel = document.querySelector('.carousel');
const items = document.querySelectorAll('.carousel-item');
const dots = document.querySelectorAll('.dot');

let currentIndex = 0;

function showSlide(index) {
    items.forEach((item, idx) => {
        item.style.transform = `translateX(-${index * 100}%)`;
        dots[idx].classList.remove('active');
    });
    dots[index].classList.add('active');
}

dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        currentIndex = index;
        showSlide(currentIndex);
    });
});

setInterval(() => {
    currentIndex = (currentIndex + 1) % items.length;
    showSlide(currentIndex);
}, 5000);

//For Trending Section

document.addEventListener('DOMContentLoaded', function() {
    let currentAudio = null;
    let currentPlayButton = null;
    let currentPauseButton = null;

    const playButtons = document.querySelectorAll('.play-btn');
    const pauseButtons = document.querySelectorAll('.pause-btn');

    function playAudio(audioId) {
        const audio = document.getElementById(audioId);
        audio.play();
    }

    function pauseAudio(audioId) {
        const audio = document.getElementById(audioId);
        audio.pause();
    }

    function toggleButtons(playButton, pauseButton) {
        playButton.style.display = 'none';
        pauseButton.style.display = 'inline';
    }

    function resetButtons(playButton, pauseButton) {
        playButton.style.display = 'inline';
        pauseButton.style.display = 'none';
    }

    playButtons.forEach(button => {
        button.addEventListener('click', function() {
            const audioId = button.getAttribute('data-audio');
            const audio = document.getElementById(audioId);
            const pauseButton = document.querySelector(`.pause-btn[data-audio="${audioId}"]`);

            
            if (currentAudio && currentAudio !== audio) {
                pauseAudio(currentAudio.id);
                resetButtons(currentPlayButton, currentPauseButton);
            }

            
            playAudio(audioId);
            toggleButtons(button, pauseButton);

        
            currentAudio = audio;
            currentPlayButton = button;
            currentPauseButton = pauseButton;
        });
    });

    pauseButtons.forEach(button => {
        button.addEventListener('click', function() {
            const audioId = button.getAttribute('data-audio');
            const audio = document.getElementById(audioId);


            pauseAudio(audioId);
            resetButtons(button.previousElementSibling, button);

            currentAudio = null;
            currentPlayButton = null;
            currentPauseButton = null;
        });
    });
});

//for type writer

document.addEventListener('DOMContentLoaded', () => {
    const greetingDiv = document.getElementById('greeting');

    function getGreeting() {
        const now = new Date();
        const hours = now.getHours();

        if (hours < 12) {
            return "Good Morning!";
        } else if (hours < 18) {
            return "Good Afternoon!";
        } else if (hours < 21) {
            return "Good Evening!";
        } else {
            return "Good Night!";
        }
    }

    function typewriterEffect(text, element) {
        let i = 0;
        element.textContent = ''; 

        function type() {
            if (i < text.length) {
                element.textContent += text.charAt(i);
                i++;
                setTimeout(type, 250); 
            }
        }

        setTimeout(type, 100);
    }

    const greeting = getGreeting();
    typewriterEffect(greeting, greetingDiv);
});

//for fade-out greeting

setTimeout(function() {
    var elements = document.getElementsByClassName('Greeting-Text');
    for (var i = 0; i < elements.length; i++) {
        elements[i].classList.add('fade-out');
    }
}, 7000);

// Get play and pause buttons for both audios
const playBtn1 = document.querySelector('.play-button[data-audio="audio1"]'); // First code's play button
const pauseBtn1 = document.querySelector('.pause-button[data-audio="audio1"]'); // First code's pause button
const playBtn2 = document.querySelector('.play-btn[data-audio="audio1"]'); // Second code's play button
const pauseBtn2 = document.querySelector('.pause-btn[data-audio="audio1"]'); // Second code's pause button


const audio1 = document.getElementById('audio1');
const audio2 = document.getElementById('audio2');


function resetAllButtons() {
  playBtn1.style.display = 'inline-block';
  pauseBtn1.style.display = 'none';
  playBtn2.style.display = 'inline-block';
  pauseBtn2.style.display = 'none';
}


playBtn2.addEventListener('click', function() {
 
  audio1.pause();
  audio2.pause();
  
  audio1.play();

  playBtn1.style.display = 'none';
  pauseBtn1.style.display = 'inline-block';
  playBtn2.style.display = 'none';
  pauseBtn2.style.display = 'inline-block';
});


pauseBtn2.addEventListener('click', function() {
  
  audio1.pause();

 
  resetAllButtons();
});

pauseBtn1.addEventListener('click', function() {
  
  audio1.pause();

  resetAllButtons();
});


playBtn1.addEventListener('click', function() {
 
  audio1.pause();
  audio2.pause();
  
  audio1.play();

  playBtn1.style.display = 'none';
  pauseBtn1.style.display = 'inline-block';
  playBtn2.style.display = 'none';
  pauseBtn2.style.display = 'inline-block';
});
