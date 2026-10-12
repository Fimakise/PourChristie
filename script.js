const discoverBtn = document.getElementById("discoverBtn");
const messageSection = document.getElementById("message");
const giftBtn = document.getElementById("giftBtn");
const revealMessage = document.getElementById("revealMessage");

discoverBtn.addEventListener("click", () => {
  messageSection.scrollIntoView({ behavior: "smooth", block: "start" });
});

giftBtn.addEventListener("click", () => {
  revealMessage.classList.toggle("show");
  giftBtn.setAttribute("aria-expanded", revealMessage.classList.contains("show") ? "true" : "false");
  if (revealMessage.classList.contains("show")) {
    revealMessage.scrollIntoView({ behavior: "smooth", block: "nearest" });
    giftBtn.querySelector(".gift-box").textContent = "💝";
  } else {
    giftBtn.querySelector(".gift-box").textContent = "🎁";
  }
});


// Les navigateurs mobiles exigent une action de l'utilisateur avant la lecture audio.
const musicToggle = document.getElementById("musicToggle");
const birthdayMusic = document.getElementById("birthdayMusic");

if (musicToggle && birthdayMusic) {
  musicToggle.addEventListener("click", async () => {
    if (birthdayMusic.paused) {
      try {
        await birthdayMusic.play();

        musicToggle.classList.add("is-playing");
        musicToggle.setAttribute("aria-pressed", "true");
        musicToggle.setAttribute("aria-label", "Couper la musique");
        musicToggle.querySelector(".music-label").textContent = "Musique activée";

      } catch (error) {
        console.error("Erreur de lecture audio :", error);
        musicToggle.querySelector(".music-label").textContent = "Vérifie le MP3";
      }
    } else {
      birthdayMusic.pause();

      musicToggle.classList.remove("is-playing");
      musicToggle.setAttribute("aria-pressed", "false");
      musicToggle.setAttribute("aria-label", "Activer la musique");
      musicToggle.querySelector(".music-label").textContent = "Musique";
    }
  });
}
