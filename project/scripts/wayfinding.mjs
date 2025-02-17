export function breadCrumb() {
    const breadcrumbContainer = document.querySelector(".breadcrumb");

    const pages = {
        "index.html": "Home",
        "about.html": "About",
        "services.html": "Services",
        "schedule-form.html": "Schedule Appointment",
        "form-action.html": "Thank you",
        "attributions.html": "Attributions"
    };

    const currentPage = window.location.pathname.split("/").pop(); 

    let breadcrumbHTML = `<a href="index.html" class="wf-home">Home</a>`;

    if (currentPage in pages && currentPage !== "index.html") {
        breadcrumbHTML += `<span class="wf-page">  >  ${pages[currentPage]}</span>`;
    }

    breadcrumbContainer.innerHTML = breadcrumbHTML;
}

export function highlightWay() {
    const currentPage = window.location.pathname;
    const navigationLinks = document.querySelectorAll(".side-nav-item a");
    
    navigationLinks.forEach(link => {
        if (link.pathname === currentPage) {
            link.classList.add("active-nav");
        } else {
            link.classList.remove("active-nav");
        }
    });
};
