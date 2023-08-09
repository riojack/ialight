function attachHandlers(/** @type {HTMLElement} */sideBarDOM) {
    const hamburger = sideBarDOM.querySelector("img");
    hamburger.addEventListener("touchend", _sideBarMouseEnter)
    const anchor = sideBarDOM.querySelector("a");
    anchor.addEventListener("click", _sidebarClose)
    anchor.addEventListener("touchend", _sidebarClose)
};
function _sideBarMouseEnter() {
    document.body.className = "sideBar-open"
};
function _sideBarMouseLeave() {
    document.body.className = ""
};
function _sidebarClose(/** @type {MouseEvent} */e) {

document.body.className = ""

    e.preventDefault();
}