function createMenuItem (name, price, image) {
    let container = document.createElement('div');
    container.className = 'menu-item';

    let name_container = document.createElement('div');
    name_container.innerText = name;
    name_container.className = 'menu-item-name';

    let price_container = document.createElement('div');
    price_container.innerText = `\$${price}`;
    price_container.className = 'menu-item-price';

    let itemImage = new Image();
    itemImage.className = 'menu-item-image';
    itemImage.src = image;

    container.appendChild(name_container);
    container.appendChild(price_container);
    container.appendChild(itemImage);

    return container;
}

export default createMenuItem;