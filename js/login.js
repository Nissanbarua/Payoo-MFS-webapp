//set event handler
document
  .getElementById("btn-login")
  .addEventListener("click", function (event) {
    //step - 2 preventdefault behavior
    event.preventDefault();
    console.log("login btn clicked");

    //get phn number
    const phoneNumber = document.getElementById("phone-number").value;
    console.log(phoneNumber);
  });
