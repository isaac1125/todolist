const txt = document.querySelector(".txt");
const save = document.querySelector(".save");
const list = document.querySelector(".list");

let data = [];

function renderData() {
    let str = "";
    data.forEach(function (item, index) {
        str += `<li>${item.content}<input type="button" value="刪除代辦" data-num="${index}" class="delete"></li>`
    })
    const list = document.querySelector(".list");
    list.innerHTML = str;
}

save.addEventListener("click", function (e) {
    if (txt.value == "") {
        alert("請輸入內容");
        return;
    }
    obj = {};
    obj.content = txt.value;
    data.push(obj);
    renderData();
    txt.value = "";
})

list.addEventListener("click", function (e) {
    if (e.target.getAttribute("class") !== "delete") {
        alert("請點按鈕喔")
        return;
    }
    let num = e.target.getAttribute("data-num");
    data.splice(num, 1);
    renderData();
})