// Add imports above this line
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items';
// Change code below this line

// console.log(galleryItems);

//Получаем ссылку на нужный элемент
const galleryConteiner = document.querySelector('div.gallery');

//создание разметки
function createGallery(galleryItems) {
  const markup = galleryItems
    .map(({ preview, original, description }) => {
      return `<a class="gallery__item" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}"/>
    </a>`;
    })
    .join('');

  return markup;
}

//рендер разметки
galleryConteiner.innerHTML = createGallery(galleryItems);

//инициализация SimpleLightbox
const lightbox = new SimpleLightbox('.gallery a', {
  /* options */
  captionsData: 'alt',
  captionDelay: 250,
});
