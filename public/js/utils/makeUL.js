const makeUL = (array) => {
    let listElement = document.createElement('ul');
    for (let i = 0; i < array.length; i++) {
        let item = document.createElement('li');
        item.appendChild(document.createTextNode(array[i]));
        listElement.appendChild(item);
    }
    return listElement;
}