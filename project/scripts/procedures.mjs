const proceudresUrl = "wdd231/project/data/procedures.json"; 

export async function getProcedures() {
    const response = await fetch(proceudresUrl);
    if (response.ok) {
        const data = await response.json();

        displayProcedures(data.dental_procedures);

        document.querySelector(".all-filter").addEventListener("click", () => {
            displayProcedures(data.dental_procedures);
        });

        document.querySelector(".adult-filter").addEventListener("click", () => {
            filterAdultProcedures(data.dental_procedures);
        });

        document.querySelector(".child-filter").addEventListener("click", () => {
            filterChildProcedures(data.dental_procedures)
        });
    }
}

function filterChildProcedures(procedures) {
    const childProcedures = procedures.filter(procedure => {
        return procedure.category.includes("Pediatric");
    });
    displayProcedures(childProcedures);
}

function filterAdultProcedures(procedures) {
    const adultProcedures = procedures.filter(procedure => {
        return procedure.category.includes("Adult");
    });
    displayProcedures(adultProcedures);
}


function displayProcedures(procedures) {
    const services = document.querySelector(".services");

    document.querySelectorAll(".procedure-section").forEach(section => section.remove());

    procedures.forEach(procedure => {
        const procedureSection = document.createElement("section");
        procedureSection.classList.add("procedure-section");

        const sectionHeader = document.createElement("h2");
        sectionHeader.classList.add("section-header");
        sectionHeader.textContent = `${procedure.category}`;

        const sectionImg = document.createElement("img");
        sectionImg.setAttribute("src", `${procedure.cover_url}`);
        sectionImg.setAttribute("alt", `${procedure.category}`);
        sectionImg.classList.add("section-img");
        sectionImg.setAttribute("width", `1513`);
        sectionImg.setAttribute("height", `1080`);

        procedureSection.appendChild(sectionHeader);
        procedureSection.appendChild(sectionImg);

        procedure.procedures.forEach(indvProcudure => {
            const indvProcedureSection = document.createElement("section");
            indvProcedureSection.classList.add("indv-procedure");

            const indvSectionHeader = document.createElement("h3");
            indvSectionHeader.classList.add("indv-section-header");
            indvSectionHeader.textContent = `${indvProcudure.name}`;

            const proDescription = document.createElement("p");
            proDescription.classList.add("procedure-description");
            proDescription.textContent = `${indvProcudure.description}`;

            const proPrice = document.createElement("p");
            proPrice.classList.add("procedure-price");
            proPrice.textContent = `${indvProcudure.price}`

            indvProcedureSection.appendChild(indvSectionHeader);
            indvProcedureSection.appendChild(proDescription);
            indvProcedureSection.appendChild(proPrice);

            procedureSection.appendChild(indvProcedureSection);
        });

        services.appendChild(procedureSection);
    });
}