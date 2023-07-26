const grid = document.querySelector('.grid')

for(let i = 0; i < 256; i++){
    let newDiv = document.createElement('div');
    newDiv.style.backgroundColor = "white";
    // newDiv.style.border = '1px solid #e6e3e3';
    newDiv.style.height = "32px";
    newDiv.style.width = "32px";
    grid.append(newDiv);
}

const boxes = document.querySelectorAll(".grid div");

boxes.forEach((box) => {
    box.addEventListener('mousedown', change);
    box.addEventListener('mouseover', change);

});

let mouseDown = false;
grid.onmousedown = () => (mouseDown = true);
grid.onmouseup = () => (mouseDown = false);

function change(event){
    console.log(mouseDown);
    if(event.type === 'mouseover' && mouseDown){
        event.target.style.backgroundColor = "black";
    }
}

