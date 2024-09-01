// defining heuristics valeus

import { getSnakeHead } from "./snake";

let distCurrentToNextNode = 0; //dist between current position in grid to next grid position
let distCurrentToFinalNode = 0; //dist between current position in grid to food (direciton)

let totalHeuristicDistance = 0; //sum of above two

// initializing successor node

let successorNode = [{x: 0, y: 0}];


// find eucleadian distance

// move in any direction

// creating algorithm 
/* 
    x. Create g(distCurrentToNextNode) and h(distCurrentToFinalNode) and {f = g + h} (totalHeuristicDistance)
    x. Create open list (store nodes whose f cost already calculated) and closed list (store nodes whose neighbors have already been evaluated)
    x. Add start node (snake head) to open list
    x. Create an infinite loop
    x. Create temporary variable called 'currentNode' to store lowest f cost node (at start, it will be snake head).
    x. Remove currentNode from open list and add it to closed list
    x. Check if currentNode is equal to food position
            x. if equal break out of loop
    x. For each neighbor nodes of currentNode, if in closed list ignore and go to next neighbour node
    x. If new path to neighbour is shorter (g - distCurrentToNextNode or f cost???) OR neighbour is not in OPEN list:
            x. set fCost of neighbour node
            x. change currentNode = parent of neighbour node
            x. If neighbour is not in open list:
                    x. Add neighbour node to open list
    x. 
    x. If two or more nodes with lowest f cost, then
            choose node with lowest h cost (distCurrentToFinalNode)
    x. 


*/

let openList = [];
let closedList = [];
let successorNodeList = [];

let euclideanDist = 0;

function calculateEucDist(x0, y0, x1, y1) {
    euclideanDist = Math.sqrt(Math.pow(x0 - x1, 2) + Math.pow(y0 - y1, 2));
    return euclideanDist;
}

// find manhattan distance
// move in eight direction (not diagonal)

// let manhattanDist = 0;

// function calculateManhatDist(x0, y0, x1, y1) {
//     manhattanDist = Math.abs(x0 - x1) + Math.abs(y0 - y1);
//     return manhattanDist;
// }

// function to find smalles f cost from openList

function getSmallestFCost() {
    let smallestFCost = Math.min(...openList);
    return smallestFCost;
}

// all functions to calculate heuristics
// function to find h cost (distCurrentToFinalNode)

function getHCost(currentNode, food) {
    return calculateEucDist(currentNode.x, currentNode.y, food.x, food.y);
}

// learn how to find g cost
// for now
function getGCost(currentNode, successorNode) {
    // get successorNode
    
    return calculateEucDist(currentNode.x, currentNode.y, successorNode.x, successorNode.y);
    // OR to get successorNode; get whole open list and find successorNode by iterating through open list
}

// maybe latest method to get successorNodes

function getSuccessorNodes(currentNode) {
    // maybe gets top and right successor nodes
    for (i = currentNode.x; i < currentNode.x + 1; i++) {
        for (j = currentNode.y; j < currentNode.y + 1; j++) {

            // successorNode.x = currentNode.x;
            // successorNode.y = currentNode.y;

            currentNode.x += 1;
            currentNode.y += 1;
            // pushing successorNodes in an array
            successorNodeList.push(currentNode);

    // maybe gets bottom and left successor nodes
    for (i = currentNode.x; i > currentNode.x -1; i--) {
        for (j = currentNode.y; j > currentNode.y -1; j++) {

            currentNode.x -= 1;
            currentNode.y -= 1;
            // pushing remaining successorNodes in the array
            successorNodeList.push(currentNode);
        }
    }
        
}

function getFCost(currentNode) {
    let currentFCost = getGCost() + getHCost();
}

// to check if food is found
function checkFoodFound(currentNode, food) {
    if (currentNode.x == food.x && currentNode.y == food.y) {
        return true;
    } else {
        return false;
    }
}

// main loop
 export function aiLoop() {
    openList[0] = [getSnakeHead()];
    // start of loop
    while(true) {
        let currentNode = getSmallestFCost();
        // to get f-cost of current node
        let currentNodeFCost = getFCost();

        // maybe for loop to change currentNode in 8 directions (top and right successor nodes)
        for (i = currentNode.x; i < currentNode.x + 1; i++) {
            for (j = currentNode.y; j < currentNode.y + 1; j++) {

                currentNode.x += 1;
                currentNode.y += 1;

                // food found condition
                if (checkFoodFound() == true) {
                    alert("Food found by automatic snake");
                }

                openList[openList.length] = currentNode; // adding successor node to open list
                
                // to check if fcost is smaller
                let tempFCost = getFCost(currentNode); //fcost of current node
                if (tempFCost < currentNodeFCost) {
                    let poppedNode = openList.pop();
                    closedList.push(poppedNode);
                }

                
                
            }
        // maybe for loop to change currentNode in 8 direction (bottom and left successor nodes)
        for (i = currentNode.x; i > currentNode.x -1; i--) {
            for (j = currentNode.y; j > currentNode.y -1; j--) {
                currentNode.x -= 1;
                currentNode.y -= 1;

                // food found condition
                if (checkFoodFound() == true) {
                    alert("Food found by automatic snake");
                }

                openList[openList.length] = currentNode; // adding successor node to open list
                
                // to check if fcost is smaller
                let tempFCost = getFCost(currentNode); //fcost of current node
                if (tempFCost < currentNodeFCost) {
                    let poppedNode = openList.pop();
                    closedList.push(poppedNode);
                }
            }
        }
        }

    }
}



// food found condition
// if (checkFoodFound() == true) {
//     alert("Food found by automatic snake");
// }