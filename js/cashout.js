document
  .getElementById("btn-cashout")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const cashOut = document.getElementById("input-cashout-amount").value;
    const pinNumber = document.getElementById("input-cashout-pin").value;
    console.log(cashOut, pinNumber);
    if (pinNumber === "1234") {
      console.log("money reducing");
      const balance = document.getElementById("account-balance").innerText;
      console.log(balance);
      //new balance
      const cashOutNumber = parseFloat(cashOut);
      const balanceNumber = parseFloat(balance);
      const newBalance = balanceNumber - cashOut;
      //update balance
      document.getElementById("account-balance").innerText = newBalance;
    }
  });
