const canineBtn = document.getElementById('canineBtn');
const canineDialog = document.getElementById('canineDialog');
const felineBtn = document.getElementById('felineBtn');
const felineDialog = document.getElementById('felineDialog');
const otterBtn = document.getElementById('otterBtn');
const otterDialog = document.getElementById('otterDialog');

canineBtn.addEventListener('click', () => {
    canineDialog.showModal();
});

felineBtn.addEventListener('click', () => {
    felineDialog.showModal();
});

otterBtn.addEventListener('click', () => {
    otterDialog.showModal();
});

