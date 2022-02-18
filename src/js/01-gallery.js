

import { galleryItems } from './gallery-items.js';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';




const cardsContainer = document.querySelector('.gallery');
const cardsMarkup = createPictureCard(galleryItems);

cardsContainer.insertAdjacentHTML('beforeend', cardsMarkup);



function createPictureCard(galleryItems) {
  return galleryItems.map(({ preview, original, description }) => {
    return `

<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>
`;
  })
    .join('');
}

let gallery = new SimpleLightbox('.gallery a', {
    captions: true,
    captionsData: 'alt',
    captionDelay: 250,
  });
  






