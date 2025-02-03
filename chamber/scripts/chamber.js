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
const gridIcon = document.querySelector(".grid-icon");
const listIcon = document.querySelector(".list-icon");

hamburger.addEventListener("click", () => {
    navItems.classList.toggle("show");
    hamburger.classList.toggle("show");
});

//request json data
const url = "/wdd231/chamber/data/members.json"

async function getMembers() {
    const response = await fetch(url);
    if (response.ok) {
        const data = await response.json();
        console.log(data);
        console.log(data.members);
        // if (currentPage === '/chamber/directory.html') {
        gridIcon.classList.add("active");
        displayMembers(data.members);
        // } else if (currentPage === "/chamber/index.html") {
        displayMembers(generateRandomMembers(data.members, 3));
        // }
    }
}

// getMembers();

const directory = document.querySelector("#directory");
const homePage = document.querySelector("#home-page");
const businessHighlights = document.querySelector("#business-highlights");

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

    if (currentPage === '/chamber/directory.html') {
        directory.appendChild(section);
        section.classList.remove("spotlight-section");
    } else if (currentPage === '/chamber/index.html') {
        businessHighlights.appendChild(section);
        section.classList.add("spotlight-section");
    }
  });  
}

getMembers();

function toggleListGrid() {
    gridIcon.classList.add("active");

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
}

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


if (currentPage === '/chamber/directory.html') {
    toggleListGrid();
}


//get weather info
const weatherIcon = document.querySelector("#weather-icon");
const currentWeatherInfo = document.querySelector("#current-weather-info");
const forecastInfo = document.querySelector("#forecast-info");
const urlWeather = 'https://api.openweathermap.org/data/2.5/weather?lat=4.98&lon=8.34&units=metric&appid=ac0ae799a1d779dd4c23068666bc18f1';
const urlForecast = 'https://api.openweathermap.org/data/2.5/forecast?lat=4.98&lon=8.34&units=metric&appid=ac0ae799a1d779dd4c23068666bc18f1';

//fetch current weather
async function apiFetch() {
    try {
        const response = await fetch(urlWeather);
        if (response.ok) {
            const data = await response.json();
            displayData(data);
        } else {
            throw Error('Error:', await response.text());
        }
    } catch (error) {
        console.error('Error:', error);
    }
};

apiFetch();

//fetch forecast weather
async function apiFetchForecast() {
    try {
        const response = await fetch(urlForecast);
        if (response.ok) {
            const data = await response.json();
            displayForecast(data);
        } else {
            throw Error('Error:', await response.text());
        }
    } catch (error) {
        console.error('Error:', error);
    }
};

if (currentPage === '/chamber/index.html') {
    apiFetchForecast();
}

//display data

function displayData(data) {
    const sunrise =  `${data.sys.sunrise}`
    const sunset =  `${data.sys.sunset}`

    function capitalizeFirstLetter(sentence) {
        return sentence.split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
    }
    
    function formatUnixTimestampToTime(timestamp) {
        return new Date(timestamp * 1000).toLocaleString("en-US", {
            hour: "numeric",
            minute: "2-digit",
            second: "2-digit",
            hour12: true, 
            timeZone: "UTC" 
        });
    }
    if (currentPage === "/chamber/index.html") {
        weatherIcon.innerHTML = `<img src="https://openweathermap.org/img/wn/04d.png" alt="${capitalizeFirstLetter(data.weather[0].description)} icon">`
        currentWeatherInfo.innerHTML = `<div class="individual-weather"><strong>Temp:</strong> ${data.main.temp.toFixed(1)}°C</div>
        <div class="individual-weather"><strong>Description:</strong> ${capitalizeFirstLetter(data.weather[0].description)}</div>
        <div class="individual-weather"><strong>High:</strong> ${data.main.temp_max.toFixed(1)}°C</div> 
        <div class="individual-weather"><strong>Low:</strong> ${data.main.temp_min.toFixed(1)}°C</div> 
        <div class="individual-weather"><strong>Sunrise:</strong> ${formatUnixTimestampToTime(sunrise)}</div> 
        <div class="individual-weather"><strong>Sunset:</strong> ${formatUnixTimestampToTime(sunset)}</div>`;
    }
}

//display forecasted weather

function displayForecast(data) {
    data.list.forEach(forecast => {
        if (forecast.dt_txt.includes("00:00:00")) {
            const forecastDate = new Date(forecast.dt_txt);
            const day = forecastDate.toLocaleString("en-US", {
                weekday: "long"
            });
            forecastInfo.innerHTML += `<div class="individual-forecast"><strong>${day}</strong>: ${forecast.main.temp.toFixed(1)}°C </div>`;
        }
    });
} 

