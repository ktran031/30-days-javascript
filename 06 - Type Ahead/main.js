const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

let cities = [];

const prom = fetch(endpoint);
console.log(prom);

fetch(endpoint)
    .then(res => res.json())
    .then(res => cities.push(...res));

const findMatches = function (wordToMatch, cities) {
    return cities.filter(place => {

        // Here we need to figure out if the city or state matches what was searched
        const regex = new RegExp(wordToMatch, 'gi');
        return place.city.match(regex) || place.state.match(regex);

    });
};

console.log('Cities: ', cities);

// Add commas to display the population numbers
const numberWithCommas= function (x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ', ');
};

const displayMatches = function () {
    const matchArray = findMatches(this.value, cities);
    console.log('matchArray: ', matchArray);

    const html = matchArray.map(place => {
        const regex = new RegExp(this.value, 'gi');
        const cityName = place.city.replace(regex, `<span  class="hl">${this.value}</span>`);
        const stateName = place.state.replace(regex, `<span  class="hl">${this.value}</span>`);
        return `
                <li>
                    <span class="name">${cityName}, ${stateName}</span>
                    <span class="population">${numberWithCommas(place.population)}</span>
                </li>
            `;
    }).join(''); // Return one string instead of an array of li's

    suggestions.innerHTML = html;
};

const searchInput = document.querySelector('.search');
const suggestions = document.querySelector('.suggestions');

searchInput.addEventListener('change', displayMatches);
searchInput.addEventListener('keyup', displayMatches);