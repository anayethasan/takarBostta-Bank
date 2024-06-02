// login button event handler
const loginBtn = document.getElementById('login');

    loginBtn.addEventListener("click", function(){
        const logInArea = document.getElementById("login-form");
        logInArea.style.display = "none";
        const TransactionArea = document.getElementById("Transaction-area");
        TransactionArea.style.display = "block";
    })

// deposit button event handler
const depositButton = document.getElementById("addDeposit");
depositButton.addEventListener("click", function(){
    const depositNumber = getInputNumber("depositAmount");


    // const currentDeposit = document.getElementById("currentDeposit").innerText;
    // const currentDepositNumber = parseFloat(currentDeposit);
    // const totalDeposit = depositNumber + currentDepositNumber;
    // document.getElementById("currentDeposit").innerText = totalDeposit;


    updateSpanText("currentDeposit", depositNumber);
    updateSpanText("currentBalance", depositNumber);

    document.getElementById("depositAmount").value = "";
})

// Withdraw Button event handler
    const withdrawBtn = document.getElementById("addWithdraw");
    withdrawBtn.addEventListener("click", function(){
        const withdrawNumber = getInputNumber("withdrawAmount");

        updateSpanText("currentWithdraw", withdrawNumber);
        updateSpanText("currentBalance", -1* withdrawNumber);

        document.getElementById("withdrawAmount").value = "";
    })

function getInputNumber(id){
    const amount = document.getElementById(id).value;
    const amountNumber = parseFloat(amount);
    return amountNumber;
}

function updateSpanText(id, depositNumber){
    const current = document.getElementById(id).innerText;
    const currentNumber = parseFloat(current);
    const totalAmount = depositNumber + currentNumber;
    document.getElementById(id).innerText = totalAmount;
}