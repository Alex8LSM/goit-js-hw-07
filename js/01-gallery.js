import { galleryItems } from './gallery-items.js';
// Change code below this line
const myGallery = document.querySelector('.gallery');
const insertGalleryItem = (preview, original, description) =>
  `<div class="gallery__item">
    <a class="gallery__link" href="${original}">
      <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
      />
    </a>
  </div>`;

galleryItems.forEach(element => {
myGallery.insertAdjacentHTML('beforeend', insertGalleryItem(element.preview,element.original,element.description));
});

myGallery.addEventListener('click', (event) => {
    event.preventDefault();
    const imageSource = event.target.dataset.source;
  if (event.target.nodeName !== 'IMG') {
    return;
    }
      const instance = basicLightbox.create(
        `
      <img src="${imageSource}" width="1280">
  `,
        {
          onShow: instance => {
            window.addEventListener('keydown', modalKeyDown);
          },
          onClose: instance => {
            window.removeEventListener('keydown', modalKeyDown);
          },
        },
      );
    const modalKeyDown = event => {
        if (event.key == 'Escape') {
            instance.close();
        }
    };
      instance.show();
})
console.log(galleryItems);