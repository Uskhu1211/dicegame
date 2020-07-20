// toglogchiin eeljiig hadgalah huwisagch(1-r tpglogchiig 0, 2-g1)
var activePlayer = 0;
//toglogchdiin tsugluulsan onoog hadgalah huwisagch
var score = [0, 0];
//toglogchiin eeljindee tsugluulj bui onoog hadgalah huwisagch
var roundScore = 0;
// shoo ali talaaraa buusan esehiig hadgalah,(1-6) utgiig sanamsarguigeer awah huwisagch
var diceNumber = Math.floor(Math.random() * 6) + 1;

// window.document.querySelector("#score-1").innerHTML = "<em>hahh</em>";

// window.document.querySelector("#score-0").textContent = 0;
// window.document.querySelector("#score-1").textContent = 0;
// window.document.querySelector("#current-0").textContent = 0;
// window.document.querySelector("#current-1").textContent = 0;
document.getElementById("score-0").textContent = 0;
document.getElementById("score-1").textContent = 0;
document.getElementById("current-1").textContent = 0;
document.getElementById("current-0").textContent = 0;
var diceDom = window.document.querySelector(".dice");
document.querySelector(".btn-roll").addEventListener("click", function () {
  var diceNumber = Math.floor(Math.random() * 6) + 1;
  diceDom.src = "dice-" + diceNumber + ".png";
  if (diceNumber !== 1) {
    roundScore = roundScore + diceNumber;
    document.getElementById("current-" + activePlayer).textContent = roundScore;
  } else {
    roundScore = 0;
    document.getElementById("current-" + activePlayer).textContent = roundScore;
    if (activePlayer === 1) activePlayer = 0;
    else activePlayer = 1;
  }
});
document.querySelector(".btn-hold").addEventListener("click", function () {
  if (activePlayer === 0) {
    score[0] = score[0] + roundScore;
    document.getElementById("score-0").textContent = score[0];
    roundScore = 0;
    document.getElementById("current-" + activePlayer).textContent = roundScore;
    activePlayer = 1;
  } else {
    score[1] = score[1] + roundScore;
    document.getElementById("score-1").textContent = score[1];
    roundScore = 0;
    document.getElementById("current-" + activePlayer).textContent = roundScore;
    activePlayer = 0;
  }
});
