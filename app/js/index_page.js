function setupIndexPage(/** @type {Document} */ doc, /** @type {Array} */ listOfPhotos) {
  const modal = doc.getElementById("image-modal");
  modal.addEventListener("show.bs.modal", (e) => {
    const src = e.relatedTarget.src;

    doc.getElementById("img-to-show").setAttribute("src", src);
  });

  for (let i = listOfPhotos.length - 1; i >= 0; i--) {
    const photo = listOfPhotos[i];
    const container = doc.createElement("div");
    const anchor = doc.createElement("a");
    const image = doc.createElement("img");
    const metaspan = doc.createElement("span");

    anchor.setAttribute("href", "/");
    anchor.addEventListener("click", doNothing);
  
    image.setAttribute("src", photo.src);
    image.setAttribute("decoding", "async");
    image.setAttribute("loading", "lazy");
    image.setAttribute("data-bs-toggle", "modal");
    image.setAttribute("data-bs-target", "#image-modal");

    container.setAttribute("class", "thumbnail");

    const lens = photo.lens === "-" ? "No Lens Information" : photo.lens;

    metaspan.innerHTML = "";
    metaspan.innerHTML += `<div><strong>${photo.title}</strong></div>`;
    metaspan.innerHTML += `<div>${photo.datetime}</div>`;
    metaspan.innerHTML += `<div>${photo.camera}\n(${lens})</div>`;

    anchor.appendChild(image);
    anchor.appendChild(metaspan);

    container.appendChild(anchor);

    doc.querySelector(".app-container").insertAdjacentElement("afterbegin", container);
  }
}
