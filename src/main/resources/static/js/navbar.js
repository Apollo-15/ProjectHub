document.addEventListener('DOMContentLoaded', function () {
    const menuItems = document.querySelectorAll('.menu');
    const nav = document.querySelector('nav');
    const currentLocation = window.location.href;

    menuItems.forEach((item) => {
        if (item.href === currentLocation) {
            item.classList.add("active");
        }
    });

    window.addEventListener('scroll', function () {
        if (window.scrollY > 50) {
            nav.style.backgroundColor = 'rgba(255,255,255,0.7)';
        } else {
            nav.style.backgroundColor = 'transparent';
        }
    });
});
