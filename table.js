// script.js
document.addEventListener('DOMContentLoaded', () => {
    const countInputs = document.querySelectorAll('.count');
    const totalInputs = document.querySelectorAll('.total');
    const grandTotalInput = document.getElementById('grand-total');
    const clearButton = document.getElementById('clear');

    countInputs.forEach((input, index) => {
        input.addEventListener('input', () => {
            const value = input.dataset.value;
            const count = input.value;
            const total = value * count;
            totalInputs[index].value = total.toFixed(2);

            updateGrandTotal();
        });
    });

    clearButton.addEventListener('click', () => {
        countInputs.forEach(input => input.value = '');
        totalInputs.forEach(input => input.value = '');
        grandTotalInput.value = '';
    });

    function updateGrandTotal() {
        let grandTotal = 0;
        totalInputs.forEach(input => {
            grandTotal += parseFloat(input.value) || 0;
        });
        grandTotalInput.value = grandTotal.toFixed(2);
    }
});
