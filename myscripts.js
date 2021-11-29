function fullScreenRequest(id) {
  if (document.getElementById(id).requestFullscreen) {
    document.getElementById(id).requestFullscreen();
} else if (document.getElementById(id).mozRequestFullScreen) {
    document.getElementById(id).mozRequestFullScreen();
} else if (document.getElementById(id).webkitRequestFullscreen) {
document.getElementById(id).webkitRequestFullscreen();
} else if (document.getElementById(id).msRequestFullscreen) {
document.getElementById(id).msRequestFullscreen();
 }
}

function closeFullscreen() {
  if (document.exitFullscreen) {
   document.exitFullscreen();
} else if (document.webkitExitFullscreen) {
   document.webkitExitFullscreen();
} else if (document.msExitFullscreen) {
   document.msExitFullscreen();
 }
}

function pump() {
window.open("https:www.youtube.com")
}
