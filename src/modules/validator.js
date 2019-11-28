const valid = () =>{
class Validator{
	constructor({selector, pattern = {}, method}){
		this.form = document.querySelector(selector);
		this.pattern = pattern;
		this.method = method;
		this.elementsForm =[...this.form.elements].filter(item => {
			return item.tagName.toLowerCase() !== 'button' &&
			item.type !== 'button';
		});
		this.error = new Set();
	}
	
	init(){
		this.applyStyle();
		this.setPattern();
		this.elementsForm.forEach(elem => elem.addEventListener('change', this.checkIt.bind(this)));
		this.form.addEventListener('submit', e =>{
			this.elementsForm.forEach(elem => this.checkIt({target: elem}));
			if(this.error.size){
				e.preventDefault();
			}
		});
	}

	isValid(elem){
		const validatorMedhot ={
			notEmpty(elem){
				if(elem.value.trim() === ''){
					return false;
				}
				return true;
			},
			pattern(elem,pattern){
				return pattern.test(elem.value);
			}
		};
		if(this.method){
			const method = this.method[elem.id];

			if(method){
				return method.every(item =>  validatorMedhot[item[0]](elem, this.pattern[item[1]]));
			}
		} else{
			console.warn('Необходимо передать id полей ввода и методы проверки этих полей');
		}
		


		return true;
	}

	checkIt(event){
		const target = event.target;

		if(this.isValid(target)){
			this.showSuccess(target);
			this.error.delete(target);
		} else{
			this.showError(target);
			this.error.add(target);
		}
		
	}

	showError(elem){
		elem.classList.remove('success');
		elem.classList.add('error');
		if(elem.nextElementSibling && elem.nextElementSibling.classList.contains('validator-error')){
			return;
		}
		const errorDiv =document.createElement('div');
		errorDiv.textContent = 'Ошибка в этом поле';
		errorDiv.classList.add('validator-error');
		elem.insertAdjacentElement('afterend', errorDiv);
	}

		showSuccess(elem){
		elem.classList.remove('error');
		elem.classList.add('success');
		if(elem.nextElementSibling && elem.nextElementSibling.classList.contains('validator-error')){
			elem.nextElementSibling.remove();
		}
	}

	applyStyle(){
		const style = document.createElement('style');
		style.textContent=`
		input.success {
			border: 2px solid green
		}
		input.error{
			border: 2px solid red
		}
		.validator-error{
			font-size: 12px;
			font-family: sans-serif;
			color: red;
		}
		`;
		document.head.appendChild(style);
	}
	setPattern(){

		if(!this.pattern.phone){
			this.pattern.phone =/^\+?[78]([-()]*\d){10}$/;
		}
		if(!this.pattern.email){
			this.pattern.email =/^\w+@\w+\.\w{2,}$/;
		}
			
	}
}

const validForm1 = new Validator({
	selector: '#form1',
	pattern: {
		'name': /[А-Яа-яЁё]/,
		'phone': /^\d{11}$/
	},
	method: {
		'form1-name':[
			['notEmpty'],
			['pattern', 'name'],
		],
		'form1-phone':[
			['notEmpty'],
			['pattern', 'phone'],  
		],
		'form1-email':[
			['notEmpty'],
			['pattern', 'email'],
		]
	}
});

const validForm2 = new Validator({
	selector: '#form2',
	pattern: {
		'name': /[А-Яа-яЁё]/,
		'phone': /^\d{11}$/,
		'message': /[А-Яа-яЁё]/
	},
	method: {
		'form2-name':[
			['notEmpty'],
			['pattern', 'name'],
		],
		'form2-phone':[
			['notEmpty'],
			['pattern', 'phone'],  
		],
		'form2-email':[
			['notEmpty'],
			['pattern', 'email'],
		],
		'form2-message':[
			['notEmpty'],
			['pattern', 'message'],
		]
	}
});

const validForm3 = new Validator({
	selector: '#form3',
	pattern: {
		'name': /[А-Яа-яЁё]/,
		'phone': /^\d{11}$/
	},
	method: {
		'form3-name':[
			['notEmpty'],
			['pattern', 'name'],
		],
		'form3-phone':[
			['notEmpty'],
			['pattern', 'phone'],  
		],
		'form3-email':[
			['notEmpty'],
			['pattern', 'email'],
		]
	}
});

validForm1.init();
validForm2.init();
validForm3.init();


}

export default valid;


