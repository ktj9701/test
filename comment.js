//댓글창 만들기

const input = document.querySelector("#footer-header");
const itemAdd = document.querySelector(".itemAdd");
const items = document.querySelector(".items");


const onAdd = () => {
    const time = `${new Date().toLocaleString()}`;
    const text = input.value;
    if (input.value === '') {
        input.focus();
        return;
    }

    const item = document.createElement('li');
    item.setAttribute('class', 'item');

    const itemText = document.createElement('span');
    itemText.setAttribute('class', 'itemText');
    itemText.innerHTML = text;
    itemText.innerHTML += "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 작성시간: " + time;
    const itemDel = document.createElement('button');
    itemDel.setAttribute('class', 'itemDel');
    itemDel.style.display = "table-cell";
    itemDel.style.verticalAlign = "middle";
    itemDel.style.height = "25px";
    itemDel.style.width = "25px";

    itemDel.innerHTML = '<i class="fas fa-minus-circle"></i>';
    itemDel.addEventListener('click', () => {
        items.removeChild(item);
    });

    item.appendChild(itemText);
    item.appendChild(itemDel);
    items.appendChild(item);
    input.value = ' ';
    input.focus();
};

itemAdd.addEventListener('click', () => {
    onAdd();
})

input.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        onAdd();
    }
    return;
})