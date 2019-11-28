const changePhoto = () => {
    const command = document.getElementById('command'),
    row = command.querySelector('.row'), 
    commandPhoto = command.querySelectorAll('.command__photo');
    let srcCommand = [];  
    
    
    commandPhoto.forEach((item, i) =>{
        srcCommand[i] = item.src;
    });
    
    
    
    row.addEventListener('mouseover', (event) =>{
        let target = event.target;
        target = target.closest('.command__photo');
        
        if(target){
            commandPhoto.forEach((item,i) =>{
                if(item === target){
                    event.target.src = event.target.dataset.img;
                } 
                
            });
        }
    });
    
    row.addEventListener('mouseout', (event) =>{
        let target = event.target;
        target = target.closest('.command__photo');
        
        if(target){
            commandPhoto.forEach((item,i) =>{
               
                if(item === target){
                    event.target.src = srcCommand[i];
                } 
                
            });
        }
    });
    }

    export default changePhoto;