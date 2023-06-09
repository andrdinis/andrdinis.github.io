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
        menu.classList.add("color-alt-2");
        document.title = "Rethinking the Fine Arts Faculty of Lisbon website — André Dinis";
	}
    if (window.location.href.indexOf("p_amote") > -1) {
        header.classList.add("transparent-background");
        logo.classList.add("logo-alt");
        menu.classList.add("color-alt-2");
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
        menu.classList.add("color-alt-2");
        document.title = "Concept Art Experiments — André Dinis";
	}
    if (window.location.href.indexOf("p_slotdev") > -1) {
        header.classList.add("transparent-background");
        logo.classList.add("logo-alt");
        menu.classList.add("color-alt-2");
        document.title = "E-Commerce platform for custom PC’s — André Dinis"
	}

}

//filter chips
var btnFilterUx = document.querySelector(".btn--filterUx")

function filterUx() {
    var active = document.querySelector(".btn--filterUx");
    active.classList.toggle("chip-active");
    var hide = document.querySelector(".amote");
    hide.classList.toggle("hide");
    var hide = document.querySelector(".desterro");
    hide.classList.toggle("hide");
    var hide = document.querySelector(".inferno");
    hide.classList.toggle("hide");
    var hide = document.querySelector(".corona");
    hide.classList.toggle("hide");
    var hide = document.querySelector(".epilogo");
    hide.classList.toggle("hide");
    var hide = document.querySelector(".base");
    hide.classList.toggle("hide");
    var hide = document.querySelector(".render");
    hide.classList.toggle("hide");
}

btnFilterUx.addEventListener("click", filterUx);

//
var btnFilterUi = document.querySelector(".btn--filterUi")

function filterUi() {
    var active = document.querySelector(".btn--filterUi");
    active.classList.toggle("chip-active");
    var hide = document.querySelector(".amote");
    hide.classList.toggle("hide");
    var hide = document.querySelector(".desterro");
    hide.classList.toggle("hide");
    var hide = document.querySelector(".inferno");
    hide.classList.toggle("hide");
    var hide = document.querySelector(".corona");
    hide.classList.toggle("hide");
    var hide = document.querySelector(".epilogo");
    hide.classList.toggle("hide");
    var hide = document.querySelector(".base");
    hide.classList.toggle("hide");
    var hide = document.querySelector(".render");
    hide.classList.toggle("hide");
    var hide = document.querySelector(".nidus");
    hide.classList.toggle("hide");
}

btnFilterUi.addEventListener("click", filterUi);

//
var btnFilterCinema = document.querySelector(".btn--filterCinema")

function filterCinema() {
    var active = document.querySelector(".btn--filterCinema");
    active.classList.toggle("chip-active");
    var hide = document.querySelector(".farfetch");
    hide.classList.toggle("hide");
    var hide = document.querySelector(".faculty");
    hide.classList.toggle("hide");
    var hide = document.querySelector(".slotdev");
    hide.classList.toggle("hide");
    var hide = document.querySelector(".inferno");
    hide.classList.toggle("hide");
    var hide = document.querySelector(".corona");
    hide.classList.toggle("hide");
    var hide = document.querySelector(".epilogo");
    hide.classList.toggle("hide");
    var hide = document.querySelector(".render");
    hide.classList.toggle("hide");
    var hide = document.querySelector(".nidus");
    hide.classList.toggle("hide");
    var hide = document.querySelector(".base");
    hide.classList.toggle("hide");
}

btnFilterCinema.addEventListener("click", filterCinema);

//
var btnFilterPhoto = document.querySelector(".btn--filterPhoto")

function filterPhoto() {
    var active = document.querySelector(".btn--filterPhoto");
    active.classList.toggle("chip-active");
    var hide = document.querySelector(".farfetch");
    hide.classList.toggle("hide");
    var hide = document.querySelector(".faculty");
    hide.classList.toggle("hide");
    var hide = document.querySelector(".slotdev");
    hide.classList.toggle("hide");
    var hide = document.querySelector(".amote");
    hide.classList.toggle("hide");
    var hide = document.querySelector(".desterro");
    hide.classList.toggle("hide");
    var hide = document.querySelector(".epilogo");
    hide.classList.toggle("hide");
    var hide = document.querySelector(".render");
    hide.classList.toggle("hide");
    var hide = document.querySelector(".nidus");
    hide.classList.toggle("hide");
    var hide = document.querySelector(".base");
    hide.classList.toggle("hide");
}

