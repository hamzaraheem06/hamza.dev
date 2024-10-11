let navToggle = document.querySelector("#nav-toggle"),
    mobileNav = document.querySelector("#navigation"),
    closeButton = document.querySelector("#close-button");

function navOpen() {
    mobileNav.style.cssText = "opacity: 1; visibility: visible; transform: translate(0%);"
    navToggle.style.cssText = "color: var(--link-color-hover);"
     closeButton.style.cssText = "color: var(--link-color);"
}

function navClose() {
    mobileNav.style.cssText = "opacity: 0; visibility: hidden;  transform: translate(-100%);z"
    navToggle.style.cssText = "color: var(--link-color);"
    closeButton.style.cssText = "color: var(--link-color-hover);"
}


navToggle.addEventListener("click", navOpen )
closeButton.addEventListener("click", navClose)

let navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach(element => {
    
element.addEventListener("click", navClose)
});

