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
let mode = "normal";
let gridMode = 0;

function change(event){
    if(event.type === 'mouseover' && mouseDown || event.type === 'mousedown'){
        event.target.style.backgroundColor = "#333";
        if(mode == "erase"){
            event.target.style.backgroundColor = "#fff"; 
        }
        if(mode == "random"){
            let red = Math.floor(Math.random() * 256);
            let green = Math.floor(Math.random() * 256);
            let blue = Math.floor(Math.random() * 256);
            event.target.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
        }
    }
}

buttons.forEach((button) =>{
    button.addEventListener('click', btnClick);

});

function btnClick(event){
    let name = event.target.textContent;
    let id = event.target.id;
    if(name == "Clear"){
        setGrid(gridMode);
    }
    if(id == "32"){
        setGrid(Number(id));
        gridMode = Number(id);
    }
    if(id == "64"){
        setGrid(Number(id));
        gridMode = Number(id);
    }
    if(id == "16"){
        setGrid(Number(id));
        gridMode = Number(id);
    }
    if(name == "Erase"){
        mode = "erase";
    }
    if(name == "Random"){
        mode = "random";
    }
    if(name == "Normal"){
        mode = "normal";
    }
}






setGrid(16);