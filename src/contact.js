function createContactPage() {
    let container = document.createElement('div');
    container.id = 'contact-page';
    container.className = 'page';

    let heading = document.createElement('h2');
    heading.className = 'page-heading';
    heading.innerText = 'Contact us';

    let phone = document.createElement('div');
    phone.innerText = 'Phone: 333-333-3333';
    phone.className = 'contact-page-item';
    
    let email = document.createElement('div');
    email.innerText = 'Email: somemail@email.com';
    email.className = 'contact-page-item';

    let address = document.createElement('div');
    address.innerText = '123, some area, some city, some country';
    address.className = 'contact-page-item';

    container.appendChild(heading);
    container.appendChild(phone);
    container.appendChild(email);
    container.appendChild(address);

    return container;
}

export default createContactPage;