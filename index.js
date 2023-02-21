'use strict';

const blob = document.getElementById("blob");

window.onpointermove = event => { 
  const { clientX, clientY } = event;
  
  blob.animate({
    left: `${clientX}px`,
    top: `${clientY}px`
  }, { duration: 2500, fill: 'forwards' });
}


//text effect

const letters = "#@!$%^&*()><,.:;#`}{#]+=_-";
const h1 = document.getElementById('h1')
let interval = null;

window.addEventListener('load',crypt)

function crypt(){
  let iteration = 0;
  let interval = setInterval(() => {
  h1.innerText = h1.innerText.split("").map((letter, index) => 
  {
        if(index < iteration) {
          return h1.dataset.value[index];
        }
      
        return letters[Math.floor(Math.random() * 26  )]
  }).join("");
    
    if(iteration >= h1.dataset.value.length)
  { 
      clearInterval(interval);
  }
    
    iteration += 1 / 4;
  }, 50);
 
}



  
  
