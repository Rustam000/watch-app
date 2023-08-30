function clock() {
    const hoursArrow = document.querySelector('.hours');
    const minutesArrow = document.querySelector('.minutes');
    const secondsArrow = document.querySelector('.seconds');
    const resetButton = document.getElementById('resetButton');
    const deg = 6;
  
    let isPaused = false;   
    
    const updateClock = () => {
      if (!isPaused) {
        const now = new Date();
  
        const hours = now.getHours() * 30;
        const minutes = now.getMinutes() * deg;
        const seconds = now.getSeconds() * deg;
  
        hoursArrow.style.transform = `rotateZ(${hours + (minutes / 12)}deg)`;
        minutesArrow.style.transform = `rotateZ(${minutes}deg)`;
        secondsArrow.style.transform = `rotateZ(${seconds}deg)`;
      }
    };
  
    
    const interval = setInterval(updateClock, 1000);
  
    
    resetButton.addEventListener('click', () => {
      isPaused = true; 
      hoursArrow.style.transition = 'none';  
      hoursArrow.style.transform = 'rotateZ(0deg)'; 
      setTimeout(() => {
        isPaused = false; // 
        hoursArrow.style.transition = 'transform 0.5s cubic-bezier(0.4, 2.1, 0.8, 1)';
      }, 100);
    });
  
   
    updateClock();
  }
  
  clock();
  