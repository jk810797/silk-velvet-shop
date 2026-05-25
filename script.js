function handleChameleon() {
    const logo = document.querySelector('.logo');
    const body = document.body;
    
    if (!logo) return;

    const scrollPos = window.scrollY;

    // Dark mood
    const darkStart = 1000; 
    const darkEnd = 2100;

    if (scrollPos >= darkStart && scrollPos <= darkEnd) {
        body.classList.add('dark-mode');
    } else {
        body.classList.remove('dark-mode');
    }

    // Logo

    if ((scrollPos > 30 && scrollPos < 600) || (scrollPos >= darkStart && scrollPos < darkEnd)) {
        logo.style.setProperty('color', '#f1cbcb', 'important');
    } else {
        logo.style.setProperty('color', '#332222', 'important');
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

window.addEventListener('load', () => {
    const track = document.querySelector('.conveyor-track');
    if (!track) return;

    gsap.set(".conveyor-track", { xPercent: -50 });

    gsap.to(".conveyor-track", {
        xPercent: 0,    
        duration: 60,   
        ease: "none",   
        repeat: -1     
    });
});