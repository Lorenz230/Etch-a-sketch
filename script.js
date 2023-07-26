const grid = document.querySelector('.grid')

for(let i = 0; i < 256; i++){
    let newDiv = document.createElement('div');
    newDiv.style.backgroundColor = "white";
    newDiv.style.border = '1px solid #e6e3e3';
    newDiv.style.height = "32px";
    newDiv.style.width = "32px";
    grid.append(newDiv);
}



