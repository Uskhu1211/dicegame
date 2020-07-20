// toglogchiin eeljiig hadgalah huwisagch(1-r tpglogchiig 0, 2-g1)
var activePlayer = 0;
//toglogchdiin tsugluulsan onoog hadgalah huwisagch
var score = [0, 0];
//toglogchiin eeljindee tsugluulj bui onoog hadgalah huwisagch
var roundScore = 0;
// shoo ali talaaraa buusan esehiig hadgalah,(1-6) utgiig sanamsarguigeer awah huwisagch
var diceNumber = Math.floor(Math.random() * 6) + 1;
var diceDom = window.document.querySelector(".dice");
// window.document.querySelector("#score-1").innerHTML = "<em>hahh</em>";
// document.getElementById("score-0").textContent = 0;
// document.getElementById("score-1").textContent = 0;
// document.getElementById("current-1").textContent = 0;
// document.getElementById("current-0").textContent = 0;
gameFinish();
document.querySelector(".btn-roll").addEventListener("click", function () {
  var diceNumber = Math.floor(Math.random() * 6) + 1;
  diceDom.src = "dice-" + diceNumber + ".png";
  if (diceNumber !== 1) {
    diceDom.style.display = "block";
    roundScore = roundScore + diceNumber;
    document.getElementById("current-" + activePlayer).textContent = roundScore;
  } else {
    nextPlayer();
  }
});
document.querySelector(".btn-hold").addEventListener("click", function () {
  score[activePlayer] = score[activePlayer] + roundScore;
  document.getElementById("score-" + activePlayer).textContent =
    score[activePlayer];
  if (score[activePlayer] >= 20) {
    alert("player" + (activePlayer + 1) + "goy shaala");
    document.getElementById("name-" + activePlayer).textContent = "winner";
    gameFinish();
  } else {
    nextPlayer();
  }
});
document.querySelector(".btn-new").addEventListener("click", gameFinish());

function nextPlayer() {
  roundScore = 0;
  document.getElementById("current-" + activePlayer).textContent = roundScore;
  document.querySelector(".player-1-panel").classList.toggle("active");
  document.querySelector(".player-0-panel").classList.toggle("active");
  if (activePlayer === 1) {
    activePlayer = 0;
  } else {
    activePlayer = 1;
  }
  diceDom.style.display = "none";
}
function gameFinish() {
  diceDom.style.display = "none";
  activePlayer = 0;
  score = [0, 0];
  roundScore = 0;
  document.getElementById("name-" + activePlayer).textContent =
    "Player" + activePlayer;
  document.querySelector(".player-0-panel").classList.add("active");
  document.querySelector(".player-1-panel").classList.remove("active");
  document.getElementById("score-0").textContent = 0;
  document.getElementById("score-1").textContent = 0;
  document.getElementById("current-1").textContent = 0;
  document.getElementById("current-0").textContent = 0;
}
