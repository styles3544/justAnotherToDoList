let toDoItems = document.getElementById('toDoItems');
let btnAdd = document.getElementById('btnAdd');
let input = document.getElementById('input');


btnAdd.addEventListener('click', function(){
    var paragraph = document.createElement('p');
    paragraph.classList.add('styleText')
    paragraph.innerText = input.value;
    toDoItems.appendChild(paragraph);
    input.value = "";
    paragraph.addEventListener('click', function(){
        paragraph.style.textDecoration = 'line-through';
    })
    paragraph.addEventListener('dblclick', function(){
        toDoItems.removeChild(paragraph);
    })
});

