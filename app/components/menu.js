export function Menu(){
    const $menu = document.createElement("nav");
    $menu.classList.add("menu");
    $menu.innerHTML = `
    <a href="#/">Home</a>
    <span>-</span>
    <a href="#/search">Search</a>
    <span>-</span>
    <a href="#/crud">CRUD</a>
    <span>-</span>
    <a href="https://github.com/LeslieR0SS" target="_blank" rel="noopener">Author</a>
    `;
    return $menu;
}