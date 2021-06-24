
//Document ojects
const playArea = document.querySelector('.wrapper');
const randomRgb = document.getElementById('random');
const currentRgb = document.getElementById('rgb')

//adding event listener
playArea.addEventListener('mousemove', generateColor);

//event listener function
function generateColor(e){
    
    const randomRed = Math.floor(Math.random() * 251);
    const randomGreen = Math.floor(Math.random() * 251);
    const valueX = e.offsetX;
    const valueY = e.offsetY;
    currentRgb.textContent = `${valueX},${valueY},40`;
    randomRgb.textContent = `${randomRed},${randomGreen},40`;
    playArea.children[0].style.backgroundColor = `rgb(${randomRed}, ${randomGreen}, 40)`;
    playArea.children[1].style.backgroundColor = `rgb(${valueX}, ${valueY}, 40)`;
    
}