let colorBox = document.getElementById("color-box")
let inputColor = document.getElementById("input-color")
// let taxtarea = document.getElementById("textarea")
let textarea = document.getElementById("textarea")

function changeColor(){
    let color = `${inputColor.value}`;
    colorBox.style.background = color;
    textarea.innerHTML = `background-color: ${color};`
}

function copycase(){
    textarea.select()
    navigator.clipboard.writeText(textarea.value)

}