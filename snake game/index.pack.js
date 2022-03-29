const grid = document.querySelector('.grid')
const Button = document.getElementById('start')
const score = document.getElementById('score')
let squares = []
let currentSnake = [2,1,0]
let direction = 1

function createGrid() {
    //create 100 squares
    for (let i=0; i < 100; i++) {
     //creating elements
    const square = document.createElement('div')
    console.log(square)

    square.classList.add("square")

    grid.appendChild(square)
    //adding styles
    
    //pushing the elemnent and css to the grid
    squares.push(square)

    
    }
    console.log(squares)
}
createGrid()
//snakes body
currentSnake.forEach(index => squares[index].classList.add('snake'))

function move(){
    //adding a block to the snakes body 
    const tail = currentSnake.pop()
    console.log(tail)
    console.log(currentSnake)
    squares[tail].classList.remove('snake')
    currentSnake.unshift(currentSnake[0]+direction)
    console.log(currentSnake)
    
    squares[currentSnake[0]].classList.add('snake')

}
move()
let timerId=setInterval(move,1000)

clearInterval(timerId)


function control(e) {
    //adding direction
    if (e.keyCode === 39) {
        console.log('right pressed')
        direction=1
    } else if (e.keyCode === 38) {
        direction = -width
        console.log('up pressed')
    } else if (e.keyCode === 37) {
        console.log('left pressed')
        direction = -1
    } else if (e.keyCode === 40) {
        console.log('down pressed')
    }
}
document.addEventListener('keyup', control)
