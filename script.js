


// create a var to reference the container div
const gridContainer = document.querySelector('.gridContainer');

// create a var to reference the button for input
const gridPrompt = document.querySelector('.input');

// when user click on the button, it will activiate event listener and prompt the user for a number
// to make a grid, it will then call a function makeGrid() to make the grid
gridPrompt.addEventListener('click', () => {
    let input = prompt("For the grid square, pls enter a number from 2-100?");
    console.log(input);
    const madeGrid = makeGrid(input);         //create a var to reference the makeGrid() function, also is calling this func
});

// function to make a grid/box based on the user input of num (# of cell per side)
function makeGrid (num) { 
    for (let i = 0; i < (num*num); i++) {
        let div = document.createElement('div');       // create new div element
        let squareLength = (700 - (num*2))/num;        //create var to get the wide & height for the new div
        squareLength = squareLength+'px';             
        div.style.width = squareLength;
        div.style.height = squareLength;
        //div.style.backgroundColor = 'aliceblue';        //weirdly if there's no border or text content in the div, the div won't show bg color 
        //div.style.border = '1px solid grey';
        div.classList.add("divGrid");                   //adding a new class to the div         
        gridContainer.appendChild(div);                 //appending the div inside of the container div
    }
    //following doesn't work when it is placed outside of this makeGrid() function somehow.
    const divHover = document.querySelectorAll('.divGrid');      //referencing the new div cells just created
    divHover.forEach(item => {
    item.addEventListener('mouseenter', (e) => {
        changeColor(item);
        
    });
});

}


const changeColor = (item) => {
    item.setAttribute('id', 'changeBlack');
};



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




