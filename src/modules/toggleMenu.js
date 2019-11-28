const toggleMenu = () => {
    const menu = document.querySelector('menu'),
        menuItems = menu.querySelectorAll('ul>li'),
        body = document.querySelector('body'),
        header = body.querySelector('header');
        const btnMenu = document.querySelector('.menu'),
         closeBtn = document.querySelector('.close-btn');    
    let interval,
        count = -100;

    const handlerMenu = () => {
        document.body.style.overflow = 'hidden';
        interval = requestAnimationFrame(handlerMenu);
            if(count < 0){
                menu.style.transform = `translate(${count}%)`;
                count+= 4;
            } else{
                cancelAnimationFrame(interval);
            }
    };
        
    const closeMenu =() => {
        document.body.style.overflow = '';
        if (screen.width < 768){
            menu.style.transform = 'translate(-100%)';
        } else{
        
            interval = requestAnimationFrame(closeMenu);
            if(count > -100){
                count-=3;
                menu.style.transform = `translate(${count}%)`;
                    
            } else{
                cancelAnimationFrame(interval);
            }
        }
    };
    
    
            
    body.addEventListener('click', (event) => {
        let target = event.target;
        
        if (target.closest('.menu') !== null){
            if(screen.width < 768){
                if(!menu.style.transform || menu.style.transform === 'translate(-102%)'){
                    document.body.style.overflow = 'hidden';
                    menu.style.transform = 'translate(0)';
                }else {
                    menu.style.transform = 'translate(-100%)';
                    document.body.style.overflow = '';
                }
            }else{
            
                if(!menu.style.transform || menu.style.transform === 'translate(-102%)'|| menu.style.transform === 'translate(-100%)'){
                    handlerMenu();
                }else {
                    count = 0;
                    closeMenu();
                };
            };
        }else if (target.classList.contains('close-btn') || !menu.contains(target)){
            closeMenu();
        } else if(target.closest('li') !== null){
            menuItems.forEach((item, i) => {
               if(item === target.closest('li')){
                   closeMenu();
                    }
            });
        }  
    });
};


export default toggleMenu;