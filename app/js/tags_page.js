function setupTagPage(/** @type {Document} */ doc, /** @type {Array} */ listOfPhotos) {
  const uniqueTags = _extractTags(listOfPhotos);

  for (const [tag, src] of uniqueTags) {
    const container = doc.createElement("div");
    const anchor = doc.createElement("a");

    container.setAttribute("class", "tag-thumbnail");
    anchor.setAttribute("style", `background:center center url("${src}")`);
    anchor.setAttribute("href", "view_tag.html?tag=" + encodeURIComponent(tag));

    anchor.innerHTML = `<h1>${tag}</h1>`;
    container.appendChild(anchor);
    doc.querySelector(".tag-grid").insertAdjacentElement("afterbegin", container);
  }
}

function _extractTags(listOfPhotos) {
  const allTags = new Map();

  for (const photo of listOfPhotos) {
    for (const tag of photo.tags) {
      if (tag.startsWith("camera:")) {
        continue;
      }

      const strippedTag = tag.replace("t:", "");
      allTags.set(strippedTag, photo.src);
    }
  }

  return allTags;
}
