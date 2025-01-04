function attachHandlers( /** @type {HTMLElement} */ sideBarDOM, /** @type {HTMLElement} */ searchBarDOM) {
    const hamburger_anchor = sideBarDOM.querySelector("a#the_burger");
    hamburger_anchor.addEventListener("touchend", _sideBarClick);
    hamburger_anchor.addEventListener("click", _sideBarClick);


    if (searchBarDOM) {
        const searchBar = searchBarDOM.querySelector("#search-input");
        searchBar.addEventListener("keyup", _handleSearch);
    }
    const modal = document.getElementById("image-modal");
    modal.addEventListener("show.bs.modal", (e) => {
        document.body.className = "";
        const src = e.relatedTarget.src || e.relatedTarget.dataset.src;
        const photo = photos.filter(x => x.alternate.indexOf(src) >= 0);
        document.getElementById("img-to-show").focus();
        document.getElementById("img-to-show").setAttribute("src", photo[0].src);
    });
    modal.addEventListener('hide.bs.modal', () => {
        document.getElementById("img-to-show").setAttribute("src", '');
    });
}

function _sideBarClick( /** @type {MouseEvent} */ e) {
    const classes = document.body.className;
    if (classes.indexOf("sideBar-open") >= 0) {
        document.body.className = "";
    } else {
        document.body.className = "sideBar-open";
    }

    e.preventDefault();
    return false;
}

function _handleSearch( /** @type {KeyboardEvent} */ event) {
    const searchValue = event.currentTarget.value;
    const results = doSearch(searchValue, 10);
    const container = document.querySelector("#search-results");
    container.innerHTML = "";
    const list = document.createElement("ul");

    for (let i = 0; i < results.length; i++) {
        const item = document.createElement("li");
        const anchor = document.createElement("a");
        const image = document.createElement("img");
        const title = document.createElement("p");
        title.textContent = results[i].title;
        anchor.dataset.src = results[i].src;
        anchor.setAttribute("data-bs-toggle", "modal");
        anchor.setAttribute("data-bs-target", "#image-modal");
        image.src = results[i].src;
        anchor.appendChild(image);
        anchor.appendChild(title);
        item.appendChild(anchor);
        list.appendChild(item);
    }
    container.appendChild(list);
}
