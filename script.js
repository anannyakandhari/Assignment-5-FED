console.log("started");

// 1. Get the response from the API that I am asking for
// asynchronous function (because it gets data from an API)
async function getTrees() {
    // always await fetch
    try {
        const response = await fetch("https://data.winnipeg.ca/resource/hfwk-jp4h.json");
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        // parse to json
        // always await response.json()
        const jsonResponse = await response.json();
        return jsonResponse;
    } catch (error) {
        console.error("Error fetching tree data:", error);
        alert("Failed to load tree data. Please try again later.");
    }
}

// 2. Parse the data that I get as a response to find what I need
function getTreesInfo(data) {
    // start with empty array 
    const allTrees = [];
    data.forEach(tree => {
        const { common_name, botanical_name, diameter_at_breast_height, park, neighbourhood } = tree;
        allTrees.push({
            commonName: common_name,
            botanicalName: botanical_name,
            diameter: diameter_at_breast_height,
            park,
            neighbourhood
        });
    });
    return allTrees;
}


window.onload = async () => {
// wait for getTrees() to finish before going to the next line
// always await a function that fetches tree data from the API
    const Data = await getTrees();
    const treeInfo = getTreesInfo(Data);
    console.log(treeInfo);
};
