const inputConverter = document.querySelector('.money-input');
const outConverter = document.querySelector('.out-money');


inputConverter.addEventListener('input', moneyConverter)
function moneyConverter(e) {
	const value = +e.target.value
	const result = value * 0.89
	outConverter.textContent = result.toFixed(2)
}