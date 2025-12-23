import {homeNav, menuNav, aboutNav} from "./other"

const navigation = document.querySelector("header");

navigation.addEventListener("click", e => {
    let x = e.target.dataset.nav;
    if (x === "home") {
        homeNav();
    } else if (x === "menu") {
        menuNav();
    }else if (x === "about") {
        aboutNav();
    }else {
        console.log(x);
    }
})