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

list.forEach(el => {
    const listItem = document.createElement('li');
    const listItemText = document.createTextNode(el.title);
    listItem.appendChild(listItemText);
    document.getElementById('list').appendChild(listItem);
});