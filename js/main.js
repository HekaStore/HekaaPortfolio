let nav = document.getElementById("nav");
let countText = document.getElementById("demo");
let judulHeader = document.getElementById("judul-header");




window.onscroll = function() {Headers()};
function Headers() {
    if(document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
        nav.style.height = "50px";
        nav.style.position = "fixed";
        judulHeader.style.fontSize = "1rem"

        
    } else {
        nav.style.position = "fixed";
        nav.style.height = "100px";
        judulHeader.style.fontSize = "2rem"
    }
};

window.addEventListener("keydown", (e) => {
    countText.innerText = "[" + e.key + "]";
    switch(e.key) {
        case 'ArrowUp':
            countText.style.fontSize = "1rem";
        break;
        case 'ArrowLeft' :
            countText.style.fontSize = "1rem";
        break;
        case 'ArrowRight':
            countText.style.fontSize = "1rem";
        break;

        case 'ArrowDown' :
            countText.style.fontSize = "1rem";
        break;

        default:
            countText.style.fontSize = "2rem";
            break;
    }
});