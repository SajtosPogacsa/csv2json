const form = document.querySelector('form');
const json = document.getElementById('json');
let array = [];

function Arrayify() {
	let input = document.querySelectorAll('#csv')[0].value.split('\n');
	let a = []
	input.forEach(element => {
		let e = element.split(';')
		e.forEach((asd) => {
			a.push(asd)
		})
	})
	for (let i = 0; i < a.length; i += 2) {
		array.push(a[i]);
		array.push(a[i + 1]);
	}
	console.log(array)
}


form.addEventListener('submit', (e) => {
	e.preventDefault();
	array = [];
	Arrayify();
	let data =JSON.stringify(array)
	json.innerHTML = `${JSON.parse(data)}`;
	console.log(JSON.parse(data))
})