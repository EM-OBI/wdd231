const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json'

const cards = document.querySelector('#cards');

async function getProphetData() {
    const response = await fetch(url);
    if (response.ok) {
        const data = await response.json();
        console.table(data.prophets);
        displayProphets(data.prophets);
    }
}

const getSuffix = (order) => {
    const suffix = ['th', 'st', 'nd', 'rd']
    const value = order % 100
    return suffix[(value - 20) % 10] || suffix[value] || suffix[0];
}

const displayProphets = (prophets) => {
    prophets.forEach(prophet => {
        const section = document.createElement('section');
        const fullName = document.createElement('h2');
        const portrait = document.createElement('img');

        fullName.textContent = `${prophet.name} ${prophet.lastname}`;
        portrait.setAttribute('src', prophet.imageurl);
        portrait.setAttribute('alt', `Portrait of ${prophet.name} ${prophet.lastname} - ${prophet.order}${getSuffix(prophet.order)} Latter-day President`);
        portrait.setAttribute('loading', 'lazy');
        portrait.setAttribute('width', '340');
        portrait.setAttribute('height', '440');

        section.appendChild(fullName);
        section.appendChild(portrait);

        cards.appendChild(section);
    });
}

getProphetData();