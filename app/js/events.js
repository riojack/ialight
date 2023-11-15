function attachHandlers( /** @type {HTMLElement} */ sideBarDOM, /** @type {HTMLElement} */ searchBarDOM) {
    const hamburger_anchor = sideBarDOM.querySelector("a.sidebar-opener");
    const sidebar_closer_anchor = sideBarDOM.querySelector("a.sidebar-closer");
    const searchBar = searchBarDOM.querySelector("#search-input");

    hamburger_anchor.addEventListener("touchend", _sideBarMouseEnter);
    hamburger_anchor.addEventListener("click", _sideBarMouseEnter);

    sidebar_closer_anchor.addEventListener("click", _sidebarClose);
    sidebar_closer_anchor.addEventListener("touchend", _sidebarClose);
    searchBar.addEventListener("keyup", _handleSearch);
}

function _sideBarMouseEnter( /** @type {MouseEvent} */ e) {
    document.body.className = "sideBar-open";
    e.preventDefault();
}

function _sideBarMouseLeave() {
    document.body.className = "";
}

function _sidebarClose( /** @type {MouseEvent} */ e) {
    document.body.className = "";
    e.preventDefault();
}

function _handleSearch( /** @type {KeyboardEvent} */ event) {
    const searchValue = event.currentTarget.value
    const results = doSearch(searchValue, 4);
    console.log(results)
    const container = document.querySelector("#search-results");
    container.innerHTML = "";
    const list = document.createElement("ul");
    for (let i = 0; i < results.length; i++) {
        const item = document.createElement("li");
        const anchor = document.createElement("a");
        const image = document.createElement("img")
        image.src = results[i].src
        anchor.appendChild(image)
        item.appendChild(anchor)
        list.appendChild(item)
    }
    container.appendChild(list)
}
