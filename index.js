// ####### Rest of scene #######

// create QRVideo
const qrVideo = document.createElement("video");
qrVideo.id = "qr-video"

// Import font awesome
const fontAwesomeLink = document.createElement("link");
fontAwesomeLink.rel = "stylesheet";
fontAwesomeLink.href = "font-awesome/css/all.min.css"
document.head.appendChild(fontAwesomeLink);

const tabL = document.createElement("div");
tabL.id = "left-tab";
tabL.classList.add("tabs");

const tabR = document.createElement("div");
tabR.id = "right-tab";
tabR.classList.add("tabs");
tabR.appendChild(qrVideo);

// Create bottom nav bar
const buttonContainer = document.createElement("div");
buttonContainer.id = "button-container";

const logButton = document.createElement("button");
logButton.id = "log-button";
logButton.innerHTML = '<i class="fa-solid fa-scroll"></i>';
// Log button click
function logClick() {
    if (document.body.classList.contains("current-is-right")) {
        document.body.classList.remove("current-is-right");
        document.body.classList.add("current-is-left");
    }
}
logButton.addEventListener("click", logClick);
buttonContainer.appendChild(logButton);

const cameraButton = document.createElement("button");
cameraButton.id = "camera-button";
cameraButton.innerHTML = '<i class="fa-solid fa-camera-retro"></i>';
// Camera button click
function cameraClick() {
    if (document.body.classList.contains("current-is-left")) {
        document.body.classList.remove("current-is-left");
        document.body.classList.add("current-is-right");
    }
}
cameraButton.addEventListener("click", cameraClick);
buttonContainer.appendChild(cameraButton);

document.body.appendChild(buttonContainer);
document.body.appendChild(tabL);
document.body.appendChild(tabR);

document.body.classList.add("current-is-right");

// ####### Web Cam Scanning #######

import QrScanner from "/qr-scanner.min.js";

// Function for setting result 
function setResult(result) {
    // if (result.data in characters.keys()) {
    window.Engine.play("Admiral");
    console.log(result.data);
    // }
}

// initialize QR video;
const scanner = new QrScanner(qrVideo, result => setResult(result), {
    onDecodeError: error => {},
    highlightScanRegion: true,
    highlightCodeOutline: true,
});

scanner.start();