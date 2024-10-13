import JSConfetti from "js-confetti";

const dateJs = document.querySelector(".date--js");

const date = new Date();
const hour = date.getHours();
const minute = date.getMinutes();
const jsConfetti = new JSConfetti();
dateJs.innerHTML = `${hour}:${minute}`;

setInterval(() => {
  if (hour === minute) {
    jsConfetti.addConfetti({
      emojis: ["🦄"],
      emojiSize: 50,
      confettiNumber: 30,
    });
  }
}, 60*1000);
