let money = 0;

const moneyDisplay = document.getElementById('money');
const clickButton = document.getElementById('clickButton');

clickButton.addEventListener('click', () => {
  money++;
  moneyDisplay.textContent = money;
});

// Add idle income over time
setInterval(() => {
  money++;
  moneyDisplay.textContent = money;
}, 1000); // 1 second interval
