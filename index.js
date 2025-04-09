// ####### Web Cam Scanning #######

import QrScanner from "/qr-scanner.min.js";

function setResult(result) {
    // if (result.data in characters.keys()) {
    window.Engine.play("Admiral");
    console.log(result.data);
    // }
}

const fontAwesomeLink = document.createElement("link");
fontAwesomeLink.rel = "stylesheet";
fontAwesomeLink.href = "font-awesome/css/all.min.css"
document.head.appendChild(fontAwesomeLink);

const qrVideo = document.createElement("video");
qrVideo.id = "qr-video";
document.body.appendChild(qrVideo);

const buttonContainer = document.createElement("div");
buttonContainer.id = "button-container";

const logButton = document.createElement("button");
logButton.id = "log-button";
logButton.innerHTML = '<i class="fa-solid fa-scroll"></i>';
buttonContainer.appendChild(logButton);

const cameraButton = document.createElement("button");
cameraButton.id = "camera-button";
cameraButton.innerHTML = '<i class="fa-solid fa-camera-retro"></i>';
buttonContainer.appendChild(cameraButton);

document.body.appendChild(buttonContainer);

const scanner = new QrScanner(qrVideo, result => setResult(result), {
    onDecodeError: error => {},
    highlightScanRegion: true,
    highlightCodeOutline: true,
});

scanner.start();