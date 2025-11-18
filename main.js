// Search functionality when we click on searchbar

var enteredText = "";
var search = document.getElementById("search");
var foodItems = document.querySelector(".food-items");
var item = foodItems.querySelectorAll(".food-item");

search.addEventListener("input", function (event) {
  enteredText = event.target.value.toUpperCase();
  document.getElementById("title").style.display = "none";

  let hasMatch = false;

  for (count = 0; count < item.length; count++) {
    var itemList = item[count].querySelector("h3").textContent.toUpperCase();
    if (itemList.indexOf(enteredText) >= 0) {
      item[count].style.display = "block";
      hasMatch = true;
    } else {
      item[count].style.display = "none";
    }
  }

  if (enteredText === "") {
    document.getElementById("title").style.display = "block";
  }
});


