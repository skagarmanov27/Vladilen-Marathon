const startBtn = document.querySelector('#start')
const screens = document.querySelectorAll('.screen')
const timeList = document.querySelector('#time-list')
const timer = document.querySelector('#time')
const board = document.querySelector('#board')
const colors = ['#9400D3', '#4B0082', '#0000FF', '#00FF00', '#FFFF00', '#FF7F00', '#FF0000']

let time = 0
let score = 0

startBtn.addEventListener('click', (event) => {
    event.preventDefault()
    screens[0].classList.add('up')
})

timeList.addEventListener('click', event => {
    if (event.target.classList.contains('time-btn')) {
        time = parseInt(event.target.getAttribute('data-time'))
        screens[1].classList.add('up')
        startGame()
    }
})

function startGame() {
    setInterval(decreaseTime, 1000)
    createCircle()
    setTime(time)
}

function decreaseTime() {
    if (time === 0) {
        finishGame()
    } else {
        let current = --time
        if (current < 10) {
            current = `0${current}`
        }
        setTime(current)
    }
}

board.addEventListener('click', event => {
    if (event.target.classList.contains('circle')) {
        score++
        event.target.remove()
        createCircle()
        getRandomColor()
    }
})

function setTime(value) {
    timer.innerHTML = `00:${value}`
}

function finishGame() {
    timer.parentNode.classList.add('hide')
    board.innerHTML = `<h1>Счет: <span class="primary">${score}</span></h1>`
}

function createCircle() {
    const circle = document.createElement('div')
    const size = getRandomCircle(10, 60)
    const {width, height} = board.getBoundingClientRect()
    const x = getRandomCircle(0, width - size)
    const y = getRandomCircle(0, height - size)
    const colors = getRandomColor()

    circle.classList.add('circle')
    circle.style.top = `${y}px`
    circle.style.left = `${x}px`
    circle.style.width = `${size}px`
    circle.style.height = `${size}px`
    circle.style.background = colors

    board.append(circle)
}

function getRandomCircle(min, max) {
    return Math.round(Math.random() * (max - min))
}


function getRandomColor () {
    const index =  Math.floor(Math.random() * colors.length)
    return colors[index]
} 
