const productImages = document.querySelectorAll('.product-images img');
const productImageSlider = document.querySelector('.image-slider');

let activeImage = 0;

productImages.forEach((item, i) => {
    item.addEventListener('click', ()=>{
        productImages[activeImage].classList.remove('active');
        item.classList.add('active');
        productImageSlider.style.backgroundImage = `url('${item.src}')`;
        activeImage = i;

    })
    
})