import { getInputDirection } from "./input.js";

export const SNAKE_SPEED = 5;
const snakeBody = [{x: 11, y: 11},];
let newSegments = 0;

export function update() {
    addSegments() // call every time updates
    const inputDirection = getInputDirection();
    for (let i = snakeBody.length -2; i >= 0; i--) {
        snakeBody[i + 1] = { ...snakeBody[i]}; 
    }

    snakeBody[0].x += inputDirection.x;
    snakeBody[0].y += inputDirection.y;

    // add code to move snake according to directions given by astar
}

export function draw(gameBoard) {
    snakeBody.forEach(segment => {
        const snakeElement = document.createElement("div");
        snakeElement.style.gridRowStart = segment.y;
        snakeElement.style.gridColumnStart = segment.x;
        snakeElement.classList.add("snake");
        gameBoard.appendChild(snakeElement);
    })
}

export function expandSnake(amount) {
    newSegments += amount;
}

export function onSnake(position, { ignoreHead = false} = {}) { //need major clarification
    return snakeBody.some((segment,index) => {
        if (ignoreHead && index == 0) return false //to make sure snakehead is not comparing to snake head in the array snake body
        return equalPositions(segment, position);
    })
}

export function getSnakeHead() {
    return snakeBody[0];
}

export function snakeIntersection() {
    return onSnake(snakeBody[0], { ignoreHead: true})
}

function equalPositions(pos1, pos2) {
    return pos1.x === pos2.x && pos1.y === pos2.y
}

function addSegments() {
    for (let i = 0; i < newSegments; i++) {
        snakeBody.push({...snakeBody[snakeBody.length-1]}); //adding to snakebody array by duplicating last segment
    }

    newSegments = 0;
}