document.getElementById("validate").addEventListener("click", display);

function display() {
  var shoe_size = document.getElementById("shoe_size").value;
  var year = document.getElementById("year").value;

  var total = ((parseFloat(shoe_size) * 2 + 5) * 50) / parseFloat(year);

  alert("the total is :" + total);
}
