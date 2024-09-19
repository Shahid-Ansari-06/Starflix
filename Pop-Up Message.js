const popup = document.getElementById("popupMessage");

function showPopup() {
 
    popup.classList.add("show");

 
    localStorage.setItem('popupVisible', 'true');
}


function hidePopup() {
  
    popup.classList.remove("show");


    localStorage.setItem('popupVisible', 'false');
}


function playNewSong() {
    console.log("New song is playing.");
    
}
function pauseSong() {
    hidePopup();
}


document.getElementById("popupBtn").addEventListener("click", showPopup);



const mediaPlayer = document.getElementById("audio1");

mediaPlayer.addEventListener("pause", pauseSong);


mediaPlayer.addEventListener("play", () => {
    console.log("Media is playing.");
});


window.addEventListener('load', () => {
    const popupVisible = localStorage.getItem('popupVisible');
    if (popupVisible === 'true') {
        showPopup();
    } else {
        hidePopup();
    }
});
