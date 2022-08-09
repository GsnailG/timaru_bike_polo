window.onload = function websiteload() {
    document.getElementById("preload").style.animation = "fadeOut 1s forwards linear"; 
    /*add a fade animation to the loading screen, when the website has finished loading */
    document.getElementById("preload").style.zIndex = "-30";
    /*move the element behind the main website*/
}

/* do not use display none as the website will 
not load the normal page behind the loading 
screen, therfore making the loader useless */
