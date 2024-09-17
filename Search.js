const songs = [
  {
      title: "Love Dose",
      artist: "Honey Singh",
      cover: "Honey Singh Song.jpg",
      audio: "Love Dose.mp3", 
  },
  {
      title: "Teri Sari Wish Pura Dunga",
      artist: "Diler Kharakiya",
      cover: "Teri Sari Wish Pura Dunga.jpg",
      audio: "Teri Sari Wish Pura Dunga.mp3",
  },
  {
      title: "BONITA",
      artist: "Honey Singh",
      cover: "Bonita Honey Singh.jpg",
      audio: "BONITA.mp3",
  },
  {
      title: "Moto",
      artist: "Diler Kharakiya",
      cover: "Moto.jpg",
      audio: "Moto.mp3",
  },
  {
      title: "Desi Kalakaar",
      artist: "Honey Singh",
      cover: "cover5.jpg",
      audio: "audio5.mp3",
  },
  {
      title: "Blue Eyes",
      artist: "Honey Singh",
      cover: "cover6.jpg",
      audio: "audio6.mp3",
  },
  {
      title: "Brown Rang",
      artist: "Honey Singh",
      cover: "cover7.jpg",
      audio: "audio7.mp3",
  },
  {
      title: "Dope Shope",
      artist: "Honey Singh",
      cover: "cover8.jpg",
      audio: "audio8.mp3",
  }
];

let currentlyPlayingAudio = null; 

function displaySongs(filteredSongs) {
  const songList = document.getElementById('songList');
  const noResults = document.getElementById('no-results');

  songList.innerHTML = '';

  if (filteredSongs.length > 0) {
      songList.style.display = 'flex'; 
      noResults.style.display = 'none'; 
      filteredSongs.forEach(song => {
          const songItem = document.createElement('div');
          songItem.classList.add('song-item');

          songItem.innerHTML = `
              <img src="${song.cover}" alt="${song.title}" class="song-cover">
              <div class="song-info">
                  <div class="song-title">${song.title}</div>
                  <div class="artist-name">Song by ${song.artist}</div>
              </div>
              <audio class="song-audio" src="${song.audio}"></audio>
              <div class="play-icon">▶</div>
          `;

          songList.appendChild(songItem);

          const playIcon = songItem.querySelector('.play-icon');
          const audio = songItem.querySelector('.song-audio');
 
          playIcon.addEventListener('click', () => {
             
              if (currentlyPlayingAudio && currentlyPlayingAudio !== audio) {
                  currentlyPlayingAudio.pause();
                  currentlyPlayingAudio.currentTime = 0; 
                  const currentlyPlayingIcon = Array.from(document.querySelectorAll('.play-icon'))
                      .find(icon => icon.textContent === '❚❚');
                  if (currentlyPlayingIcon) {
                      currentlyPlayingIcon.textContent = '▶'; 
                  }
              }

              if (audio.paused) {
                  audio.play();
                  playIcon.textContent = '❚❚';
                  currentlyPlayingAudio = audio; 
              } else {
                  audio.pause();
                  playIcon.textContent = '▶'; 
                  currentlyPlayingAudio = null; 
              }
          });
      });
  } else {
      songList.style.display = 'none'; 
      noResults.style.display = 'block';
  }
}

function displayInitialSongs() {
    const initialSongs = songs.slice(0, 3); 
    displaySongs(initialSongs);
  }

const searchBar = document.getElementById('searchBar');
searchBar.addEventListener('input', function(event) {
  const searchString = event.target.value.toLowerCase();

  const filteredSongs = songs.filter(song => 
      song.title.toLowerCase().includes(searchString) ||
      song.artist.toLowerCase().includes(searchString)
  );

  if (searchString.trim() === '') {
      displayInitialSongs();
  } else {
      displaySongs(filteredSongs);
  } 
});

displayInitialSongs();
document.getElementById('no-results').style.display = 'none';

// Automatically focus the search bar
window.onload = function() {
    document.getElementById('searchBar').focus();
  };
  