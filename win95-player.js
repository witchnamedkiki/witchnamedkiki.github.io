const audio = document.getElementById("player");
const volumeSlider = document.getElementById("volumeSlider");

audio.volume = 0.50; // Sets volume to 50%
audio.loop = true;
volumeSlider.value = 0.5;

function play() {
  audio.play();
}

function pause() {
  audio.pause();
}

function stop() {
  audio.pause();
  audio.currentTime = 0;
}

volumeSlider.addEventListener("input", () => {
  audio.volume = volumeSlider.value;
});

function updateSliderBackground(slider) {
  const value = slider.value * 100 + "%";
  slider.style.setProperty('--value', value);
}

volumeSlider.addEventListener("input", () => {
  audio.volume = volumeSlider.value;
  updateSliderBackground(volumeSlider);
});

// Set initial fill when the page loads
updateSliderBackground(volumeSlider);
