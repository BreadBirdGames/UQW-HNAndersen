// ####### Web Cam Scanning #######

import QrScanner from "/qr-scanner.min.js";

function setResult(result) {
    // if (result.data in characters.keys()) {
    window.Engine.play("Admiral");
    console.log(result.data);
    // }
}

const qrVideo = document.createElement("video");
document.body.appendChild(qrVideo);

const scanner = new QrScanner(qrVideo, result => setResult(result), {
    onDecodeError: error => {},
    highlightScanRegion: true,
    highlightCodeOutline: true,
});

scanner.start();

// ########## EAC setup ###########

export var Module = {
    "onRuntimeInitialized": function() {
        change_character = Module.cwrap('iterate', 'void', ['void']);
    }
}