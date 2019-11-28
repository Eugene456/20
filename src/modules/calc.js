const calc = (price = 100) => {

    const calcType = document.querySelector('.calc-type'),
    calcSquare = document.querySelector('.calc-square'),
    calcDay = document.querySelector('.calc-day'),
    calcCount = document.querySelector('.calc-count'),
    totalValue = document.getElementById('total');

    const calcBlock = document.querySelector('.calc-block'),
    calcInputs = calcBlock.querySelectorAll('input');

    calcBlock.addEventListener('input', event => {
    let target = event.target;
    target = target.closest('input');

    if(target){
        calcInputs.forEach(item =>{
            if(item === target){
                item.value = item.value.replace(/[^0-9]/g, '');
            }

        });
    }
    });
    const countSum = () =>{
        let total = 0,
        countValue = 1,
        dayValue = 1;
        const typeValue = calcType.options[calcType.selectedIndex].value,
        squareValue = +calcSquare.value;
        

        if(calcCount.value > 1){
            countValue += (calcCount.value - 1)/10;
        }

        if(calcDay.value && calcDay.value < 5){
            dayValue *= 2;
        } else if (calcDay.value && calcDay.value < 10){
            dayValue *= 1.5;
        }

        if (typeValue && squareValue){
            total = Math.floor(price * typeValue * squareValue * countValue * dayValue);
        } 
           

                
        let result = () =>{
            if (i <= total){
                totalValue.textContent = i;
            } else {
                clearInterval();
            }
            i += 5;
        };
    
        let i = 0;
        setInterval(result, 1);
        
    }
    
    
    calcBlock.addEventListener('change', (event) =>{
        const target = event.target;
        if(target.matches('select') || target.matches('input')){
            countSum()
        }
    });
    
};

export default calc;