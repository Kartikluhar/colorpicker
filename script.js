let colorBox = document.getElementById("color-box")
let inputColor = document.getElementById("input-color")
// let taxtarea = document.getElementById("textarea")
let textarea = document.getElementById("textarea")
let copyShow = document.getElementById("copy-show")


function changeColor(){
    let color = `${inputColor.value}`;
    colorBox.style.background = color;
    textarea.innerHTML = `background-color: ${color};`
}

function copycase(){
    textarea.select()
    navigator.clipboard.writeText(textarea.value)
    copyShow.style.display = "block"
    setTimeout(() => {
        copyShow.style.display = "none"
        // console.log("ok")
    }, 1500);
}