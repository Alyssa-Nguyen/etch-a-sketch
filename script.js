

const container = document.querySelector('.container');

function makeDivs() {
    for (let i = 0; i < 256; i++) {
        let div = document.createElement('div');        
        div.classList.add('divBox');
        container.appendChild(div);
    }
}

makeDivs();
