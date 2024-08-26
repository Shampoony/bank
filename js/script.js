document.addEventListener('DOMContentLoaded', ()=>{
    openMobMenu();
    initialisingSwiper();
});

function openMobMenu(){
    const burgerBtn = document.querySelector('.burger');
    const mobMenu = document.querySelector('.mob-menu')
    burgerBtn.addEventListener('click', ()=>{
        burgerBtn.classList.toggle('active');
        mobMenu.classList.toggle('active');
    })
}
function initialisingSwiper() {
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 3,
        spaceBetween: 30,
        centeredSlides: true,

      });
}