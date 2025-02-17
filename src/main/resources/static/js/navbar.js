document.addEventListener('DOMContentLoaded', function () {
    const menuItems = document.querySelectorAll('.menu');
    const nav = document.querySelector('nav');
    window.addEventListener('scroll', function () {
        if (window.scrollY > 50) {
            nav.style.backgroundColor = 'rgba(255,255,255,0.7)';
        } else {
            nav.style.backgroundColor = 'transparent';
        }
    });
});
