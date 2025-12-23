const content = document.querySelector("#content");

function clear() {
    const tmp = document.querySelector("h1");
    if (tmp) {
        tmp.remove();
    }
}

export function homeNav(){
    clear();
    const home = document.createElement("h1")
    home.textContent = "Home";
    content.appendChild(home);
}

export function menuNav() {
    clear();
    const menu = document.createElement("h1")
    menu.textContent = "Menu";
    content.appendChild(menu);
}

export function aboutNav () {
    clear();
    const about = document.createElement("h1")
    about.textContent = "About";
    content.appendChild(about);
}


