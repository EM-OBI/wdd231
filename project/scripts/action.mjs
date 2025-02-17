export default function formAction() {
    const action = document.querySelector(".action");
    const mainName = document.createElement("h3");
    mainName.classList.add("main-name");
    const mainParagraph = document.createElement("p");
    mainParagraph.classList.add("main-p")

    action.appendChild(mainName);
    action.appendChild(mainParagraph);

    mainName.textContent = `Hi ${displayInfo("fname")}, thank you for choosing Vincitore Dental Clinic`;

    mainParagraph.innerHTML = `Your appointment for <strong>${displayInfo("appointment-date")}</strong> by <strong>${displayInfo("appointment-time")}</strong>  has been noted and you will be sent a text reminder at least 1 hour before the designated date and time via the provided phone number - <strong>${displayInfo("phonenumber")}</strong>`

}

function displayInfo(info) {
    const params = new URLSearchParams(window.location.search);
    return params.has(info) ? decodeURIComponent(params.get(info)) : "Not provided";
}