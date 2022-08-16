/*
1. Add event handler with the withdraw button
2. Get the withdraw amout from withdraw input field

*/
// step-1 
document.getElementById('btn-withdraw').addEventListener('click', function () {
    //step-2
    const withdrawField = document.getElementById('withdraw-field');
    const newWithdrawAmountString = withdrawField.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);

    // step-7
    withdrawField.value = '';
    if (isNaN(newWithdrawAmount)) {
        alert('Enter a valid number.')
        return;
    }


    //step-3
    const withdrawTotalElement = document.getElementById('withdraw-total');
    const previousWithdrawTotalString = withdrawTotalElement.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);

    // /step-5 
    const balanceTotalAmount = document.getElementById('balance-total');
    const balanceTotalAmountString = balanceTotalAmount.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalAmountString);

    if (newWithdrawAmount > previousBalanceTotal) {
        alert('You have no Expected Money');
        return;
    }

    // step-4
    const currentWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    withdrawTotalElement.innerText = currentWithdrawTotal;

    // step-6
    const currentTotalBalance = previousBalanceTotal - newWithdrawAmount;
    balanceTotalAmount.innerText = currentTotalBalance;



})