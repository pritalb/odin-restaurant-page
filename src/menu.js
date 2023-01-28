function createMenuItem (name, price, description, image) {
    let container = document.createElement('div');
    container.className = 'menu-item';

    let itemInfo = document.createElement('div');
    itemInfo.className = 'menu-item-info';

    let name_container = document.createElement('div');
    name_container.innerText = name;
    name_container.className = 'menu-item-name';

    let description_container = document.createElement('div');
    description_container.innerText = description;
    description_container.className = 'menu-item-description';

    let price_container = document.createElement('div');
    price_container.innerText = `\$${price}`;
    price_container.className = 'menu-item-price';

    let itemImage = new Image();
    itemImage.className = 'menu-item-image';
    itemImage.src = image;

    itemInfo.appendChild(name_container);
    itemInfo.appendChild(price_container);
    itemInfo.appendChild(description_container);
    container.appendChild(itemInfo);
    container.appendChild(itemImage);

    return container;
}

export default createMenuItem;