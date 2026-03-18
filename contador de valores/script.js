const value = document.getElementById('value');
const maisButton = document.getElementById('mais');
const menosButton = document.getElementById('menos');
const resetButton = document.getElementById('reset');

const updateValue = () => {
    value.innerHTML = count;
};

let count = 0;
let intervalId = 0;

maisButton.addEventListener('mousedowm', () => {
    intervalId = setInterval(() => {
        count += 1;
        updateValue();
    },100);
});

menosButton.addEventListener('mousedowm', () => {
    intervalId = setInterval(() => {
        count -= 1;
        updateValue();
    },100);
});

resetButton.addEventListener('mousedowm', () => {
    count = 0;
    updateValue();
});

document.addEventListener('mouseup', () => clearInterval(intervalId));