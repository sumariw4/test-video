const videoSourceURL = "https://samplelib.com/lib/preview/mp4/sample-20s.mp4";

function disableRightClick(event) {
  event.preventDefault();
}

function disableMobileRecording() {
  const videoPlayer = document.getElementById("secureVideoPlayer");

  // Set the video source with HTTPS
  videoPlayer.src = videoSourceURL;

  // Add event listener to disable right-click on the video player
  videoPlayer.addEventListener("contextmenu", disableRightClick);

  // Add event listener to handle the play event
  videoPlayer.addEventListener("play", () => {
    // Check if the video is playing in fullscreen
    if (document.fullscreenElement || document.webkitFullscreenElement) {
      // Stop the video playback if fullscreen is detected
      videoPlayer.pause();
      // You can also display a warning message to the user
    }
  });

  // Add event listener to handle screen capture attempts
  document.addEventListener("visibilitychange", () => {
    if (document.visibilityState === "hidden") {
      // Detecting if the screen is black (e.g., screenshot attempt)
      const canvas = document.createElement("canvas");
      const context = canvas.getContext("2d");
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      context.fillStyle = "black";
      context.fillRect(0, 0, canvas.width, canvas.height);

      const imageData = context.getImageData(0, 0, canvas.width, canvas.height).data;

      // Check if all pixels are black (R = 0, G = 0, B = 0, A = 255)
      const isBlackScreen = imageData.every((value, index) => ((index + 1) % 4 === 0 ? value === 255 : value === 0));

      if (isBlackScreen) {
        // Stop the video playback if a black screen is detected
        videoPlayer.pause();
        // You can also display a warning message to the user
      }
    }
  });

  //   Disable Screenshot Using Javascript
  document.addEventListener("keydown", function (event) {
    navigator.clipboard.writeText("Screenshot Disabled");
    if (event.key == "PrintScreen") {
      event.preventDefault();
      alert("Screenshot Disabled");
    }
  });

  document.addEventListener("keyup", function (event) {
    if (event.key == "PrintScreen") {
      event.preventDefault();
      alert("Screenshot Disabled");
    }
  });
}

document.addEventListener("DOMContentLoaded", disableMobileRecording);
