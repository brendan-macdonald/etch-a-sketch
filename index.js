let color = "black" 


// Function to create grid, receiving optional parameter specifying number of squares in the grid (size x size)
function createGrid(size) {
    let gridContainer = document.querySelector('.grid-container');
    let squares = gridContainer.querySelectorAll('div');
    squares.forEach((div) => div.remove());
    gridContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    gridContainer.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    let squareAmount = size * size;
    for ( let i = 0; i < squareAmount; i++) {
        let divSquare = document.createElement('div');
        divSquare.style.backgroundColor = "white";
        divSquare.addEventListener("mouseover", squareColor);
        gridContainer.insertAdjacentElement("beforeend", divSquare);
    }
}

createGrid(16)


//  Functions to change grid colors

function squareColor() {
    if (color == "rainbow") {
        this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
    } else if (color == "white") {
        this.style.backgroundColor = "white";
    } else {
        this.style.backgroundColor = 'black';
    }
}

function selectColor(colorChoice) {
    color = colorChoice
}





const message = document.getElementById("message");

function changeSize(inputSize) {
    if (inputSize >= 1 && inputSize <= 100){
        createGrid(inputSize);
        message.textContent = "";

    } else {
        message.textContent = "Provide a number between 1 and 100";
    }
    
} 

function clearGrid() {
    let divs = document.querySelectorAll("div")
    divs.forEach((div) => div.style.backgroundColor = "white")
}

// function createGrid(size) {
//     let gridContainer = document.querySelector('.grid-container');
//     let squares = gridContainer.querySelectorAll('div');
    
//     gridContainer.style.gridTemplateColumns = (`reapet(${size}, 1fr)`);
//     gridContainer.style.gridTemplateRows = (`reapet(${size}, 1fr)`);

//     let numberOfSquares = size * size;
//     for (let i = 0; i < numberOfSquares; i++) {
//         let div = document.createElement('div')
//         div.style.backgroundColor = "yellow";
//         gridContainer.insertAdjacentElement("beforeend", div)
//     }
// }


// document.addEventListener("DOMContentLoaded", function() {
//     createGrid(5);
// })