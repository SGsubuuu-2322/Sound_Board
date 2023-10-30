// These are the sound array containing all the sound names...
const sounds = ["Applause", "Boo", "Gasp", "Tada", "Victory", "Wrong"];

// This is creating all the sound buttons and to play it...
sounds.forEach((sound) => {
  const btn = document.createElement("button");
  btn.classList.add("btn");
  btn.innerText = sound;

  document.getElementById("buttons").appendChild(btn);

  btn.addEventListener("click", () => {
    stopSounds();
    document.getElementById(sound).play();
  });
});

// This is to stop all other sounds while current one is playing...
function stopSounds() {
  sounds.forEach((sound) => {
    const song = document.getElementById(sound);
    song.pause();
    song.currentTime = 0;
  });
}
