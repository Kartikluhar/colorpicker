let colorBox = document.getElementById("color-box")
let inputColor = document.getElementById("input-color")
// let taxtarea = document.getElementById("textarea")
let textarea = document.getElementById("textarea")
let copyShow = document.getElementById("copy-show")
let copycolorShow = document.getElementById("copy-show-color")


function changeColor(){
    let color = `${inputColor.value}`;
    colorBox.style.background = color;
    textarea.innerHTML = `background-color: ${color};
color: ${color}`
}

function copybackgroundcase(){
    let color = `${inputColor.value}`;
    let background_color = `background-color: ${color}`
    textarea.select()
    navigator.clipboard.writeText(background_color)
    copyShow.style.display = "block"
    setTimeout(() => {
        copyShow.style.display = "none"
        // console.log("ok")
    }, 1500);
}

function copycolorcase(){
    let color = `${inputColor.value}`;
    let _color = `color: ${color}`
    textarea.select()
    navigator.clipboard.writeText(_color)
    copycolorShow.style.display = "block"
    setTimeout(() => {
        copycolorShow.style.display = "none"
        // console.log("ok")
    }, 1500);
}