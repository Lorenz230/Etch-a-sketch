const grid = document.querySelector('.grid')
const buttons = document.querySelectorAll('div .buttons');

function setGrid(size){
    grid.innerHTML = '';
    let height = grid.clientHeight;
    let gridSize = size*size;
    let dimensions = `${height/size}px`;

    for(let i = 0; i < gridSize; i++){
        let newDiv = document.createElement('div');
        newDiv.style.backgroundColor = "white";
        newDiv.style.height = dimensions;
        newDiv.style.width = dimensions;
        grid.append(newDiv);
    }
    const boxes = document.querySelectorAll(".grid div");

    boxes.forEach((box) => {
    box.addEventListener('mousedown', change);
    box.addEventListener('mouseover', change);

});
}

let mouseDown = false;
let mouseUp = true;
document.body.onmousedown = () => (mouseDown = true);
document.body.onmouseup = () => (mouseDown = false);

function change(event){
    if(event.type === 'mouseover' && mouseDown || event.type === 'mousedown'){
        event.target.style.backgroundColor = "#333";
    }
}

buttons.forEach((button) =>{
    button.addEventListener('click', btnClick);

});

function btnClick(event){
    let name = event.target.textContent;
    let id = event.target.id;
    if(name == "Clear"){
        setGrid(2);
    }
    if(id == "32"){
        setGrid(Number(id));
    }
}



setGrid(16);