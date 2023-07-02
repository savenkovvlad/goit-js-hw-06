function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
  }
  
  
  const changeColor = document.querySelector('.change-color');
  const color = document.querySelector('.color');
  const body = document.querySelector('body');
  
  changeColor.addEventListener('click', onchangeColor);
  
  function onchangeColor() {  
    const randomColor = `${getRandomHexColor()}`;
    
    body.style.background = randomColor;
    color.textContent = randomColor;
    console.dir(randomColor);
   
  };