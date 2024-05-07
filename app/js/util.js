function doNothing(e) {
  e.preventDefault();
  return false;
};

function addModal( /** @type {HTMLElement}*/ element) {
  var modalContainer = document.createElement("div");
  var modalDialog = document.createElement("div");
  var modalContent = document.createElement("div");
  var modalHeader = document.createElement("div");
  var modalHeaderCloseBtn = document.createElement("button");
  var modalBody = document.createElement("div");
  var imgToShow = document.createElement("img");
  //Set Attributes
  modalContainer.setAttribute("class", "modal");
  modalContainer.setAttribute("id", "image-modal");
  modalContainer.setAttribute("tabindex", "-1");
  modalDialog.setAttribute("class", "modal-dialog modal-xl");
  modalContent.setAttribute("class", "modal-content");
  modalHeader.setAttribute("class", "modal-header");
  modalHeaderCloseBtn.setAttribute("type", "button");
  modalHeaderCloseBtn.setAttribute("class", "btn-close");
  modalHeaderCloseBtn.setAttribute("data-bs-dismiss", "modal");
  modalHeaderCloseBtn.setAttribute("aria-label", "Close");
  modalBody.setAttribute("class", "modal-body");
  imgToShow.setAttribute("id", "img-to-show");
  imgToShow.setAttribute("style", "width: 100%;");
  //Append Children
  element.appendChild(modalContainer);
  modalContainer.appendChild(modalDialog);
  modalDialog.appendChild(modalContent);
  modalContent.appendChild(modalHeader);
  modalHeader.appendChild(modalHeaderCloseBtn);
  modalContent.appendChild(modalBody);
  modalBody.appendChild(imgToShow);
}
