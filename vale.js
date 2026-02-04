// Buttons
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const container = document.querySelector(".container");

// 🎵 Background Music (play on user interaction)
const music = new Audio("music.mp3");
music.loop = true;

// 😈 No button bhagega
noBtn.addEventListener("mouseenter", () => {
  const rect = container.getBoundingClientRect();
  const btnRect = noBtn.getBoundingClientRect();

  const maxX = rect.width - btnRect.width - 20;
  const maxY = rect.height - btnRect.height - 20;

  const x = Math.random() * maxX;
  const y = Math.random() * maxY;

  noBtn.style.left = x + "px";
  noBtn.style.top = y + "px";
});

// ❤️ Yes button click
yesBtn.addEventListener("click", () => {
  // play music
  music.play();

  // confetti hearts effect
  createHearts();

  // change card content
  container.innerHTML = `
    <h1>🧸❤️I knew It❤️</h1>
    <h2>You just made my day 💖</h2>
    <h3>Happy Valentine's Day 🧸✨</h3>
  `;
});

// 💖 Floating hearts effect on Yes
function createHearts() {
  for (let i = 0; i < 20; i++) {
    const heart = document.createElement("div");
    heart.innerHTML = "❤️";
    heart.style.position = "fixed";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.bottom = "-20px";
    heart.style.fontSize = Math.random() * 20 + 20 + "px";
    heart.style.animation = "floatUp 4s linear forwards";
    heart.style.zIndex = "3";

    document.body.appendChild(heart);

    setTimeout(() => {
      heart.remove();
    }, 4000);
  }
}
