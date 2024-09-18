document.addEventListener('DOMContentLoaded', function() {
    const audio = document.getElementById('audio2');
    const playBtn = document.getElementById('playBtn');
    const pauseBtn = document.querySelector('.pause-button');

    // Automatically play the audio
    audio.play();

    // Update button visibility
    playBtn.style.display = 'none';
    pauseBtn.style.display = 'inline-block';

    // Play and Pause button functionality
    playBtn.addEventListener('click', function() {
        audio.play();
        playBtn.style.display = 'none';
        pauseBtn.style.display = 'inline-block';
    });

    pauseBtn.addEventListener('click', function() {
        audio.pause();
        playBtn.style.display = 'inline-block';
        pauseBtn.style.display = 'none';
    });
});
