var prvi = document.getElementsByClassName("link")[0];
var drugi = document.getElementsByClassName("link")[2];
var treci = document.getElementsByClassName("link")[1];
var cetvrti = document.getElementsByClassName("link")[3];
var main = document.getElementsByClassName("main")[0];

document.addEventListener("click", provera, false);

function provera(evObj) {
    if (evObj.target === prvi) {
        main.classList.remove("anim4");
        main.classList.add("anim1");
    } else if (evObj.target === drugi) {
        main.classList.remove("anim1");
        main.classList.add("anim2");
    } else if (evObj.target === treci) {
        main.classList.remove("anim2");
        main.classList.add("anim3");
    } else if (evObj.target === cetvrti) {
        main.classList.remove("anim3");
        main.classList.add("anim4");
    }
    
}