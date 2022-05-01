let contextMenu = document.getElementById("contextMenu")

function contextHandler(event) {
    event.preventDefault()

    if(contextMenu.style.display === "none") {
        contextMenu.style.display = "block"
        contextMenu.style.left = event.pageX + 'px'
        contextMenu.style.top = event.pageY + 'px'
    } else {
        contextMenu.style.left = event.pageX + 'px'
        contextMenu.style.top = event.pageY + 'px'
    }
} 
function clickContextMenu () {
    contextMenu.style.display = "none"
}

function keyDownHandler (event){
    if (event.keyCode === 27) {
        contextMenu.style.display = "none"
    }
}



document.body.addEventListener("contextmenu", contextHandler)
document.body.addEventListener("click", clickContextMenu)
document.body.addEventListener("keydown", keyDownHandler)