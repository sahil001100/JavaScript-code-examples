// Counter script
let count = 0;

const counterDisplay = document.getElementById("counter");
const incrementButton = document.getElementById("increment");
const decrementButton = document.getElementById("decrement");
const resetButton = document.getElementById("reset");
incrementButton.addEventListener("click", () => {
    count++;
    counterDisplay.textContent = count;
    incrementButton.style.color = "lightgreen";
    
});


decrementButton.addEventListener("click", () => {
    count--;
    counterDisplay.textContent = count;
    decrementButton.style.color = "lightcoral";
});

resetButton.addEventListener("click", () => {
    count = 0;
    counterDisplay.textContent = count;
    resetButton.style.color = "lightblue";
});