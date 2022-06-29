const board = document.querySelector('.board')
const colors = ['#9400D3', '#4B0082', '#0000FF', '#00FF00', '#FFFF00', '#FF7F00', '#FF0000']
const squaresNumber = 300

for (let i = 0; i < squaresNumber; i++) {
    const  square = document.createElement('div')
    square.classList.add('square') 

    square.addEventListener('mouseover', () => setColor(square)) 
    square.addEventListener('mouseleave', () => removeColor(square)) 

    board.append(square)
}

function setColor(element) {
    const color = getRandomColor
    element.style.backgroundColor = color
}

function removeColor(element) {
    element.style.backgroundColor = '#1d1d1d'
    element.style.boxShadow = `0 0 2px #000`
}

function getRandomColor () {
    const index =  Math.floor(Math.random() * colors.length)
    return colors[index]
} 
