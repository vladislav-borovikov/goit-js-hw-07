import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryEl = document.querySelector('.gallery')
const imageMarkup = galleryItems.map(img =>
    `<a class="gallery__link" href="large-image.jpg">
    <img
      class="gallery__image"
      src="${img.preview}"
      data-source="${img.original}"
      alt="${img.description}"
      onclick="return false;"
    />
  </a>`).join('')
galleryEl.insertAdjacentHTML('afterbegin', imageMarkup)

galleryEl.addEventListener('click', bigImg)


function bigImg() {

    const instance = basicLightbox.create(`
    <img src="${event.target.dataset.source}" width="800" height="600">
`)

    instance.show()

}




