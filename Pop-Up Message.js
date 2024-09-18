window.addEventListener("load", function() {
  const popup = document.getElementById("popupMessage");

  // Check if popup state is saved in localStorage
  if (localStorage.getItem("popupShown") === "true") {
      popup.classList.add("show");
  }
});

document.getElementById("popupBtn").addEventListener("click", function() {
  const popup = document.getElementById("popupMessage");
  
  // Show the popup and store the state in localStorage
  popup.classList.add("show");
  localStorage.setItem("popupShown", "true");
});
