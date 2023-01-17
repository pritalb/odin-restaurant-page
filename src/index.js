import createHomePage from "./home";
import createMenuItem from "./menu";

import dish1 from "./images/dish1.jpg";
import dish2 from "./images/dish2.jpg";
import dish3 from "./images/dish3.jpg";
import dish4 from "./images/dish4.jpg";

function main() {
    let content = document.querySelector('#content');
    let homePage = createHomePage();


    let menuPage = document.createElement('div');
    let menuHeading = document.createElement('h2');
    menuHeading.innerText = 'Menu';

    let item1 = createMenuItem('Dish 1', '199', dish1);
    let item2 = createMenuItem('Dish 2', '100', dish2);
    let item3 = createMenuItem('Dish 3', '149', dish3);
    let item4 = createMenuItem('Dish 4', '179', dish4);

    menuPage.appendChild(menuHeading);
    menuPage.appendChild(item1);
    menuPage.appendChild(item2);
    menuPage.appendChild(item3);
    menuPage.appendChild(item4);

    
    content.appendChild(homePage);
    content.appendChild(menuPage);
}
document.addEventListener('DOMContentLoaded', () => {
    main();
})