const generateRandomMembers = (members, count) => {
    const silverGoldMembers = members.filter(member => member.membershipLevel === "2" || member.membershipLevel === "3");
    
    const shuffledMembers = [...silverGoldMembers].sort(() => 0.5 - Math.random());
    
    return shuffledMembers.slice(0, count);
}

//display membership cards
const mem = "/wdd231/chamber/data/membership.json"

async function getMembershipData() {
    try {
        const response = await fetch(mem);
        if (response.ok) {
            const data = await response.json();
            displayMembershipCards(data);
        } else {
            throw Error('Error:', await response.text());
        }
    } catch (error) {
        console.error('Error:', error);
    }
}


function displayMembershipCards(cards) {
    const membershipSection = document.createElement("div");
    membershipSection.classList.add("membership")
    const main = document.querySelector("main#join");
    
    
    
    cards.membership.forEach(card => {
        const eachMembership = document.createElement("section");
        eachMembership.classList.add("indv-membership");
        const membershipLevel = document.createElement("h2");
        const learnMore = document.createElement("button");
        learnMore.classList.add("learn-more");
        const membershipDetails = document.createElement("p");
        membershipDetails.classList.add("membership-details");

        membershipDetails.textContent = displayModal(card);

        const modal = document.createElement("dialog");
        modal.classList.add("modal");

        const close = document.createElement("button");
        close.textContent = "Close";
        close.classList.add("close-button");

        membershipLevel.textContent = `${card.name}`;
        learnMore.textContent = `Learn More`;
        
        eachMembership.appendChild(membershipLevel);
        eachMembership.appendChild(learnMore);
        membershipSection.appendChild(eachMembership);
        membershipSection.appendChild(modal);

        learnMore.addEventListener("click", () => {
            modal.showModal();
        });

        modal.addEventListener("click", (event) => {
            const rect = modal.getBoundingClientRect();
            console.log(event);
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

        modal.appendChild(membershipDetails);

        close.addEventListener("click", () => {
            modal.close();
        });
    })
    
    main.appendChild(membershipSection);    
}

function displayModal(card) {
    switch (card.level) {
        case "np":
            return card.description;
            break;
        case "bro":
            return card.description;
            break;
        case "sil":
            return card.description;
            break;
        case "gol":
            return card.description;
            break;
        default:
            console.error(error);
    }
}

if (currentPage === '/chamber/join.html') {
    getMembershipData();
}

//to-do - create modal, design thank you page
const timestampInput = document.querySelector("#timestamp");

if (currentPage === '/chamber/join.html') {
    document.addEventListener("DOMContentLoaded", function () {
        
        if (timestampInput && !timestampInput.value) {
            timestampInput.value = new Date().toISOString();
        }
    });
}

if (currentPage === '/chamber/thankyou.html') {
    
    const thankUrl = window.location.href

    const details = thankUrl.split("?")[1].split("&");
    let results = document.querySelector("#thank-you");

    function displayInfo(info) {
        let display;
        details.forEach(detail => {
            if (detail.startsWith(info)){
                display = decodeURIComponent(detail.split("=")[1]);
            }
        });
        return display;
    }

    let displayLevel;

    if (displayInfo("level") === "np") {
        displayLevel = "Non-profit"
    } else if (displayInfo("level") === "bronze") {
        displayLevel = "Bronze"
    } else if (displayInfo("level") === "silver") {
        displayLevel = "Silver"
    } else {
        displayLevel = "Gold"
    }

    let rawTimestamp = displayInfo("timestamp");
    let formattedTimestamp = new Date(rawTimestamp).toLocaleString("en-US", {
        weekday: "long",    
        year: "numeric",   
        month: "long",     
        day: "numeric",    
        hour: "2-digit",   
        minute: "2-digit", 
        second: "2-digit"  
    });

    results.innerHTML = `
    <p class="thank-you">Thank you ${displayInfo("fname")} ${displayInfo("lname")} for submitting an application to join the Calabar Dental Chamber of Commerce. <br>An email will be sent to <a href="${displayInfo("email")}">${displayInfo("email")}</a> for confirmation following the evaluation of your application
    <br>
    Please confirm the following information: </p>
    <div class="thank-you-info">
        First Name: ${displayInfo("fname")}
        <br>
        Last Name: ${displayInfo("lname")}
        <br>
        Email: ${displayInfo("email")}
        <br>
        Phone Number: ${displayInfo("phonenumber")}
        <br>
        Clinic Name: ${displayInfo("clinicname")}
        <br>
        Selected Membership Level: ${displayLevel}
        <br>
        Time Submitted: ${formattedTimestamp}
    </div>
`
}
