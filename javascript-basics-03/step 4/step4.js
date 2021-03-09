var password = document.getElementById("password");
var confirmation = document.getElementById("confirmation");

function checkpass() {
  /*  if (password == confirmation) {
    document.getElementById("password").style.border = "3px solid red";
  }*/
  if (password.value === confirmation.value) {
    alert("THEY ARE THE SAME!!");
  } else {
    alert("They are not the same.");
    document.getElementById("password").style.border = "3px solid red";
  }
}
