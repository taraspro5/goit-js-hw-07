import { galleryItems } from "./gallery-items.js";
// Change code below this line
const list = document.querySelector(".gallery");

// {
//     preview:
//       'https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820__480.jpg',
//     original:
//       'https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820_1280.jpg',
//     description: 'Hokkaido Flower',
//   },

function createMarkup(arr) {
  return arr
    .map(
      ({ preview, original, description }) => `
        <li class="gallery__item">
            <a class="gallery__link" href="${original}">
                <img class="gallery__image" src="${preview}" alt="${description}" />
            </a>
        </li>
   `
    )
    .join("");
}

list.insertAdjacentHTML("beforeend", createMarkup(galleryItems));
list.addEventListener("click", handlerClick);
function handlerClick(evt) {
  evt.preventDefault();
}

var lightbox = new SimpleLightbox(".gallery a", {
  captionDelay: 250,
  captionsData: "alt",
});
