import { audioElement, audioCtx } from './audio';

const playPouseElement = document.querySelector('#playPouse');
const volumeElement = document.querySelector('#volume');
const stopElement = document.querySelector('#stop');

const togglePlayPouse = () => {
  console.log('toggle Play/Pouse');
  if (audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
  //   audioElement.play();
  //   if (playPouseElement.dataset.playing === 'false') {
  //     audioElement.play();
  //   }
  //   if (!audioElement) return;
  //   audioElement.currentTime = 0;
  //   audioElement.play();
  audioElement.play();
  const promise = audioElement.play();
  if (promise) {
    // Older browsers may not return a promise, according to the MDN website
    promise.catch((error) => { console.error(error); });
  }
};

const changeVolume = () => {
  console.log('changeVolume');
};

const stop = () => {
  console.log('stop');
};

playPouseElement.addEventListener('click', togglePlayPouse);
volumeElement.addEventListener('change', changeVolume);
stopElement.addEventListener('click', stop);