btnFilterPhoto.addEventListener("click", filterPhoto);


//
var btnFilterMultimedia = document.querySelector(".btn--filterMultimedia")

function filterMultimedia() {
    var active = document.querySelector(".btn--filterMultimedia");
    active.classList.toggle("chip-active");
    var hide = document.querySelector(".farfetch");
    hide.classList.toggle("hide");
    var hide = document.querySelector(".faculty");
    hide.classList.toggle("hide");
    var hide = document.querySelector(".slotdev");
    hide.classList.toggle("hide");
    var hide = document.querySelector(".amote");
    hide.classList.toggle("hide");
    var hide = document.querySelector(".desterro");
    hide.classList.toggle("hide");
    var hide = document.querySelector(".corona");
    hide.classList.toggle("hide");
    var hide = document.querySelector(".inferno");
    hide.classList.toggle("hide");
    var hide = document.querySelector(".base");
    hide.classList.toggle("hide");
}

btnFilterMultimedia.addEventListener("click", filterMultimedia);

//
var btnFilterResearch = document.querySelector(".btn--filterResearch")

function filterResearch() {
    var active = document.querySelector(".btn--filterResearch");
    active.classList.toggle("chip-active");
    var hide = document.querySelector(".amote");
    hide.classList.toggle("hide");
    var hide = document.querySelector(".desterro");
    hide.classList.toggle("hide");
    var hide = document.querySelector(".corona");
    hide.classList.toggle("hide");
    var hide = document.querySelector(".inferno");
    hide.classList.toggle("hide");
    var hide = document.querySelector(".render");
    hide.classList.toggle("hide");
    var hide = document.querySelector(".epilogo");
    hide.classList.toggle("hide");
}

btnFilterResearch.addEventListener("click", filterResearch);

//
var btnFilterIndustrial = document.querySelector(".btn--filterIndustrial")

function filterIndustrial() {
    var active = document.querySelector(".btn--filterIndustrial");
    active.classList.toggle("chip-active");
    var hide = document.querySelector(".amote");
    hide.classList.toggle("hide");
    var hide = document.querySelector(".desterro");
    hide.classList.toggle("hide");
    var hide = document.querySelector(".corona");
    hide.classList.toggle("hide");
    var hide = document.querySelector(".inferno");
    hide.classList.toggle("hide");
    var hide = document.querySelector(".render");
    hide.classList.toggle("hide");
    var hide = document.querySelector(".epilogo");
    hide.classList.toggle("hide");
    var hide = document.querySelector(".farfetch");
    hide.classList.toggle("hide");
    var hide = document.querySelector(".faculty");
    hide.classList.toggle("hide");
    var hide = document.querySelector(".slotdev");
    hide.classList.toggle("hide");
    var hide = document.querySelector(".nidus");
    hide.classList.toggle("hide");
    
}

btnFilterIndustrial.addEventListener("click", filterIndustrial);

//
var btnFilter3d = document.querySelector(".btn--filter3d")

function filter3d() {
    var active = document.querySelector(".btn--filter3d");
    active.classList.toggle("chip-active");
    var hide = document.querySelector(".amote");
    hide.classList.toggle("hide");
    var hide = document.querySelector(".desterro");
    hide.classList.toggle("hide");
    var hide = document.querySelector(".corona");
    hide.classList.toggle("hide");
    var hide = document.querySelector(".inferno");
    hide.classList.toggle("hide");
    var hide = document.querySelector(".base");
    hide.classList.toggle("hide");
    var hide = document.querySelector(".epilogo");
    hide.classList.toggle("hide");
    var hide = document.querySelector(".farfetch");
    hide.classList.toggle("hide");
    var hide = document.querySelector(".faculty");
    hide.classList.toggle("hide");
    var hide = document.querySelector(".slotdev");
    hide.classList.toggle("hide");
    var hide = document.querySelector(".nidus");
    hide.classList.toggle("hide");
    
}

btnFilter3d.addEventListener("click", filter3d);