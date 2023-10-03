function attachHandlers(/** @type {HTMLElement} */ sideBarDOM) {
  const hamburger_anchor = sideBarDOM.querySelector("a.sidebar-opener");
  const sidebar_closer_anchor = sideBarDOM.querySelector("a.sidebar-closer");

  hamburger_anchor.addEventListener("touchend", _sideBarMouseEnter);
  hamburger_anchor.addEventListener("click", _sideBarMouseEnter);

  sidebar_closer_anchor.addEventListener("click", _sidebarClose);
  sidebar_closer_anchor.addEventListener("touchend", _sidebarClose);
}

function _sideBarMouseEnter(/** @type {MouseEvent} */ e) {
  document.body.className = "sideBar-open";
  e.preventDefault();
}

function _sideBarMouseLeave() {
  document.body.className = "";
}

function _sidebarClose(/** @type {MouseEvent} */ e) {
  document.body.className = "";
  e.preventDefault();
}
