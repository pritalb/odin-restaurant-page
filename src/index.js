import createHomePage from "./home";

function main() {
    let content = document.querySelector('#content');
    let homePage = createHomePage();

    content.append(homePage);
}
document.addEventListener('DOMContentLoaded', () => {
    main();
})