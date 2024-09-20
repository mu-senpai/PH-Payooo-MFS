// Cash Out Feature
document.getElementById('btn-trans-cash-out').addEventListener('click', function(event) {
    event.preventDefault();

    const amountDeduct = parseFloat(getInputFieldValueById('add-deduct'));
    let availableBalance = parseFloat(getInnerHTMLById('available-balance'));
    console.log(availableBalance);
    const pinNumber = getInputFieldValueById('trans-out-pin');

    if (String(pinNumber) === 'Muhit@420') {
        availableBalance = availableBalance - amountDeduct;
        alert('Transaction successful! Deducted the amount ' + amountDeduct);
    } else {
        alert('Pin invalid. Transaction unsuccessful!');
    }

    document.getElementById('available-balance').innerText = String(availableBalance);

    const newTransaction = document.createElement('div');
    newTransaction.innerHTML = `
        <h1 class="text-lg font-bold">Bank Withdraw</h1>
        <p class="text-sm">Amount: ${amountDeduct}</p>
        <p class="text-sm">New Balance: ${availableBalance}</p>
    `
    document.getElementById('transactions').appendChild(newTransaction);
})