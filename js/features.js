document
  .getElementById("btn-show-cashout")
  .addEventListener("click", function () {
    //remove hidden btn from cash out form
    document.getElementById("cashout-form").classList.remove("hidden");

    //add hidden btn in add money form
    document.getElementById("addmoney-form").classList.add("hidden");
  });

//add money btn customized
document
  .getElementById("btn-show-addmoney")
  .addEventListener("click", function () {
    document.getElementById("addmoney-form").classList.remove("hidden");
    document.getElementById("cashout-form").classList.add("hidden");
  });
