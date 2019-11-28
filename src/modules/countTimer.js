function countTimer (){
    const timerHours = document.querySelector('#timer-hours'),
          timerMinutes = document.querySelector('#timer-minutes'),
          timerSeconds = document.querySelector('#timer-seconds');
   
    function getTimeRemaining(){
        let dateStop = 24 * 3600 * 1000,
        dateNow = new Date().getTime() % (24 * 3600 * 1000),
        timeRemaining = (dateStop - dateNow)/1000,
        seconds = Math.floor(timeRemaining % 60),
        minutes = Math.floor((timeRemaining / 60) % 60),
        hours = Math.floor (timeRemaining / 60 / 60);
        //days =  Math.floor (timeRemaining / 60 / 60 / 24); 
        
        
        return{
            timeRemaining,
            hours,
            minutes,
            seconds
        };
    }
    
    function updateClock(){
        let timer =  getTimeRemaining();     
        
        function dateFormat (time , container){
            if (time < 10){
                container.textContent = '0' + time;
            } else {
                container.textContent = time;
            }
        }
        
        dateFormat(timer.hours, timerHours);
        dateFormat(timer.minutes, timerMinutes);
        dateFormat(timer.seconds, timerSeconds);
        

        
        if (timer.hours <= 0 && timer.minutes <= 0 && timer.seconds <= 0){
            clearInterval();
            timerHours.textContent = '00';
            timerMinutes.textContent = '00';
            timerSeconds.textContent = '00';
            countTimer();
        }
        
    }
    setInterval(updateClock, 1000); 
}

export default countTimer;