// Этот код отвечает за работу мобильного меню (бургер)

document.addEventListener('DOMContentLoaded', function() {
    const burger = document.getElementById('burger');
    const navMenu = document.getElementById('navMenu');

    if (burger && navMenu) {
        burger.addEventListener('click', function() {
            // Переключаем класс active для меню (показать/скрыть)
            navMenu.classList.toggle('active');
            
            // Анимация бургера (можно добавить крестик при открытии)
            burger.classList.toggle('active');
        });

        // Закрываем меню при клике на ссылку (для удобства)
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                burger.classList.remove('active');
            });
        });
    }
});