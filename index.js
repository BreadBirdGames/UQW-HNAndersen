const thumbnails = {
    "Kaptain": "img/Kaptajn_Jakob.png"
}

const thumbnailImage = document.createElement("img");
thumbnailImage.id = "thumbnail";
document.body.appendChild(thumbnailImage);

function display_thumbnail(str) {
    if (!window.ready) {
        return;
    }

    console.log(str);
    
    if (str in thumbnails) {
        thumbnailImage.src = thumbnails[str];
    }
}

window.display_thumbnail = display_thumbnail;

const virtRoot = document.createElement("div");

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
    if (!window.ready) {
        return;
    }

    if (virtRoot.classList.contains("current-is-right")) {
        virtRoot.classList.remove("current-is-right");
        virtRoot.classList.add("current-is-left");
    }
}
logButton.addEventListener("click", logClick);
buttonContainer.appendChild(logButton);

const cameraButton = document.createElement("button");
cameraButton.id = "camera-button";
cameraButton.innerHTML = '<i class="fa-solid fa-camera-retro"></i>';
// Camera button click
function cameraClick() {
    if (!window.ready) {
        return;
    }

    if (virtRoot.classList.contains("current-is-left")) {
        virtRoot.classList.remove("current-is-left");
        virtRoot.classList.add("current-is-right");
    }
}
cameraButton.addEventListener("click", cameraClick);
buttonContainer.appendChild(cameraButton);

virtRoot.appendChild(buttonContainer);
virtRoot.appendChild(tabL);
virtRoot.appendChild(tabR);

virtRoot.classList.add("current-is-right");

document.body.appendChild(virtRoot);

// ####### Web Cam Scanning #######

import QrScanner from "/qr-scanner.min.js";

// Function for setting result 
function setResult(result) {
    if (!window.ready) {
        return;
    }

    // if (result.data in characters.keys()) {
    window.Engine.play("Person1");
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

// ###########3 idfk

const dialogueBox = document.getElementById("story");

// hide dialogue box if empty
window.conversationStart = function (ev) {

	if (ev.passage["name"] == "End conversation") {
        dialogueBox.classList.add("hidden");
        thumbnailImage.src = "";
    } else {
        dialogueBox.classList.remove("hidden");
    }
};