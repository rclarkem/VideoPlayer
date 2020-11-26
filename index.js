const video = document.querySelector('video');
const play = document.querySelector('#play');
const stop = document.querySelector('#stop');
const timestamp = document.querySelector('#timestamp');
const progress = document.querySelector('#progress');
// Event Listeners
video.addEventListener('click', toggleVideoStatus);
video.addEventListener('pause', updatePlayIcon);
video.addEventListener('play', updatePlayIcon);
video.addEventListener('timeupdate', updateProgress);

play.addEventListener('click', toggleVideoStatus);
stop.addEventListener('click', stopVideo);

progress.addEventListener('change', setVideoProgress);

function toggleVideoStatus() {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
}

function icon(ele, iconLabel, iconClass) {
  ele.firstElementChild.removeAttribute('name');
  ele.firstElementChild.removeAttribute('class');
  ele.firstElementChild.setAttribute('name', iconLabel);
  ele.firstElementChild.setAttribute('class', `${iconClass} md hydrated`);
}

function updatePlayIcon() {
  if (video.paused) {
    icon(play, 'play-circle', 'play-btn');
  } else {
    icon(play, 'pause-circle', 'pause-btn');
  }
}

function stopVideo() {
  video.currentTime = 0;
  video.pause();
}

function updateProgress() {
  progress.value = (video.currentTime / video.duration) * 100;

  let mins = Math.floor(video.currentTime / 60);
  if (mins < 10) {
    mins = '0' + String(mins);
  }
  let sec = Math.floor(video.currentTime % 60);
  if (sec < 10) {
    sec = '0' + String(sec);
  }
  timestamp.textContent = `${mins}:${sec}`;
}

function setVideoProgress() {
  video.currentTime = Number((progress.value * video.duration) / 100);
}
