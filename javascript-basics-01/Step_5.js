document.getElementById("validate").addEventListener("click", display);

function display() {
  var first_number = document.getElementById("first_number").value;
  var second_number = document.getElementById("second_number").value;

  var total = parseFloat(first_number) * parseFloat(second_number);

  alert("the total is :" + total);
}
