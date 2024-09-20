// Add Money Feature
document.getElementById('btn-trans-add-money').addEventListener('click', function(event) {
    event.preventDefault();

    const amountAdd = parseFloat(getInputFieldValueById('add-amount'));
    let availableBalance = parseFloat(getInnerHTMLById('available-balance'));
    console.log(availableBalance);
    const pinNumber = getInputFieldValueById('trans-add-pin');

    if (String(pinNumber) === 'Muhit@420') {
        availableBalance = availableBalance + amountAdd;
        alert('Transaction successful! Added the amount ' + amountAdd);
    } else {
        alert('Pin invalid. Transaction unsuccessful!');
    }

    document.getElementById('available-balance').innerText = String(availableBalance);

    const newTransaction = document.createElement('div');
    newTransaction.innerHTML = `
        <h1 class="text-lg font-bold">Bank Deposit</h1>
        <p class="text-sm">Amount: ${amountAdd}</p>
        <p class="text-sm">New Balance: ${availableBalance}</p>
    `
    document.getElementById('transactions').appendChild(newTransaction);
})