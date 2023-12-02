// Домашнє завдання
// -----1----
// Напишіть такий JavaScript, щоб після натискання на кнопку button, елемент
// <div id="text"> зникав.
// -----2----
// Напишіть такий код, щоб після натискання на кнопку, вона зникала.
// -----3----
// Створіть дерево, яке показує/приховує дочірні вузли при кліці

// -----1----
const hidebtn = document.querySelector("#hide");
const text = document.querySelector("#text");
const hidebtn2 = document.querySelector("#hide2");
const audio = document.getElementById("Audio1");

hidebtn2.hidden = true;

hidebtn.addEventListener("click", () => {
    text.hidden = !text.hidden;
    hidebtn2.hidden = false;
});

// -----2----
hidebtn2.addEventListener("click", () => {
    hidebtn2.hidden = true;
    hidebtn.hidden = true;
     playAudio();
});
// 
function playAudio() {
    audio.play();
}

// -----3----
document.addEventListener("DOMContentLoaded", () => {
    const tree = document.querySelector("#tree");
    if(tree === null) {
        alert("DOM content was loaded, but tree wasn't found.");
        return;
    }
    const toggleChildElementsButton = document.querySelector("#showTreeButton");
    const childElementsDiv = document.querySelector("#tree_child_elements");
    toggleChildElementsButton.addEventListener("click", () => {
        childElementsDiv.hidden = !childElementsDiv.hidden;
    });
})