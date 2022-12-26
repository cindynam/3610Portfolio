let currentButton;
let currentAudio;

const buttons = document.querySelectorAll('.sound-button');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    if (button === currentButton) {
      currentAudio.pause();
      currentButton = null;
      currentAudio = null;
    } else {
      if (currentAudio) {
        currentAudio.pause();
      }
      const sound = button.getAttribute('data-sound');
      currentButton = button;
      currentAudio = new Audio(sound);
      currentAudio.play();
    }
  });
});