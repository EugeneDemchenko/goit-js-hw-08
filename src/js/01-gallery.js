// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from "simplelightbox/dist/simple-lightbox.esm";
// Change code below this line

console.log(galleryItems);


const galleryEl = document.querySelector('.gallery')

const pictureEl = galleryItems.map(el => {
  const newElement = `<a class='gallery__item' href='${el.original}'>
  <img class='gallery__image' src='${el.preview}' alt='${el.description}'/>
  </a>`
  return newElement
  
})
console.log(pictureEl.join(''));


galleryEl.insertAdjacentHTML('beforeend', [...pictureEl].join(''))


new SimpleLightbox('.gallery .gallery__item', {
  captionsData: 'alt',
  captionDelay: 250,
});