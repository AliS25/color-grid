function drawTiles(){
    const grid = document.querySelector("#grid")
    for(let i = 0; i<10; i++){
        for(let j = 0; j<10; j++){
            let tile = document.createElement("div")
            tile.style.position = "absolute"
            tile.style.top = i*50+20+"px"
            tile.style.left = j*50+20+"px"
            tile.style.backgroundColor = "rgb("+(i)*19.2 +","+(23*(j)+32)+","+(8.1*(i)+8.1*(j)+63)+")"
            // tile.style.border = "solid white"
            tile.classList.add("tiles")
            // tile.onclick = function(){
            //     const tiles = document.querySelectorAll(".tiles")
            //     tiles.forEach(item => {
            //         item.style.backgroundColor = tile.style.backgroundColor
            //         }); 
            //         setTimeout(() => {
            //             drawTiles()
            //         }, 750);
                               
            //     };


            grid.appendChild(tile)
        }
    }
}


