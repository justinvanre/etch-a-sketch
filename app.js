
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
    const container = document.querySelector('.container');

    const widthCanvas = container.clientWidth; 
    const widthGrid = widthCanvas / amountDivPSide;
    const amountGridToRender = (widthCanvas**2) / (widthGrid**2); 

    for (let i = 0; i < amountGridToRender; i++) {
        container.appendChild(createDiv(widthGrid, widthGrid))
    }
}


renderCanvas(50); 