window.addEventListener('keydown', bamnut, false)

    
function bamnut(key) {
    if (key.keycode == 39) {
        document.getElementById("tank").style.left = "19px"
    }
}