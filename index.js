const form = document.querySelector('form');
let array = [];

function Arrayify() {
	let input = document.querySelectorAll('#csv')[0].value.split('\n');
	let a = []
	input.forEach(element => {
		let e = element.split(',')
		a.push(e[0]);
		a.push(e[1]);
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
})