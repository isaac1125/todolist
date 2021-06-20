let data = [
    {
        "content": "buy gift&cake"
    },
    {
        "content": "finance report convention"
    }
]

function renderData() {
    let str = "";
    data.forEach(function (item) {
        str += `<li>${item.content}<input type="button" value="刪除代辦" class="delete"></li>`
    })
    const list = document.querySelector(".list");
    list.innerHTML = str;
}
renderData();