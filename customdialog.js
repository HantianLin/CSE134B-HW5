const outputBox = document.querySelector('output');
const alertBtn = document.getElementById('alertBtn');
const alertDialog = document.getElementById('alertDialog');
const confirmBtn = document.getElementById('confirmBtn');
const confirmDialog = document.getElementById('confirmDialog');


alertBtn.addEventListener('click', () => {
    alertDialog.showModal();
});

confirmBtn.addEventListener('click', () => {
    confirmDialog.showModal();
});

confirmDialog.addEventListener('close', () => {
    outputBox.value = `Confirm result: ${confirmDialog.returnValue}`
});