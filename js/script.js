document.addEventListener('DOMContentLoaded', ()=>{
    openMobMenu();
});

function openMobMenu(){
    const burgerBtn = document.querySelector('.burger');
    const mobMenu = document.querySelector('.mob-menu')
    burgerBtn.addEventListener('click', ()=>{
        burgerBtn.classList.toggle('active');
        mobMenu.classList.toggle('active');
    })
}