import { galleryItems } from './gallery-items.js';
// Change code below this line
const gallery = document.querySelector('.gallery');

const galleryElements = galleryItems//витягую елем із галереї через деструкторизацію
.map(({preview, original, description}) => {//створюю новий масив значень через шабл рядок
return `
<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}" 
      data-source="${original}" 
      alt="${description}" 
    />
  </a>
</li>`;
} )
.join('');//повертаю рядок в одну стрічку
gallery.insertAdjacentHTML("beforeend", galleryElements);//вставляю елементи в галерею

gallery.addEventListener('click', (event) => {
    event.preventDefault(); //зупиняю перезавантаження сторінки
     if (event.target.nodeName !== "IMG") return; //перевіряю назву елемента
    const waySrc = event.target.dataset.source; //прописую шлях до src через івентаргет    
//створюю бокс
    const instance = basicLightbox.create(`  
    <img src="${waySrc}" width="800" height="600"> 
`,
{
        onShow: () => {
           window.addEventListener('keydown', onEscKeyPress);
         },
         onClose: () => {
           window.removeEventListener('keydown', onEscKeyPress);
         },
        }
);
instance.show() //відкриваю модальне вікно
function onEscKeyPress(event) {
  if(event.code === 'Escape') {
     instance.close();
  }
}
   
});
console.log(galleryItems);



