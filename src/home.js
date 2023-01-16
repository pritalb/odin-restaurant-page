function createHomePage () {
    let container = document.createElement('div');
    container.className = 'home-page';
    
    let title = document.createElement('h1');
    title.innerText = 'RestoFine';

    let info = document.createElement('p');
    info.innerText = 'The very best restaurant in the world. Dining so fine, you will need a microscope to look at it';

    container.append(title);
    container.append(info);

    return container;
}

export default createHomePage;