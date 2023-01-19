import Restaurant from './images/restaurant.jpg';

function createHomePage () {
    let container = document.createElement('div');
    container.id = 'home-page';
    container.className = 'page';
    
    let title = document.createElement('h1');
    title.className = 'page-heading';
    title.innerText = 'RestoFine';

    let info = document.createElement('p');
    info.innerText = 'The very best restaurant in the world. Dining so fine, you will need a microscope to look at it';
    info.className = 'home-page-info';

    const image = new Image();
    image.className = 'home-page-image';
    image.src = Restaurant;

    container.appendChild(title);
    container.appendChild(info);
    container.appendChild(image);

    return container;
}

export default createHomePage;