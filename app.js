const container = document.querySelector('.container');

function createDiv(xDimension, yDimension) {
    const div = document.createElement('div');

    div.style.width = `${xDimension}px`; 
    div.style.height = `${yDimension}px`; 

    // Logic leaving a colored trail after hover 
    let isMouseDown = false;
    document.addEventListener('mousedown', () => isMouseDown = true); 
    document.addEventListener('mouseup', () => isMouseDown = false); 
    div.addEventListener('mouseover', (e) => {
        if (isMouseDown) {
            div.style.backgroundColor = 'white'; 
        }
    })

    return div; 
}

function renderCanvas(amountDivPSide) {

    const widthCanvas = container.clientWidth; 
    const widthGrid = widthCanvas / amountDivPSide;
    const amountGridToRender = (widthCanvas**2) / (widthGrid**2); 

    const fragment = document.createDocumentFragment();

    for (let i = 0; i < amountGridToRender; i++) {
        fragment.appendChild(createDiv(widthGrid, widthGrid));
    }

    container.appendChild(fragment);
}


let rangeValue = document.querySelector('#amountDivs');

renderCanvas(rangeValue.valueAsNumber);

rangeValue.addEventListener('change', () => {
    container.textContent = ''; 

    renderCanvas(rangeValue.valueAsNumber)
});