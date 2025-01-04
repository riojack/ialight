class Duhduh {
  constructor(pData, pGroupByProperty) {
    this.data = pData;
    this.groupByProperty = pGroupByProperty;
  }

  /** @returns {void} */
  render(/** @type {Document} */ doc, /** @type {HTMLElement} */ pHtmlElement) {
    /** @type {Map<string, Array>} */
    const that = this;
    const groupings = Map.groupBy(this.data, d => {
      const groupValue = d[that.groupByProperty];
      if (Array.isArray(groupValue) && groupValue.length === 0) {
        return '';
      } else if (Array.isArray(groupValue)) {
        const groupValueSorted = [...groupValue].sort();
        return groupValueSorted.join(', ');
      }
      return `${groupValue}`.trim();
    });
    const accordion = this.#fragmentAccordion(doc).firstChild;

    let i = 0;
    const groupKeys = [...(groupings.keys())];
    groupKeys.sort();
    groupKeys.forEach(key => {
      const accordionItem = this.#fragmentAccordionItem(doc);
      const itemHeader = accordionItem.querySelector('.accordion-button');
      const itemCollapser = accordionItem.querySelector('.accordion-collapse');
      const itemBody = accordionItem.querySelector('.accordion-body');

      const photos = groupings.get(key);
      itemHeader.textContent = key + ` (${photos.length})`;
      itemHeader.setAttribute('data-bs-target', `#collapse-${i}`);
      itemHeader.setAttribute('aria-controls', `collapse-${i}`);
      itemCollapser.setAttribute('id', `collapse-${i}`);

      photos.forEach(photo => {
        /** @type {string} */
        const src = photo.src;
        const srcShort = src.substring(src.lastIndexOf('/')+1);
        const srcFrag = this.#tplToFragment(`<span><a href="${src}" class="photo-link" target="_blank" data-json="${encodeURIComponent(JSON.stringify(photo))}">${srcShort}</a>, </span>`, doc);

        itemBody.appendChild(srcFrag);
      });

      accordion.appendChild(accordionItem);
      i++;
    });

    pHtmlElement.innerHTML = '';
    pHtmlElement.appendChild(accordion);
  }

  /** @returns {DocumentFragment} */
  #tplToFragment(/** @type {string} */ tpl, /** @type {Document} */ doc) {
    return doc.createRange().createContextualFragment(tpl);
  }

  /** @returns {DocumentFragment} */
  #fragmentAccordion(/** @type {Document} */ doc) {
    const tpl =
      '<div class="accordion">' +
      '</div>';

    return this.#tplToFragment(tpl, doc);
  }

  /** @returns {DocumentFragment} */
  #fragmentAccordionItem(/** @type {Document} */ doc) {
    const tpl = '<div class="accordion-item">' +
        '<h2 class="accordion-header">' +
          '<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">' +
          '</button>' +
        '</h2>' +
        '<div id="collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionExample">' +
          '<div class="accordion-body">' +
          '<button class="export-me btn btn-primary" type="button">Export</button'
          '</div>' +
        '</div>' +
      '</div>';

    return this.#tplToFragment(tpl, doc);
  }
}
