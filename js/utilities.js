function getInputFieldValueById(id) {
    return document.getElementById(id).value;
}

function getInnerHTMLById(id) {
    return document.getElementById(id).innerHTML;
}

function showSection(id) {
    document.getElementById('add-money-form').classList.add('hidden');
    document.getElementById('cash-out-form').classList.add('hidden');
    document.getElementById('transactions').classList.add('hidden');

    document.getElementById(id).classList.remove('hidden');
}