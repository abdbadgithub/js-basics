document.querySelector(".green").addEventListener("click", green);
document.querySelector(".red").addEventListener("click", red);
document.querySelector(".blue").addEventListener("click", blue);

function green() {
  document.getElementById("text").style.color = "green";
}
function red() {
  document.getElementById("text").style.color = "red";
}
function blue() {
  document.getElementById("text").style.color = "blue";
}
