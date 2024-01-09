const videoSourceURL = "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4";

function source() {
  const videoPlayer = document.getElementById("secureVideoPlayer");

  // Set the video source with HTTPS
  videoPlayer.src = videoSourceURL;

  // Disable Audio
  videoPlayer.muted = true;

  // Auto Play Video
  videoPlayer.autoplay = true;
}

document.addEventListener("DOMContentLoaded", source);

// Disable PrintScreen
document.addEventListener("keydown", function (event) {
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

//Disable inspect element,
document.addEventListener("keydown", function (event) {
  // F12
  if (event.key == "F12") {
    event.preventDefault();
    alert("Inspect Element Disabled");
  }
  // Ctrl+Shift+I
  if (event.ctrlKey && event.shiftKey && event.key == "I") {
    event.preventDefault();
    alert("Inspect Element Disabled #I");
  }
  //  Ctrl+Shift+J
  if (event.ctrlKey && event.shiftKey && event.key == "J") {
    event.preventDefault();
    alert("Inspect Element Disabled #J");
  }
  // Ctrl+Shift+U
  if (event.ctrlKey && event.shiftKey && event.key == "U") {
    event.preventDefault();
    alert("Inspect Element Disabled #U");
  }
  if (event.ctrlKey && event.shiftKey && event.key == "C") {
    event.preventDefault();
    alert("Inspect Element Disabled #C");
  }
});

document.addEventListener(
  "contextmenu",
  function (e) {
    e.preventDefault();
    alert("Screen Capture Disabled");
  },
  false
);

// Disable screen capture mobile by long press
function init() {
  onLongPress(document.getElementById("targetDiv"));
}

function onLongPress(node) {
  node.ontouchstart = nullEvent;
  node.ontouchend = nullEvent;
  node.ontouchcancel = nullEvent;
  node.ontouchmove = nullEvent;
}

function nullEvent(event) {
  var e = event || window.event;
  e.preventDefault && e.preventDefault();
  e.stopPropagation && e.stopPropagation();
  e.cancelBubble = true;
  e.returnValue = false;
  return false;
}

document.addEventListener("DOMContentLoaded", init);

// document.addEventListener("keydown", function (event) {
//   if (event.key == "Meta") {
//     event.preventDefault();
//     document.getElementById("keydown", function (event) {
//       if (event.shiftKey && event.key == "S") {
//         event.preventDefault();
//         alert("Inspect Element Disabled");
//       }
//     });
//   }
// });

// let type = false;
// window.addEventListener("keydown", (event) => {
//   event.preventDefault();
//   if (event.key == "Meta") {
//     // Pause the video
//     const video = document.getElementById("secureVideoPlayer");
//     if (!type) {
//       video.pause();
//     } else {
//       video.play();
//     }

//     type = !type;
//     // Set Canvas to the video
//   }
// });

// on focus

document.addEventListener("keydown", function (event) {
  event.preventDefault();
  if (event.metaKey) {
    // set canvas div id="canvas" set style="z-index: 9999"
    const canvas = document.getElementById("canvas");
    canvas.style.zIndex = "9999";
  }
});

// document.addEventListener("keyup", function (event) {
//   event.preventDefault();
//   if (event.metaKey) {
//     // set canvas div id="canvas" set style="z-index: 9999"
//     const canvas = document.getElementById("canvas");
//     canvas.style.zIndex = "0";
//   }
// });
