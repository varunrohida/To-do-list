let addbutton = document.getElementById('add');
let todocontainer = document.getElementById('todocontainer');
const input = document.getElementById('inputfield');


addbutton.addEventListener('click', function(){
    var paragraph = document.createElement('p');
    paragraph.innerText = inputfield.value;
    todocontainer.appendChild(paragraph);
    inputfield.value = "";
    paragraph.classList.add('paragraph-styling');
    paragraph.addEventListener('click', function(){
        paragraph.style.textDecoration = "line-through";
    })
    paragraph.addEventListener('dblclick', function(){
        todocontainer.removeChild(paragraph)
    })
})
