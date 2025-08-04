function initWin95Player() {
  const audio = document.getElementById("player");
  const volumeSlider = document.getElementById("volumeSlider");

  if (!audio || !volumeSlider) {
    console.warn("Win95 Player: elements not found.");
    return;
  }

  audio.volume = 0.5;
  audio.loop = true;
  volumeSlider.value = 0.5;

  // Expose control functions globally
  window.play = () => audio.play();
  window.pause = () => audio.pause();
  window.stop = () => {
    audio.pause();
    audio.currentTime = 0;
  };

  const updateSliderBackground = (slider) => {
    const value = slider.value * 100 + "%";
    slider.style.setProperty("--value", value);
  };

  volumeSlider.addEventListener("input", () => {
    audio.volume = volumeSlider.value;
    updateSliderBackground(volumeSlider);
  });

  updateSliderBackground(volumeSlider);
}
