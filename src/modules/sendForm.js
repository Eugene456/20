const sendForm = (formId) =>{
    const errorMessage = 'Что-то пошло не так ((',
    loadMessage = 'Загрузка...',
    succesMessage = 'Спасибо! Мы скоро с вами свяжемся!';
    const form = document.getElementById(`${formId}`);
    const inputs = form.querySelectorAll('input');
    const button = form.querySelector('button');
    
    form.addEventListener('click', (event) =>{
        
        button.removeAttribute('disabled');
        
        if(form.querySelectorAll('.validator-error')){
				button.setAttribute('disabled', 'disabled');
			} 
		
	    	
    });
    const statusMessage = document.createElement('div');
    statusMessage.style.cssText = 'font-size: 2rem; color: white;'
   
    form.addEventListener('submit', (event) => {
    	
        event.preventDefault();

        form.appendChild(statusMessage);
        statusMessage.classList.add('loader');
        const formData = new FormData(form);
        
        postData(formData)
            .then ((response)=>{
                if(response.status !== 200){
                    throw new Error('status network not 200');
                }
                statusMessage.classList.remove('loader');
                statusMessage.textContent = succesMessage;
                inputs.forEach(item => item.value = '');
            })
            .catch (error =>{
                statusMessage.textContent = errorMessage;
                statusMessage.classList.remove('loader');
                console.error(error);
            });
    });

    const postData = (formData) => {
        return fetch('./server.php', {
            method: 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body: formData
        });
    }

}

export default sendForm;