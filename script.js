const grid = document.querySelector('.grid')
const buttons = document.querySelectorAll('div .buttons');

for(let i = 0; i < 256; i++){
    let newDiv = document.createElement('div');
    newDiv.style.backgroundColor = "white";
    newDiv.style.height = "40px";
    newDiv.style.width = "40px";
    grid.append(newDiv);
}

const boxes = document.querySelectorAll(".grid div");

boxes.forEach((box) => {
    box.addEventListener('mousedown', change);
    box.addEventListener('mouseover', change);

});

function clear(){
    boxes.forEach((box) =>{
        box.style.backgroundColor = "white";
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
    if(name == "Clear"){
        clear();
    }
}

