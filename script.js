
// reference the container div
const gridContainer = document.querySelector('.gridContainer');

// reference the 'Create a Grid" button for user input
const gridPrompt = document.querySelector('.input');

const resetGrid = document.querySelector('.reset');




resetGrid.addEventListener('click', () => {
    removeAllChildNodes(gridContainer);
    makeGrid(16);
})

// set the default grid to 16 square 
function defaultGrid() {
    makeGrid(16);
}
// generic remove child function, using parent node as an arg, this func will remove all childNodes ex: all divs within gridContainer
function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

// click event listenener on 'Create a Grid' button to reset grid (remove all cells) & prompt user for grid size, then create grid based on user's input. 
gridPrompt.addEventListener('click', () => {
    removeAllChildNodes(gridContainer);
    let input = prompt("For the grid square, pls enter a number from 2-100?"); 
    validateNum(input);       
});


// to validate the number for the grid size, cannot be over 100 or less than 2
function validateNum(num) {    
    if (num >= 2 && num <= 100) {
        makeGrid(num);
    } else {
        do {
             num = prompt("invalid, pick a number");
        }
        while (num < 2 || num > 100);
        makeGrid(num);
    }
}


// function to make a grid/box based on the user input of num (# of cell per side)
function makeGrid(num) { 
    for (let i = 0; i < (num*num); i++) {
        let div = document.createElement('div');       // create new div element
        let squareLength = (700-(num*2))/num;        //create var to get the wide & height for the new div
        squareLength = squareLength+'px';             
        div.style.width = squareLength;
        div.style.height = squareLength;             
        div.classList.add("divGrid");                   //adding a new class to the div  weirdly if there's no border or text content in the div, the div won't show bg color        
        gridContainer.appendChild(div);                 //appending the div inside of the container div
    }
                                                             //following doesn't work when it is placed outside of this makeGrid() function somehow.
    const divHover = document.querySelectorAll('.divGrid');      //referencing the new div cells just created
    const hoverBlack = document.querySelector('#hoverBlack');
    const hoverPink = document.querySelector('#hoverPink');
    
    hoverBlack.addEventListener('click', () => {
        divHover.forEach(item => {
            item.addEventListener('mouseenter', (e) => {
                changeBlack(item);
            });
        });    
    });

    hoverPink.addEventListener('click', () => {
        divHover.forEach(item => {
            item.addEventListener('mouseenter', (e) => {
                changePink(item);
            });
        });    
    });   

}



const changeBlack = (item) => {
    item.setAttribute('id', 'changeBlack');
}; 

const changePink = (item) => {
    item.setAttribute('id', 'changePink');
}



defaultGrid();

/* 
the following works even though it is out of makeGrid() function, not sure why yet, maybe 
bcos it's referencing gridContainer, which was created outside/globally?

gridContainer.addEventListener('mouseover', function (e) {
    if (e.target.matches('.divGrid')) {
        e.target.classList.add('active');
    }
});


following is old code for the first part of the project, before a user input is prompted:

function makeDivs() {
    for (let i = 0; i < 256; i++) {
        let div = document.createElement('div');        
        div.classList.add('divBox');
        container.appendChild(div);
    }
}

makeDivs();

// looping through the divs/boxes and changing the color by
// hovering the mouse over them

const divBoxes = document.querySelectorAll('.divBox');

divBoxes.forEach(item => {
    item.addEventListener('mouseenter', (e) => {
        changeColor(item);
        //item.style.backgroundColor = 'black';
    });
});

// function to change color by adding id element
// do I use document.createElement('')  ?? 

const changeColor = (item) => {
    item.setAttribute('id', 'changeBlack');

};


*/




