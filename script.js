function handleChameleon() {
    const logo = document.querySelector('.logo');
    const body = document.body;
    
    if (!logo) return;

    const scrollPos = window.scrollY;

    // 1. Хамелеон для логотипа (твоя исходная логика)
    if (scrollPos > 30 && scrollPos < 600) {
        logo.style.setProperty('color', '#f1cbcb', 'important');
    } else {
        logo.style.setProperty('color', '#332222', 'important');
    } 


    // 2. ПЕРЕХОД ФОНА ХАМЕЛЕОН
    const triggerPoint = 1050; // Точка, где фон меняется полностью

    if (scrollPos > triggerPoint) {
        // Листаем ВНИЗ — плавно включаем тёмный режим
        body.classList.add('dark-mode');
    } else {
        // Листаем ВВЕРХ — МГНОВЕННО выключаем тёмный режим
        body.classList.remove('dark-mode');
    }
}

window.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.getElementById('menuBtn');
    const sidebar = document.getElementById('sidebar');
    const closeBtn = document.getElementById('closeBtn');

    if(menuBtn) menuBtn.onclick = () => sidebar.classList.add('active');
    if(closeBtn) closeBtn.onclick = () => sidebar.classList.remove('active');

    const slides = document.querySelectorAll('.slide');
    let currentSlide = 0;
    if (slides.length > 0) {
        setInterval(() => {
            slides[currentSlide].classList.remove('active');
            currentSlide = (currentSlide + 1) % slides.length;
            slides[currentSlide].classList.add('active');
        }, 4000);
    }
});

window.addEventListener('scroll', handleChameleon);