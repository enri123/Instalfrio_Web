export function initReveal() {
    const reveals = document.querySelectorAll(".reveal");

    window.addEventListener("scroll", () => {
        reveals.forEach(el => {
            const top = el.getBoundingClientRect().top;
            if (top < window.innerHeight * 0.9) {
                el.classList.add("visible");
            }
        });
    });
}
