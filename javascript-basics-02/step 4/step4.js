document.querySelector("button").addEventListener("click", display);

function display() {
  // document.querySelector("p").value = document.querySelector("name").value;
  if (confirm("do you want to reset?")) {
    document.getElementById("name").value = "";
    document.getElementById("surname").value = "";
    document.getElementById("city").value = "";
  }
}
