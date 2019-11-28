const navProg = () => {
    let intervalScroll;
    let scrollVert = 0;
    let placeScroll = 0;
    const menu = document.querySelector('menu'),
    menuItems = menu.querySelectorAll('ul>li');
    const scrolling = () => {
        intervalScroll = requestAnimationFrame(scrolling);
                        
        if(scrollVert < placeScroll){
            window.scrollTo(0, scrollVert) ;
            scrollVert += 60;
        } else{
            cancelAnimationFrame(intervalScroll);
            scrollVert = 0;
        }
    };

    menuItems.forEach((item, i)=>{
        let linkMenu = menuItems[i].querySelector('a');
        linkMenu.setAttribute('href', '#');
        menuItems[i].addEventListener('click', () => {
            
            
           if (i == 0){
            placeScroll = 900;   
            } 
            switch (i){
                case 1: placeScroll = 2082;
                break;
                case 2: placeScroll = 3020;
                break;
                case 3: placeScroll = 4120;
                break;
                case 4: placeScroll = 5220;
                break;
            }
            scrolling();
            
        });
    });
    const main = document.querySelector('main'),
    nextSlide = main.querySelector('a');
    nextSlide.setAttribute('href', '#')
    nextSlide.addEventListener('click', ()=>{
        placeScroll = 900; 
        scrollVert = window.scrollY;
        scrolling();
    });
}

export default navProg;