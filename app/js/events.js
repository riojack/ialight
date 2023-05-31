function attachHandlers(/** @type {HTMLElement} */sideBarDOM) {
    sideBarDOM.addEventListener("mouseenter", _sideBarMouseEnter)
    sideBarDOM.addEventListener("mouseleave", _sideBarMouseLeave)
};
function _sideBarMouseEnter() {
    document.body.className = "sideBar-open"
};
function _sideBarMouseLeave() {
    document.body.className = ""
};
