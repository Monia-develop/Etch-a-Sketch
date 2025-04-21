const container = document.querySelector('.container');

createInitialGrid();

function createInitialGrid(){
    const n = 16; 

    for (let i = 0; i < n * n; i++) {
        const div = document.createElement('div');
        div.classList.add('square');
        div.style.width = `calc(100% / ${n})`;
        div.style.height = `calc(100% / ${n})`;
        container.appendChild(div);
    }

    addHover();  
}

function addHover() {
    const squares = document.querySelectorAll('.square');
    squares.forEach(square => {
        square.style.backgroundColor = getRandomColor();
        square.dataset.opacity = 0.1;
        square.style.opacity=0.1;
        square.addEventListener('mouseover', () => {
            let currentOpacity = parseFloat(square.dataset.opacity);
            if(currentOpacity<1){
                currentOpacity =Math.min(currentOpacity + 0.2, 1);
                square.dataset.opacity = currentOpacity.toFixed(1);
                square.style.opacity = currentOpacity;
            }
        });
    });
}

function removeGrid(){
    const buttonReset = document.querySelector('#button');
    buttonReset.addEventListener('click', () =>{
        createNewGrid();
    });
}
removeGrid();

function createNewGrid(){
    let n = prompt('Enter the number of squares per side for the new grid (max 100):');
    
    if(n<1|| isNaN(n) || n>100){
        alert('enter a valid number between 1 and 100 please');
    }

    removeDiv(); 
    
    for (let i = 0; i < n * n; i++) {
        const div = document.createElement('div');
        div.classList.add('square');
        div.style.width = `calc(100% / ${n})`;
        div.style.height = `calc(100% / ${n})`;
        container.appendChild(div);
    }
    
    addHover();  
}

function removeDiv() {
    const squares = document.querySelectorAll('.square');
    squares.forEach(square => square.remove());
}

function getRandomColor(){
    const letters = '0123456789ABCDEF';
    let randomColor ='#';
    for(let i=0; i<6;i++){
        randomColor += letters[Math.floor(Math.random()  * 16)];
    }
    return randomColor;
}