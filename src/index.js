import createHomePage from "./home";
import createMenuItem from "./menu";
import createContactPage from "./contact";
import { toggleTabs, createNavBar } from "./nav";
import './styles.css';

import dish1 from "./images/dish1.jpg";
import dish2 from "./images/dish2.jpg";
import dish3 from "./images/dish3.jpg";
import dish4 from "./images/dish4.jpg";

function main() {
    let content = document.querySelector('#content');
    let nav = createNavBar();
    let homePage = createHomePage();
    let contactPage = createContactPage();

    let menuPage = document.createElement('div');
    menuPage.id = 'menu-page';
    menuPage.className = 'page';

    let menuHeading = document.createElement('h2');
    menuHeading.className = 'page-heading';
    menuHeading.innerText = 'Menu';

    let item1 = createMenuItem('Dish 1', '199', "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.", dish1);
    let item2 = createMenuItem('Dish 2', '100', "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.", dish2);
    let item3 = createMenuItem('Dish 3', '149', "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.", dish3);
    let item4 = createMenuItem('Dish 4', '179', "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.", dish4);

    menuPage.appendChild(menuHeading);
    menuPage.appendChild(item1);
    menuPage.appendChild(item2);
    menuPage.appendChild(item3);
    menuPage.appendChild(item4);

    
    content.appendChild(nav);
    content.appendChild(homePage);
    content.appendChild(menuPage);
    content.appendChild(contactPage);
}
document.addEventListener('DOMContentLoaded', () => {
    main();
    toggleTabs('home-page');
})