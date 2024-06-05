function setupViewTagPage( /** @type {Document} */ doc, /** @type {Window} */ wndw, /** @type {Array} */ listOfPhotos) {
    const modal = doc.getElementById("image-modal");
    const grid = doc.querySelector(".app-container");
    const breadcrumbs = doc.getElementById("breadcrumbs");

    const params = new URLSearchParams(wndw.location.search);
    const tag = params.get("tag");
    const tagToSearchFor = "t:" + tag;
    const photosWithTag = [];

    // Setting breadcrumbs

    const fragment = document.createRange().createContextualFragment('<ul>' +
        '<li><a href="index.html">Home</a></li>' +
        '<li><a href="tags.html">Tags</a></li>' +
        '</ul>');
    breadcrumbs.appendChild(fragment)


    // Find Photos with tagToSearchFor
    for (const photo of listOfPhotos) {
        const photoTags = photo.tags;

        if (photoTags.indexOf(tagToSearchFor) >= 0) {
            photosWithTag.push(photo);
        }
    }

    modal.addEventListener("show.bs.modal", (e) => {
        const src = e.relatedTarget.src;

        doc.getElementById("img-to-show").setAttribute("src", src);
    });

    // Show the matching photos on screen
    for (let i = photosWithTag.length - 1; i >= 0; i--) {
        const photo = photosWithTag[i];
        const container = doc.createElement("div");
        const img = doc.createElement("img");
        const anchor = doc.createElement("a");
        container.setAttribute("class", "thumbnail");

        anchor.setAttribute("href", "/");
        anchor.addEventListener("click", doNothing);
        img.setAttribute("src", photo.src);
        img.setAttribute("data-bs-toggle", "modal");
        img.setAttribute("data-bs-target", "#image-modal");
        anchor.appendChild(img);

        container.appendChild(anchor);

        grid.insertAdjacentElement("afterbegin", container);
    }
}