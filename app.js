// toglogchiin eeljiig hadgalah huwisagch(1-r tpglogchiig 0, 2-g1)
var activePlayer = 1;
//toglogchdiin tsugluulsan onoog hadgalah huwisagch
var score = [0, 0];
//toglogchiin eeljindee tsugluulj bui onoog hadgalah huwisagch
var roundScore = 0;
// shoo ali talaaraa buusan esehiig hadgalah,(1-6) utgiig sanamsarguigeer awah huwisagch
var dice = Math.floor(Math.random() * 6) + 1;

// window.document.querySelector("#score-1").innerHTML = "<em>hahh</em>";
// window.document.querySelector(".dice").style.display = "none";
window.document.querySelector("#score-0").textContent = 0;
window.document.querySelector("#score-1").textContent = 0;
window.document.querySelector("#current-0").textContent = 0;
window.document.querySelector("#current-1").textContent = 0;
console.log("shoo=" + dice);
