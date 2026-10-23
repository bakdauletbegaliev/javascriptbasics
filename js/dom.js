
let paragraph = document.getElementById("changeableMessage");

document.getElementById("changeTextButton").addEventListener("click", function () {
    paragraph.textContent = "The text was changed with JavaScript!";
});

document.getElementById("resetTextButton").addEventListener("click", function () {
    paragraph.textContent = "This is the original text.";
});


let styleBox = document.getElementById("styleBox");

document.getElementById("colorButton").addEventListener("click", function () {
    styleBox.style.backgroundColor = "#bde8d1";
});

document.getElementById("sizeButton").addEventListener("click", function () {
    styleBox.style.fontSize = "24px";
});


let list = document.getElementById("demoList");
let count = 2;

document.getElementById("addItemButton").addEventListener("click", function () {
    count = count + 1;
    let item = document.createElement("li");
    item.textContent = "New item " + count;
    list.appendChild(item);
    document.getElementById("listMessage").textContent = "Item added.";
});

document.getElementById("removeItemButton").addEventListener("click", function () {
    if (list.lastElementChild) {
        list.removeChild(list.lastElementChild);
        document.getElementById("listMessage").textContent = "Last item removed.";
    } else {
        document.getElementById("listMessage").textContent = "The list is empty.";
    }
});
