document.getElementById("form").addEventListener("submit", function (event) {
  event.preventDefault();

  let imge = prompt("Enter Food Image URL");
  let food = prompt("Enter Food Name");
  let fid = prompt("Enter food id");
  let fcategory = prompt("Enter food category");
  let fprice = prompt("Enter food price");
  let favailable = prompt("Enter food availability");

  var table = document.getElementById("foodtable");

  var row = table.insertRow(-1);

  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(2);
  var cell4 = row.insertCell(3);
  var cell5 = row.insertCell(4);
  var cell6 = row.insertCell(5);
  var cell7 = row.insertCell(6);

  cell1.innerHTML = "<img class='foodimg' src='" + imge + "'>";
  cell2.innerHTML = food;
  cell3.innerHTML = fid;
  cell4.innerHTML = fcategory;
  cell5.innerHTML = fprice;
  cell6.innerHTML = favailable;

  cell7.innerHTML =
    "<button type='button' class='delbtn'><i class='fa-solid fa-trash'></i> Delete</button>";

  cell7.addEventListener("click", function () {
    cell7.parentElement.remove();
  });
});

var buttons = document.getElementsByClassName("delbtn");

buttons[0].addEventListener("click", function () {
  buttons[0].parentElement.parentElement.remove();
});

buttons[1].addEventListener("click", function () {
  buttons[1].parentElement.parentElement.remove();
});

buttons[2].addEventListener("click", function () {
  buttons[2].parentElement.parentElement.remove();
});

buttons[3].addEventListener("click", function () {
  buttons[3].parentElement.parentElement.remove();
});