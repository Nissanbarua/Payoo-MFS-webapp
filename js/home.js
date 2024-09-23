document
  .getElementById("btn-add-money")
  .addEventListener("click", function (event) {
    event.preventDefault();

    const inputAmount = document.getElementById("input-amount").value;
    console.log(inputAmount);
    const inputPin = document.getElementById("input-pin").value;
    console.log(inputPin);

    if (inputPin === "1234") {
      console.log("Adding money to ur account");

      const balance = document.getElementById("account-balance").innerText;
      console.log(balance);

      // new balance
      const inputAmountNumber = parseFloat(inputAmount);
      const balanceNumber = parseFloat(balance);
      const newBalance = inputAmountNumber + balanceNumber;
      console.log(newBalance);
      //update balance
      document.getElementById("account-balance").innerText = newBalance;
    } else {
      alert("Something is wrong! Please try again");
    }
  });
