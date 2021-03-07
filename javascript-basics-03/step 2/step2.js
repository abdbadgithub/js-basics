document.getElementById("show").addEventListener("click", show);
document.getElementById("hide").addEventListener("click", hide);

function show() {
  document.getElementById("texte").style.display = "block";
}
function hide() {
  document.getElementById("texte").style.display = "none";
}
