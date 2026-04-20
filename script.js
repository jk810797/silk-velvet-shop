// Функция для хамелеона
function handleChameleon() {
    const logo = document.querySelector('.logo');
    if (!logo) return;

    const scrollPos = window.scrollY;

    // Твой интервал 30-600 пикселей
    if (scrollPos > 30 && scrollPos < 600) {
        logo.style.setProperty('color', '#f1cbcb', 'important');
    } else {
        logo.style.setProperty('color', '#332222', 'important');
    }
}

// Запуск всего при загрузке
window.addEventListener('DOMContentLoaded', () => {

    // 2. Сайдбар
    const menuBtn = document.getElementById('menuBtn');
    const sidebar = document.getElementById('sidebar');
    const closeBtn = document.getElementById('closeBtn');

    if(menuBtn) menuBtn.onclick = () => sidebar.classList.add('active');
    if(closeBtn) closeBtn.onclick = () => sidebar.classList.remove('active');

    // 3. Слайдер
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

// 4. Хамелеон на скролл (вынесено отдельно для скорости)
window.addEventListener('scroll', handleChameleon);