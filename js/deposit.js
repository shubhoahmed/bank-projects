document.getElementById('btn-deposit').addEventListener('click', function () {
    const depositAmount = document.getElementById('deposit-amount');
    const newDepositAmountString = depositAmount.value;
    const newDepositAmount = parseFloat(newDepositAmountString);


    const depositTotalAmount = document.getElementById('deposit-total');
    const previousDepositAmountString = depositTotalAmount.innerText;
    const previousDepositAmount = parseFloat(previousDepositAmountString);

    const currentDepositTotal = previousDepositAmount + newDepositAmount;
    depositTotalAmount.innerText = currentDepositTotal;

    const balanceTotalAmount = document.getElementById('balance-total');
    const balanceTotalAmountString = balanceTotalAmount.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalAmountString);
    const currentTotalBalance = previousBalanceTotal + newDepositAmount;
    balanceTotalAmount.innerText = currentTotalBalance;



    depositAmount.value = '';

})