const bg = document.querySelector('.bg');
const loadingText = document.querySelector('.loading-text');

let load = 0;

let interval = setInterval(blurring, 30);

function blurring() {
  
  load++;

  // bg.style('filter')
  
  if(load > 99) {
    clearInterval(interval);
  }

  loadingText.innerText = `${load}%`;
  loadingText.style.opacity = scale(load, 0, 100, 1, 0)
  bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`;
}

// https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers

// function scale(number, inMin, inMax, outMin, outMax) {
//   return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
// }

// same function as above
const scale = (number, inMin, inMax, outMin, outMax) => {
  return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}