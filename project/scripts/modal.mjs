export default function modal() {
    const mapButton = document.querySelector(".map");
    const mapSection = document.querySelector("#map");
    const iframe = document.createElement("iframe");
    iframe.classList.add("iframe");
    const modal = document.createElement("dialog");
    modal.classList.add("modal");

    iframe.setAttribute("src", "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3974.841776546037!2d8.335999099999993!3d4.965955399999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x106787a8d9c7d7b3%3A0xc1a586cf50f4080c!2sVincitore%20Dental%20Clinic!5e0!3m2!1sen!2sng!4v1739780503999!5m2!1sen!2sng");
    iframe.setAttribute("width", "300");
    iframe.setAttribute("height", "225");
    iframe.setAttribute("style", "border:0;");
    iframe.setAttribute("allowfullscreen", "");
    iframe.setAttribute("loading", "lazy");
    iframe.setAttribute("referrerpolicy", "no-referrer-when-downgrade");

    const close = document.createElement("button");
    close.textContent = "Close";
    close.classList.add("close-button");

    mapButton.addEventListener("click", () => {
        modal.showModal();
    });

    modal.addEventListener("click", (event) => {
        const rect = modal.getBoundingClientRect();

        if (
            event.clientX < rect.left ||
            event.clientX > rect.right ||
            event.clientY < rect.top ||
            event.clientY > rect.bottom
        ) {
            modal.close();
        }
    });

    if(!modal.querySelector(".close-button")) {
        modal.appendChild(close);
    }

    close.addEventListener("click", () => {
        modal.close();
    });

    modal.appendChild(iframe);

    mapSection.appendChild(modal);
}