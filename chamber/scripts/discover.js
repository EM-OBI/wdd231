//discover page

import { calabarPlaces } from "../data/discover-places.mjs";

const discoverPlaces = (places) => {
    const discoverMain = document.querySelector("#discover-page");

    places.forEach(place => {
        const discoverSection = document.createElement("section");
        discoverSection.classList.add("discover-section");

        const discoverHeading = document.createElement("h2");
        discoverHeading.classList.add("discover-heading");
        discoverHeading.textContent = place.name;

        const discoverFigure = document.createElement("figure");
        discoverFigure.classList.add("discover-figure");

        const discoverFigureCaption = document.createElement("figcaption");
        discoverFigureCaption.textContent = place.name;

        const discoverImage = document.createElement("img");
        discoverImage.classList.add("discover-image");
        discoverImage.setAttribute("src", place.image_url);
        discoverImage.setAttribute("alt", place.name);
        discoverImage.setAttribute("loading", "lazy");
        discoverImage.setAttribute("width", "300");

        discoverFigure.appendChild(discoverImage);
        discoverFigure.appendChild(discoverFigureCaption);

        const discoverAddress = document.createElement("address");
        discoverAddress.classList.add("discover-address");
        discoverAddress.textContent = place.address;

        const discoverDescription = document.createElement("p");
        discoverDescription.classList.add("discover-description");
        discoverDescription.textContent = place.description;

        const discoverLearnMore = document.createElement("button");
        discoverLearnMore.classList.add("discover-more");
        discoverLearnMore.textContent = "Learn More";

        discoverSection.appendChild(discoverHeading);
        discoverSection.appendChild(discoverFigure);
        discoverSection.appendChild(discoverAddress);
        discoverSection.appendChild(discoverDescription);
        discoverSection.appendChild(discoverLearnMore);

        discoverMain.appendChild(discoverSection);
    });
};

if (currentPage.includes("discover.html")) {
    discoverPlaces(calabarPlaces);
}