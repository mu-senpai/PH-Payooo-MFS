// Cash Out Feature
document.getElementById('btn-trans-cash-out').addEventListener('click', function(event) {
    event.preventDefault();

    const amountDeduct = parseFloat(getInputFieldValueById('add-deduct'));
    let availableBalance = parseFloat(getInnerHTMLById('available-balance'));
    console.log(availableBalance);
    const pinNumber = getInputFieldValueById('trans-out-pin');

    if (String(pinNumber) === '0903') {
        availableBalance = availableBalance - amountDeduct;
        alert('Transaction successful! Withdrawed the amount ' + amountDeduct);
    } else {
        alert('Pin invalid. Transaction unsuccessful!');
    }

    document.getElementById('available-balance').innerText = String(availableBalance);

    const newTransaction = document.createElement('div');
    newTransaction.innerHTML = `
        <h1 class="text-lg font-bold">Bank Withdraw</h1>
        <p class="text-xs text-[#080808]/[0.5]">Amount: ${amountDeduct}</p>
        <p class="text-xs text-[#080808]/[0.5]">New Balance: ${availableBalance}</p>
    `
    document.getElementById('transactions').appendChild(newTransaction);
})