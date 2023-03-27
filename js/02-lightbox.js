import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryMarkup = document.querySelector('.gallery');

const galleryUsage = galleryItems//витягую елем із галереї через деструкторизацію
.map(({preview, original, description}) => {//створюю новий масив значень через шабл рядок
return `
<li class="gallery__item">
   <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
   </a>
</li>`;
} )

.join('');//повертаю рядок в одну стрічку
galleryMarkup.insertAdjacentHTML("beforeend", galleryUsage);//вставляю елементи в галерею

const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt', // додаю відображення підписів до зображень з атрибута alt
    captionDelay: 250,//підпис буде знизу і з'являється через 250 мілісекунд після відкриття зображення
  });
console.log(galleryItems);

