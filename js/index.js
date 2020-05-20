const output = document.querySelector('#wordcount-output');
const input = document.querySelector('#wordcount-input');

input.addEventListener('keypress', () => {
	output.innerText = `${input.value.split(' ').length} words in text`;

})
