const totalEl = document.getElementById("total");
const remainingEl = document.getElementById("remaining");
const textareaEl = document.getElementById("textarea");

textareaEl.addEventListener("keyup",()=>{
    update();
})

function update () {
    totalEl.innerText = textareaEl.value.length;
    remainingEl.innerHTML = textareaEl.getAttribute("maxlength") - textareaEl.value.length;
}

