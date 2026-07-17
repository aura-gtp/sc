function toggleMenu() {
    const nav = document.getElementById('navMenu');
    if (nav) nav.classList.toggle('active');
}

// Fecha o menu ao clicar em um link (mobile)
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', () => {
        const nav = document.getElementById('navMenu');
        if (nav) nav.classList.remove('active');
    });
});

// Fecha o menu ao clicar fora dele
document.addEventListener('click', (e) => {
    const nav = document.getElementById('navMenu');
    const toggle = document.querySelector('.menu-toggle');
    
    if (nav && nav.classList.contains('active')) {
        if (!nav.contains(e.target) && toggle && !toggle.contains(e.target)) {
            nav.classList.remove('active');
        }
    }
});
