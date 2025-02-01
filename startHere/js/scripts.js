const thankUrl = window.location.href

const details = thankUrl.split("?")[1].split("&");
let results = document.querySelector("#results");

function displayInfo(info) {
    let display;
    details.forEach(detail => {
        if (detail.startsWith(info)){
            display = (detail.split("=")[1].replace("%40", "@"));
        }
    });
    return display;
}

results.innerHTML = `
    <p>${displayInfo("first")}</p>
`