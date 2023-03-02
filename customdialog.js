const outputBox = document.querySelector('output');
const alertBtn = document.getElementById('alertBtn');
const alertDialog = document.getElementById('alertDialog');
const confirmBtn = document.getElementById('confirmBtn');
const confirmDialog = document.getElementById('confirmDialog');
const promptBtn = document.getElementById('promptBtn');
const promptDialog = document.getElementById('promptDialog');
const nameInput = document.getElementById('name');


alertBtn.addEventListener('click', () => {
    alertDialog.showModal();
});

confirmBtn.addEventListener('click', () => {
    confirmDialog.showModal();
});
confirmDialog.addEventListener('close', () => {
    outputBox.value = `Confirm result: ${confirmDialog.returnValue}`;
});

promptBtn.addEventListener('click', () => {
    promptDialog.showModal();
});
promptDialog.addEventListener('close', () => {
    if(promptDialog.returnValue === 'cancel') {
        outputBox.value =  `Prompt result: User didn't enter anything`;
    } else {
        const name = nameInput.value;
        const nameSanitized = DOMPurify.sanitize(name);
        outputBox.value = `Prompt result: ${nameSanitized}`;
    }
});