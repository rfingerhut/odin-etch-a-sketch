const gridContainer = document.querySelector('#gridContainer');

const defaultBoxes = 10;
newGrid(defaultBoxes);

const createNewGridBtn = document.querySelector('#createNewGridBtn');
createNewGridBtn.addEventListener('click', () => {
    let numBoxes = ''
    let msg = `Enter the number of rows you'd like in your grid. Must be 100 or less!`
    do{
        numBoxes = Number(prompt(msg));
        if (numBoxes > 100 || isNaN(numBoxes) || numBoxes <= 0){
            msg = `Please enter a number that is less than or equal to 100!`;
        }
    } while (numBoxes > 100 || isNaN(numBoxes) || numBoxes <= 0)
    clearGrid();
    newGrid(numBoxes);

});

function clearGrid(){
    gridContainer.replaceChildren();
}

function newGrid(numBoxes){
    let width = 50*numBoxes;
    let height = width;
    gridContainer.setAttribute('style', `width: ${width}px; height: ${height}px;`);
    for (let j = 0; j<numBoxes; j++){
        const row = document.createElement('div');
        for (let i = 0; i<numBoxes; i++){
            const column = document.createElement('div');
            column.classList.add('gridBox');
            column.id = `box${j}-${i}`;
            column.addEventListener('click', () => {
                if (!column.classList.contains('clicked')){
                    column.classList.add('clicked');
                    column.setAttribute('style', `opacity: 0.1;`)
                } else {
                    let opacity = Number(column.style.opacity)+0.2;
                    column.setAttribute('style', `opacity:${opacity};`)
                }
            });
            row.appendChild(column);
        }
        gridContainer.appendChild(row);
    }
}
