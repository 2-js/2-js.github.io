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

function unblock() {
  alert("the link must be exact that includes:\nhttps:, www., .com, etc.")
 var value = document.getElementByID('unblocker').value
  document.getElementById('iframe').src = 'http://noderlol.herokuapp.com/proxy/'+value
}
