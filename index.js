const video = document.querySelector('video');
const play = document.querySelector('#play');
const stop = document.querySelector('#stop');
const timestamp = document.querySelector('#timestamp');

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
  return true;
}

function setVideoProgress() {
  return true;
}
