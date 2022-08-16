//step-1: add event listener to the deposit button.
document.getElementById('btn-deposit').addEventListener('click', function () {
    // step-2: get the deposit amount from the deposit input field
    // For input field use .value inside the input field
    const depositAmount = document.getElementById('deposit-amount');
    const newDepositAmountString = depositAmount.value;
    const newDepositAmount = parseFloat(newDepositAmountString);

    // Clear the deposit field 
    depositAmount.value = '';

    if (isNaN(newDepositAmount)) {
        alert('Enter a valid number.')
        return;
    }
    //step-3: get the current deposit total
    // for non input(element than other input and textarea) use innerText to get the text
    const depositTotalAmount = document.getElementById('deposit-total');
    const previousDepositAmountString = depositTotalAmount.innerText;
    const previousDepositAmount = parseFloat(previousDepositAmountString);
    //step-4: add numbers to set the total deposit
    const currentDepositTotal = previousDepositAmount + newDepositAmount;
    //set deposit total
    depositTotalAmount.innerText = currentDepositTotal;
    //step-5: get balance current total
    const balanceTotalAmount = document.getElementById('balance-total');
    const balanceTotalAmountString = balanceTotalAmount.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalAmountString);
    // step-6: Calculate current total balance
    const currentTotalBalance = previousBalanceTotal + newDepositAmount;
    // set the balance total
    balanceTotalAmount.innerText = currentTotalBalance;


})