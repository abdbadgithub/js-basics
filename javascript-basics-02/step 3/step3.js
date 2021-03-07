document.getElementById("name").addEventListener("keypress", display);

function display() {
  // document.querySelector("p").value = document.querySelector("name").value;
  document.querySelector("p").textContent = document.getElementById(
    "name"
  ).value;
}
