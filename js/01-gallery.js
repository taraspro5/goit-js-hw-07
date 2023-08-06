import { galleryItems } from "./gallery-items.js";
// Change code below this line

const list = document.querySelector(".gallery");

function createMarkup(arr) {
  return arr
    .map(
      ({ preview, original, description }) => `
    <li class="gallery__item">
        <a class="gallery__link" href="${original}">
        <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
        />
        </a>
    </li>`
    )
    .join("");
}

list.insertAdjacentHTML("beforeend", createMarkup(galleryItems));
list.addEventListener("click", handlerView);
function handlerView(evt) {
  evt.preventDefault();
  if (evt.currentTarget === evt.target) {
    return;
  }
  const { source } = evt.target.dataset;
  const instance = basicLightbox.create(`
  <img src="${source} ">
`);

  instance.show();
  list.addEventListener("keydown", (evt) => {
    if (evt.code === "Escape") {
      instance.close();
    }
  });
}
