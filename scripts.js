console.log('-- JS --');

const list = [
    {
        id: 1,
        title: 'Learn JS'
    },
    {
        id: 2,
        title: 'Learn React'
    },
    {
        id: 3,
        title: 'Read book'
    },
];

const listElement = document.getElementById('list');
const todoInput = document.getElementById('todoInput');


function render() {
    list.forEach(el => {
        const listItem = document.createElement('li');
        const listItemText = document.createTextNode(el.title);
        listItem.appendChild(listItemText);
        const buttonItem = document.createElement('button');
        const buttonItemText = document.createTextNode('Done');
        buttonItem.appendChild(buttonItemText);
        listItem.appendChild(buttonItem);
        listElement.appendChild(listItem);
    });

}

render();

function addToList() {
    const todoInputValue = todoInput.value;

    list.push({
        id: Math.random(),
        title: todoInputValue
    })

    listElement.innerHTML = null;
    render();
    todoInput.value = '';
}
