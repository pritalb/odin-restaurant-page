function createContactPage() {
    let container = document.createElement('div');
    
    let heading = document.createElement('h2');
    heading.innerText = 'Contact us';

    let phone = document.createElement('div');
    phone.innerText = 'Phone: 333-333-3333';
    
    let email = document.createElement('div');
    email.innerText = 'Email: somemail@email.com';

    let address = document.createElement('div');
    address.innerText = '123, some area, some city, some country';

    container.appendChild(heading);
    container.appendChild(phone);
    container.appendChild(email);
    container.appendChild(address);

    return container;
}

export default createContactPage;