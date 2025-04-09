// ####### Web Cam Scanning #######

import QrScanner from "/qr-scanner.min.js";

// Function for setting result 
function setResult(result) {
    // if (result.data in characters.keys()) {
    window.Engine.play("Admiral");
    console.log(result.data);
    // }
}

// Create and initialize QR video
const qrVideo = document.createElement("video");
qrVideo.id = "qr-video";
document.body.appendChild(qrVideo);

const scanner = new QrScanner(qrVideo, result => setResult(result), {
    onDecodeError: error => {},
    highlightScanRegion: true,
    highlightCodeOutline: true,
});

scanner.start();

// Import font awesome
const fontAwesomeLink = document.createElement("link");
fontAwesomeLink.rel = "stylesheet";
fontAwesomeLink.href = "font-awesome/css/all.min.css"
document.head.appendChild(fontAwesomeLink);

// Create bottom nav bar
const buttonContainer = document.createElement("div");
buttonContainer.id = "button-container";

const logButton = document.createElement("button");
logButton.id = "log-button";
logButton.innerHTML = '<i class="fa-solid fa-scroll"></i>';
// Log button click
function logClick() {
    if (cameraButton.classList.contains("current")) {
        logButton.classList.add("current");
        cameraButton.classList.remove("current");
    }
}
logButton.addEventListener("click", logClick);
buttonContainer.appendChild(logButton);

const cameraButton = document.createElement("button");
cameraButton.id = "camera-button";
cameraButton.innerHTML = '<i class="fa-solid fa-camera-retro"></i>';
// Camera button click
function cameraClick() {
    if (logButton.classList.contains("current")) {
        logButton.classList.remove("current");
        cameraButton.classList.add("current");
    }
}
cameraButton.addEventListener("click", cameraClick);
buttonContainer.appendChild(cameraButton);

document.body.appendChild(buttonContainer);

cameraButton.classList.add("current");