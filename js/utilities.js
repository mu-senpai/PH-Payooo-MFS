function getInputFieldValueById(id) {
    return document.getElementById(id).value;
}

function getInnerHTMLById(id) {
    return document.getElementById(id).innerHTML;
}

function showSection(id) {
    document.getElementById('add-money-form').classList.add('hidden', true);
    document.getElementById('cash-out-form').classList.add('hidden', true);
    document.getElementById('transactions').classList.add('hidden', true);

    document.getElementById(id).classList.remove('hidden');
}