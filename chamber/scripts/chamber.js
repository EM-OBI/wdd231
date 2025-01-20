// Get Date
let currentYear = document.querySelector("#current-year");
let dateLastModif = document.querySelector("#last-modified");
const currentDate = new Date();
let oLastModif = new Date(document.lastModified);
const getLastModYear = oLastModif.getFullYear();
const getLastModMonth = oLastModif.getMonth() + 1;
const getLastModDate = oLastModif.getDate();
const getLastModHour = oLastModif.getHours();
const getLastModMinute = oLastModif.getMinutes();
const getLastModSecond = oLastModif.getSeconds();

currentYear.innerHTML = `<span>${currentDate.getFullYear()}</span>`;
dateLastModif.innerHTML = `<span>Last Modified: ${getLastModDate}/${getLastModMonth}/${getLastModYear} ${getLastModHour}:${getLastModMinute}:${getLastModSecond}</span>`

// responsiveness
const navItems = document.querySelector(".navigation");
const hamburger = document.querySelector(".hamburger");

hamburger.addEventListener("click", () => {
    navItems.classList.toggle("show");
    hamburger.classList.toggle("show");
});

//request json data
const url = "./data/members.json"

async function getMembers() {
    const response = await fetch(url);
    if (response.ok) {
        const data = await response.json();
        displayMembers(data.members);
        console.table(data.members);
    }
    gridIcon.classList.add("active");
}
// getMembers();

const directory = document.querySelector("#directory");

const displayMembers = (members) => {
    members.forEach(member => {
    const section = document.createElement("section");
    section.setAttribute("class", "member");

    const title = document.createElement("h3");
    title.textContent = `${member.name}`
    title.setAttribute("class", "name");
    section.appendChild(title);

    const icon = document.createElement("img");
    icon.setAttribute("src", `${member.image}`);
    icon.setAttribute("alt", `${member.name} brand icon`);
    icon.setAttribute("loading", "lazy");
    icon.setAttribute("width", "100");
    icon.setAttribute("height", "100");
    section.appendChild(icon);

    const address = document.createElement("p");
    address.textContent = `${member.address}`;
    address.setAttribute("class", "address");
    section.appendChild(address);

    const phone = document.createElement("p");
    phone.textContent = `${member.phoneNumber}`;
    phone.setAttribute("class", "phone");
    section.appendChild(phone);

    const website = document.createElement("p");
    website.textContent = `${member.website}`;
    website.setAttribute("class", "website");
    section.appendChild(website);

    const level = document.createElement("p");
    if (member.membershipLevel === "1") {
        level.textContent = `Membership Level - Member`;
        level.style.backgroundColor = "#eee";
    } else if (member.membershipLevel === "2") {
        level.textContent = `Membership Level - Silver`;
        level.style.backgroundColor = "#C0C0C0";
    } else if (member.membershipLevel === "3") {
        level.textContent = `Membership Level - Gold`;
        level.style.backgroundColor = "#FFD700";
    }
    level.setAttribute("class", "level");
    section.appendChild(level);


    const email = document.createElement("p");
    email.textContent = `${member.email}`;
    email.setAttribute("class", "email");
    section.appendChild(email);

    directory.appendChild(section);
  });  
}

getMembers();

const gridIcon = document.querySelector(".grid-icon");
const listIcon = document.querySelector(".list-icon");

gridIcon.addEventListener("click", () => {
    directory.classList.add("grid");
    directory.classList.remove("list");
    gridIcon.classList.add("active");
    listIcon.classList.remove("active");
});

listIcon.addEventListener("click", () => {
    directory.classList.add("list");
    directory.classList.remove("grid");
    listIcon.classList.add("active");
    gridIcon.classList.remove("active");
});

//wayfinding
const navigationLinks = document.querySelectorAll(".navigation a");

const currentPage = window.location.pathname;

navigationLinks.forEach(link => {
    if (link.pathname === currentPage) {
        link.classList.add("active-nav");
    } else {
        link.classList.remove("active-nav");
    }
});
