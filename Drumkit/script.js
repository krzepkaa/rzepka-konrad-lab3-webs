document.body.addEventListener('keypress', PlayAudio)

document.querySelector('#track1Rec')
    .addEventListener('click', Track1Record)
document.querySelector('#track1Play')
    .addEventListener('click', Track1Playing)

document.querySelector('#track2Rec')
    .addEventListener('click', Track2Record)
document.querySelector('#track2Play')
    .addEventListener('click', Track2Playing)

document.querySelector('#track3Rec')
    .addEventListener('click', Track3Record)
document.querySelector('#track3Play')
    .addEventListener('click', Track3Playing)

document.querySelector('#track4Rec')
    .addEventListener('click', Track4Record)
document.querySelector('#track4Play')
    .addEventListener('click', Track4Playing)


let track1Start;
let track2Start;
let track3Start;
let track4Start;

const track1 = []
const track2 = []
const track3 = []
const track4 = []

let activeTrack = -1;

const sounds = {
    KeyA: "#boom",
    KeyS: "#clap",
    KeyD: "#hihat",
    KeyF: "#kick",
    KeyG: "#openhat",
    KeyH: "#ride",
    KeyJ: "#snare",
    KeyK: "#tink",
    KeyL: "#tom",
}
function Track1Record() {
    track1Start = Date.now()
    activeTrack = 0;
}

function Track2Record() {
    track2Start = Date.now()
    activeTrack = 1;
}

function Track3Record() {
    track3Start = Date.now()
    activeTrack = 2;
}

function Track4Record() {
    track4Start = Date.now()
    activeTrack = 3;
}

function DisableRecording() {
    activeTrack = -1;
}

function Track1Playing() {
    DisableRecording();
    track1.forEach((el) => {
        setTimeout(() => {
            playSound(sounds[el.sound])
        }, el.time);
    })
}

function Track2Playing() {
    DisableRecording();
    track2.forEach((el) => {
        setTimeout(() => {
            playSound(sounds[el.sound])
        }, el.time);
    })
}

function Track3Playing() {
    DisableRecording();
    track3.forEach((el) => {
        setTimeout(() => {
            playSound(sounds[el.sound])
        }, el.time);
    })
}

function Track4Playing() {
    DisableRecording();
    track4.forEach((el) => {
        setTimeout(() => {
            playSound(sounds[el.sound])
        }, el.time);
    })
}

function PlayAudio(e) {
    playSound(sounds[e.code]);
    if (activeTrack === -1) {
        return;
    }

    if (activeTrack === 0) {
        const time = Date.now() - track1Start;
        const sound = {
            sound: e.code,
            time: time
        }
        track1.push(sound)
    }

    if (activeTrack === 1) {
        const time = Date.now() - track2Start;
        const sound = {
            sound: e.code,
            time: time
        }
        track2.push(sound)
    }

    if (activeTrack === 2) {
        const time = Date.now() - track3Start;
        const sound = {
            sound: e.code,
            time: time
        }
        track3.push(sound)
    }

    if (activeTrack === 3) {
        const time = Date.now() - track4Start;
        const sound = {
            sound: e.code,
            time: time
        }
        track4.push(sound)
    }

}

function playSound(id) {
    const audioTag = document.querySelector(id)
    audioTag.currentTime = 0
    audioTag.play()

}