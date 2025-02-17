export function animate() {
    document.addEventListener("DOMContentLoaded", () => {
        const welcome = document.querySelector(".welcome");
        const motto = document.querySelector(".motto");
    
        motto.style.display = "block";
        motto.classList.add("animate");
    })
}