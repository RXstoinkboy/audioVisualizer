// create audio context
const AudioContext = window.AudioContext || window.webkitAudioContext;
export const audioCtx = new AudioContext();
// grab HTML audio element
export const audioElement = document.querySelector('audio');
// export const audioElement = new Audio('../assets/bensound-sunny.mp3');
// pipe audio element into audio context
const track = audioCtx.createMediaElementSource(audioElement);
// connect track to audio context dectionation
track.connect(audioCtx.destination);
