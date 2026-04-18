/// Функция инициализации магазина (кнопки)
function initShop() {
    const countElement = document.getElementById('card-count');
    let count = 0;

    document.querySelectorAll('.card').forEach(card => {
        if (!card.querySelector('.buy-btn')) {
            const btn = document.createElement('button');
            btn.className = 'buy-btn';
            btn.textContent = 'Buy';
            
            btn.onclick = () => {
                count++;
                if(countElement) {
                    countElement.textContent = count;
                    countElement.classList.remove('bump');
                    void countElement.offsetWidth; // Рестарт анимации
                    countElement.classList.add('bump');
                }
            };
            card.append(btn);
        }
    });
}

// Функция для хамелеона
function handleChameleon() {
    const logo = document.querySelector('.logo');
    if (!logo) return;

    const scrollPos = window.scrollY;

    // Твой интервал 25-500 пикселей
    if (scrollPos > 25 && scrollPos < 500) {
        logo.style.setProperty('color', '#f1cbcb', 'important');
    } else {
        logo.style.setProperty('color', '#332222', 'important');
    }
}

// Запуск всего при загрузке
window.addEventListener('DOMContentLoaded', () => {
    // 1. Рисуем кнопки
    initShop();

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