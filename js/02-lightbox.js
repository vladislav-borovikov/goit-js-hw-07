import { galleryItems } from './gallery-items.js';
// Change code below this line


const galleryEl = document.querySelector('.gallery')
const imageMarkup = galleryItems.map(img =>
    `<li><a class="gallery__item" href="${img.original}">
        <img class="gallery__image" src="${img.preview}" alt="${img.description}" />
    </a></li>`
).join('')
galleryEl.insertAdjacentHTML('afterbegin', imageMarkup)


const lightbox = new SimpleLightbox('.gallery a', { 'captionsData': "alt", 'captionDelay': 250 });
lightbox.on('show.simpleLightbox')

console.log(galleryItems);