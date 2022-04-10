let btnSave = document.querySelector('button')
let table = document.querySelector('table')

let titleInput= document.querySelector('#title')
let startInput= document.querySelector('#start')
let endInput= document.querySelector('#end')
let hoursInput= document.querySelector('#hours')
let numberInput= document.querySelector('#number')
let operationsInput= document.querySelector('#operations')

btnSave.addEventListener('click', () => {
	let title= titleInput.value;
	let start= startInput.value;
	let end= endInput.value;
	let hours=hoursInput.value;
	let number=numberInput.value;
	let operations=operationsInput.value;

	let template= `
		            <tr>
		            	<td>${title}</td>
		   	            <td>${start}</td>
		   	            <td>${end}</td>
	                    <td>${hours}</td>
	                    <td>${number}</td>
	       	            <td>${operations}</td>
	                    </tr>`;

	    table.innerHTML+=template;
})