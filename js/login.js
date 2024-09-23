//set event handler
document
  .getElementById("btn-login")
  .addEventListener("click", function (event) {
    //step - 2 preventdefault behavior
    event.preventDefault();
    console.log("login btn clicked");

    //get phn number and pin
    const phoneNumber = document.getElementById("phone-number").value;
    const pinNumber = document.getElementById("pin-number").value;
    console.log(phoneNumber, pinNumber);

    //connect to server but we use bad way
    if (phoneNumber === "2" && pinNumber === "1234") {
      window.location.href = "../home.html";
      console.log("you r log in");
    } else {
      alert("ur pin and number is wrong");
    }
  });
