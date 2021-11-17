function help() {
  var srcT = document.getElementById('iframe').src
  window.open(srcT)
}
function ball() {
  document.getElementById('iframe').src = "https://s3.amazonaws.com/media.safekidgames.com/lets-park/index.html"
}
function boss() {
  document.getElementById('iframe').src = "https://www.mathplayground.com/drift-boss/index.html"
}
function germ() {
  document.getElementById('iframe').src = "https://germs.io"
}
function kirka() {
  document.getElementById('iframe').src = "https://kirka.io"
}
function retro() {
  document.getElementById('iframe').src = "https://debbiewatermanphd.com/uploads/5/5/6/7/5567194/custom_themes/230188292910318641/files/rbl.html"
}
function fulls() {
  document.getElementById('iframe').height = "680px"
}
function drifth() {
  document.getElementById('iframe').src = "https://driftboss.io/drift-hunters.embed"
}
function slope() {
  document.getElementById('iframe').src = "https://slopeunblocked.online/slope-unblocked.embed"
}
function fullsX() {
  document.getElementById('iframe').height = "535px"
}
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
