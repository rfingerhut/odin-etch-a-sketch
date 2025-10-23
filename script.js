const gridContainer = document.querySelector('#gridContainer');

for (let j = 0; j<16; j++){
    const row = document.createElement('div');
    for (let i = 0; i<16; i++){
        const column = document.createElement('div');
        column.classList.add('gridBox');
        column.id = `box${j}-${i}`;
        column.textContent=`${j},${i}`;
        row.appendChild(column);
    }
    gridContainer.appendChild(row);
}
const createNewGridBtn = document.querySelector('#createNewGridBtn');
createNewGridBtn.addEventListener('click', () => {
    let numBoxes = ''
    let msg = `Enter the number of boxes you'd like in your grid. Must be 100 or less!`
    do{
        numBoxes = Number(prompt(msg));
        if (numBoxes > 100 || isNaN(numBoxes) || numBoxes <= 0){
            msg = `Please enter a number that is less than or equal to 100!`;
        }
    } while (numBoxes > 100 || isNaN(numBoxes) || numBoxes <= 0)
    alert(`Number of boxes will be ${numBoxes}`);
});



function newGrid(){
    
   
}