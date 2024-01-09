const videoSourceURL =
  "https://file-examples.com/storage/fe42f94178659ccad957366/2017/04/file_example_MP4_1280_10MG.mp4";

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

document.addEventListener("keyup", function (e) {
  var keyCode = e.keyCode ? e.keyCode : e.which;
  if (keyCode == 44) {
    stopPrntScr();
  }
});
function stopPrntScr() {
  var inpFld = document.createElement("input");
  inpFld.setAttribute("value", ".");
  inpFld.setAttribute("width", "0");
  inpFld.style.height = "0px";
  inpFld.style.width = "0px";
  inpFld.style.border = "0px";
  document.body.appendChild(inpFld);
  inpFld.select();
  document.execCommand("copy");
  inpFld.remove(inpFld);
}
function AccessClipboardData() {
  try {
    window.clipboardData.setData("text", "Access   Restricted");
  } catch (err) {}
}
setInterval("AccessClipboardData()", 300);
