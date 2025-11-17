// Scroll suave para enlaces
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
        // Cerrar dropdown si está abierto
        const dropdown = bootstrap.Dropdown.getInstance(document.querySelector('.dropdown-toggle'));
        if (dropdown) dropdown.hide();
    });
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
    document.querySelector('.navbar').classList.toggle('scrolled', window.scrollY > 100);
});

// Animaciones al scroll
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('visible');
    });
}, { threshold: 0.1 });

document.querySelectorAll('.animate__fadeIn').forEach(el => observer.observe(el));

// Formulario contacto (simulación)
document.querySelectorAll('form').forEach(form => {
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('¡Gracias! Tu mensaje ha sido enviado. Te contactaremos pronto.');
        this.reset();
    });
});