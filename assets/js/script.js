//menu mobile
var bntToggleMenu = document.querySelector(".btn--toggle-menu")

function toggleMenu() {
    var mainNav = document.querySelector("#mobile-nav");
    mainNav.classList.toggle("open-menu");
    var curtain = document.querySelector("#curtain");
    curtain.classList.toggle("blur");
    document.body.classList.toggle("no-scroll");
}

bntToggleMenu.addEventListener("click", toggleMenu);

//menu bar selected tab
var anchor = document.querySelector("#main-nav").querySelectorAll("a");
var header = document.querySelector("header");
var logo = document.querySelector("#logo");
var menu = document.querySelector("#menu-vector");

for (var i = 0; i < anchor.length; i++) {
	if (window.location.href === anchor[i].href) {
		anchor[i].classList.add("active");
	}



    if (window.location.href.indexOf("p_faculty") > -1) {
        header.classList.add("transparent-background");
        logo.classList.add("logo-alt");
        menu.classList.add("color-alt-1");
        document.title = "Rethinking the Fine Arts Faculty of Lisbon website — André Dinis";
	}
    if (window.location.href.indexOf("p_amote") > -1) {
        header.classList.add("transparent-background");
        logo.classList.add("logo-alt");
        menu.classList.add("color-alt-1");
        document.title = "Amo-te de Morte — André Dinis";
	}
    if (window.location.href.indexOf("p_base") > -1) {
        header.classList.add("transparent-background");
        logo.classList.add("logo-alt");
        menu.classList.add("color-alt-1");
        document.title = "Projeto Base — André Dinis";
	}
    if (window.location.href.indexOf("p_corona") > -1) {
        header.classList.add("transparent-background");
        logo.classList.add("logo-alt");
        menu.classList.add("color-alt-1");
        document.title = "Dismorfia Comunitária — André Dinis";
	}
    if (window.location.href.indexOf("p_desterro") > -1) {
        header.classList.add("transparent-background");
        logo.classList.add("logo-alt");
        menu.classList.add("color-alt-2");
        document.title = "Desterro — André Dinis";
	}
    if (window.location.href.indexOf("p_epilogo") > -1) {
        header.classList.add("transparent-background");
        logo.classList.add("logo-alt");
        menu.classList.add("color-alt-2");
        document.title = "Epílogo; Primeira Ceia — André Dinis";
	}
    if (window.location.href.indexOf("p_farfetch") > -1) {
        header.classList.add("transparent-background");
        logo.classList.add("logo-alt");
        menu.classList.add("color-alt-1");
        document.title = "Designing a new feature for the Farfetch app — André Dinis";
	}
    if (window.location.href.indexOf("p_inferno") > -1) {
        header.classList.add("transparent-background");
        logo.classList.add("logo-alt");
        menu.classList.add("color-alt-1");
        document.title = "Um Inferno Bem-Intencionado — André Dinis";
	}
    if (window.location.href.indexOf("p_nidus") > -1) {
        header.classList.add("transparent-background");
        logo.classList.add("logo-alt");
        menu.classList.add("color-alt-2");
        document.title = "Nidus — André Dinis";
	}
    if (window.location.href.indexOf("p_render") > -1) {
        header.classList.add("transparent-background");
        logo.classList.add("logo-alt");
        menu.classList.add("color-alt-1");
        document.title = "Concept Art Experiments — André Dinis";
	}
    if (window.location.href.indexOf("p_slotdev") > -1) {
        header.classList.add("transparent-background");
        logo.classList.add("logo-alt");
        menu.classList.add("color-alt-2");
        document.title = "E-Commerce platform for custom PC’s — André Dinis"
	}

}
