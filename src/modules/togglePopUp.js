let togglePopUp = () => {
    let count = 0;
    let interval;
    const openPopupAnim = () => {
        interval = requestAnimationFrame(openPopupAnim);
            if(count < 1){
                popup.style.opacity = count;
                count+= 0.03;
                
            } else{
                cancelAnimationFrame(interval);
            }
    };

    const closePopupAnim =() => {
        interval = requestAnimationFrame(closePopupAnim);
            if(count > 0){
                
                popup.style.opacity = count;
                count -= 0.03;
                    
            } else{
                cancelAnimationFrame(interval);
                popup.style.display = 'none';
            }
    };

    const popup = document.querySelector('.popup'),
    popupBtn = document.querySelectorAll('.popup-btn');
    
    let topValue = 0;
    

    popupBtn.forEach(elem => {
        elem.addEventListener('click',() => {
            document.body.style.overflow = 'hidden';
            popup.style.display = 'block';
            openPopupAnim();
              
        });
    });

 
    
    popup.addEventListener('click', (event) => {
        let target = event.target;
        if (target.classList.contains('popup-close')){
            closePopupAnim();
            document.body.style.overflow = '';
           
        }else{
            target = target.closest('.popup-content');
            if (!target){
                closePopupAnim();
                document.body.style.overflow = '';
            }
        }
    });
};

export default togglePopUp;