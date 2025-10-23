const mainContainer = document.querySelector('#mainContainer');

for (let j = 0; j<16; j++){
    const row = document.createElement('div');
    for (let i = 0; i<16; i++){
        const column = document.createElement('div');
        column.classList.add('gridBox');
        column.id = `box${j}-${i}`;
        column.textContent=`${j},${i}`;
        row.appendChild(column);
    }
    mainContainer.appendChild(row);
}