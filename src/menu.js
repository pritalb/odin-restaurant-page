function createMenuItem (name, price, image) {
    let container = document.createElement('div');
    
    let name_container = document.createElement('div');
    name_container.innerText = name;

    let price_container = document.createElement('div');
    price_container.innerText = `\$${price}`;

    let itemImage = new Image();
    itemImage.src = image;

    container.appendChild(name_container);
    container.appendChild(price_container);
    container.appendChild(itemImage);

    return container;
}

export default createMenuItem;