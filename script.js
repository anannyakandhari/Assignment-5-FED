console.log("started");

// 1. Get the response from the API that I am asking for
// asynchronous function (because it gets data from an API)
async function getCountries() {
    // always await fetch
    const response = await fetch("https://restcountries.com/v3.1/lang/spanish");
    
    // parse to json
    // always await response.json()
    const jsonResponse = await response.json();
    return jsonResponse;
}

// 2. Parse the data that I get as a response to find what I need
function getNames(data) {
    // start with empty array 
    const allNames = [];

    data.forEach(countryData => {
        const names = countryData["name"];
        const officialName = names["official"];
        allNames.push(officialName);
    });

    return allNames;
}

window.onload = async() => {
    // wait for getCountries() to finish before going to the next line
    // always await a function that does a fetch
    const countryData = await getCountries();
    console.log(getNames(countryData));
}
 