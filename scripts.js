console.log('-- JS --');

const list = JSON.parse(localStorage.getItem('list'));
//     [
//     {
//         id: 1,
//         title: 'Learn JS'
//     },
//     {
//         id: 2,
//         title: 'Learn React'
//     },
//     {
//         id: 3,
//         title: 'Read book'
//     },
// ];

const listElement = document.getElementById('list');
const todoInput = document.getElementById('todoInput');


function render() {
    listElement.innerHTML=null;
    list.forEach(el => {
        const listItem = document.createElement('li');
        const listItemText = document.createTextNode(el.title);
        listItem.setAttribute('class', el.done ? 'done':'progress');
        listItem.appendChild(listItemText);
        const buttonItem = document.createElement('button');
        buttonItem.setAttribute('id', el.id);
        const buttonItemText = document.createTextNode('Done');
        buttonItem.appendChild(buttonItemText);
        listItem.appendChild(buttonItem);
        listElement.appendChild(listItem);
    });

}

render();

listElement.addEventListener('click', (event)=>{
    if(event.target.nodeName === 'BUTTON'){
        const id = event.target.id;
        for(let i = 0; i<list.length; i++){
            if(list[i].id === id) list[i].done =!list[i].done;
        }
        updateLocalStorage();
        render();
    }
})

function addToList() {
    const todoInputValue = todoInput.value;

    list.push({
        id: Math.random().toString(),
        title: todoInputValue,
        done: false
    });
    updateLocalStorage();
    render();
    todoInput.value = '';
}
function updateLocalStorage(){
    localStorage.setItem('list', JSON.stringify(list));
}
