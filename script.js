console.log("started");

// 1. Get the response from the API that I am asking for
// asynchronous function (because it gets data from an API)
async function getTrees() {
    // always await fetch
    const response = await fetch("https://data.winnipeg.ca/resource/hfwk-jp4h.json");
    
    // parse to json
    // always await response.json()
    const jsonResponse = await response.json();
    return jsonResponse;
}

// 2. Parse the data that I get as a response to find what I need
function getTreeInfo(data) {
    // start with empty array 
    const allTrees = [];

    data.forEach(tree => {
        const treeDetails = {
            commonName: tree["common_name"],
            botanicalName: tree["botanical_name"],
            diameter: tree["diameter_at_breast_height"],
            park: tree["park"],
            neighbourhood: tree["neighbourhood"]
        };
        allTrees.push(treeDetails);
    });

    return allTrees;
}

window.onload = async() => {
    // wait for getCountries() to finish before going to the next line
    // always await a function that does a fetch
    const Data = await getTress();
    console.log(getTrees(Data));
}
 