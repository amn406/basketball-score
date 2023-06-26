let homescoreEL = document.getElementById("home-score");
let guestscoreEl = document.getElementById("guest-score");

let homeOneBtn = document.getElementById("home-score-btn-1");
let homeTwoBtn = document.getElementById("home-score-btn-2");
let homeThreeBtn = document.getElementById("home-score-btn-3");
let homeResetBtn = document.getElementById("reset-home-score");

let guestOneBtn = document.getElementById("guest-score-btn-1");
let guestTwoBtn = document.getElementById("guest-score-btn-2");
let guestThreeBtn = document.getElementById("guest-score-btn-3");
let guestResetBtn = document.getElementById("reset-guest-score");

// HOME SCORE //

homeOneBtn.addEventListener("click", function () {
  homescoreEL.textContent++;
});

homeTwoBtn.addEventListener("click", function () {
  homescoreEL.textContent = Number(homescoreEL.textContent) + 2;
});

homeThreeBtn.addEventListener("click", function () {
  homescoreEL.textContent = Number(homescoreEL.textContent) + 3;
});

homeResetBtn.addEventListener("click", function () {
  homescoreEL.textContent = 0;
});

// GUEST SCORE //

guestOneBtn.addEventListener("click", function () {
  guestscoreEl.textContent++;
});

guestTwoBtn.addEventListener("click", function () {
  guestscoreEl.textContent = Number(guestscoreEl.textContent) + 2;
});

guestThreeBtn.addEventListener("click", function () {
  guestscoreEl.textContent = Number(guestscoreEl.textContent) + 3;
});

guestResetBtn.addEventListener("click", function () {
  guestscoreEl.textContent = 0;
});
