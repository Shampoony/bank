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
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
        breakpoints: {
        300: {
            slidesPerView: 1,
        },
        630: {
            slidesPerView: 2
        },
        890: {
            slidesPerView: 3
        }
        
        
    },
      });
}