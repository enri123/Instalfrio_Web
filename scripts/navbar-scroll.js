export function initNavbarScroll() {
    const navbar = document.getElementById('mainNavbar');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.remove('bg-transparent', 'top-20');
            navbar.classList.add('bg-white', 'shadow', 'top-0');
        } else {
            navbar.classList.add('bg-transparent', 'top-20');
            navbar.classList.remove('bg-white', 'shadow', 'top-0');
        }
    });
}
