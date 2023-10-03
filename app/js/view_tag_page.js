function setupViewTagPage(/** @type {Document} */ doc, /** @type {Window} */ wndw, /** @type {Array} */listOfPhotos) {
  const modal = doc.getElementById("image-modal");
  const grid = doc.querySelector(".tag-image-grid");

  const params = new URLSearchParams(wndw.location.search);
  const tagToSearchFor = "t:" + params.get("tag");
  const photosWithTag = [];

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
  for (const photo of photosWithTag) {
    const container = doc.createElement("div");
    const img = doc.createElement("img");

    img.setAttribute("src", photo.src);
    img.setAttribute("data-bs-toggle", "modal");
    img.setAttribute("data-bs-target", "#image-modal");

    container.appendChild(img);

    grid.appendChild(container);
  }
}
