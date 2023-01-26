function toggleTabs(tabID) {
    document.querySelectorAll('.page').forEach(page => {
        page.style.display = 'none';
    });
    document.querySelector(`#${tabID}`).style.display = 'block';
}

function createNavBar () {
    let nav = document.createElement('div');
    nav.id = 'nav-bar';
    nav.className = 'nav';

    let title = document.createElement('h2');
    title.innerText = 'RestoFine';
    title.className = 'nav-bar-title';

    let container = document.createElement('div');
    container.className = 'nav-button-container';

    let homeButton = document.createElement('button');
    homeButton.innerText = 'Home';
    homeButton.className = 'nav-element';
    homeButton.addEventListener('click', () => {
        toggleTabs('home-page');
    });

    let menuButton = document.createElement('button');
    menuButton.innerText = 'Menu';
    menuButton.className = 'nav-element';
    menuButton.addEventListener('click', () => {
        toggleTabs('menu-page');
    });

    let contactButton = document.createElement('button');
    contactButton.innerText = 'Contact us';
    contactButton.className = 'nav-element';
    contactButton.addEventListener('click', () => {
        toggleTabs('contact-page');
    })

    container.appendChild(homeButton);
    container.appendChild(menuButton);
    container.appendChild(contactButton);

    nav.appendChild(title);
    nav.appendChild(container);

    return nav;
}

export {toggleTabs, createNavBar};