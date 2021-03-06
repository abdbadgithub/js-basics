/* first solution
var name = prompt("please enter your first name", "");
var surname = prompt("please enter your surname", "");
var city = prompt("please enter your city name", "");

if (name != null && surname != null && city != null) {
  alert("name : " + name + "\n surname : " + surname + "\n city : " + city);
}
*/

document.getElementById("validate").addEventListener("click", display);

function display() {
  var name = document.getElementById("name").value;
  var surname = document.getElementById("surname").value;
  var city = document.getElementById("city").value;

  if (name != null && surname != null && city != null)
    alert("name : " + name + "\n surname : " + surname + "\n city : " + city);
}
