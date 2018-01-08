$(function() {
  const camera = document.getElementById("camera");

  camera.onloadedmetadata = function(e) {
    console.log("onloadedmetadata called.");
  };

  camera.oncanplay = function(e) {
    console.log("oncanplay called.");
  };

  const constraints = {
    video: true,
    audio: false
  };

  navigator.getUserMedia(
    constraints,
    function(stream) {
      console.log("Success: " + JSON.stringify(stream));
      camera.srcObject = stream;
      camera.play();
    },
    function(error){
      console.log("Error: " + JSON.stringify(error));
    });
});
