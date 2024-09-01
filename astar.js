// find eucleadian distance

// move in any direction

let euclideanDist = 0;

function calculateEucDist(x0, y0, x1, y1) {
    euclideanDist = Math.sqrt(Math.pow(x0 - x1, 2) + Math.pow(y0 - y1, 2));
    return euclideanDist;
}

// find manhattan distance

// move in eight direction (not diagonal)

let manhattanDist = 0;

function calculateManhatDist(x0, y0, x1, y1) {
    manhattanDist = Math.abs(x0 - x1) + Math.abs(y0 - y1);
    return manhattanDist;
}