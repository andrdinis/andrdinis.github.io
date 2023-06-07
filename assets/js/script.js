var bntToggleMenu = document.querySelector(".btn--toggle-menu")

function toggleMenu() {
    var mainNav = document.querySelector("#mobile-nav");
    mainNav.classList.toggle("open-menu");
    var curtain = document.querySelector("#curtain");
    curtain.classList.toggle("blur");
    document.body.classList.toggle("no-scroll");
}

bntToggleMenu.addEventListener("click", toggleMenu);
