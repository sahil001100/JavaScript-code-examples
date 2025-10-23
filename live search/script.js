// Live search script
const searchInput = document.getElementById("search");
const resultsList = document.getElementById("results");

searchInput.addEventListener("input", () => {
    const query = searchInput.value.toLowerCase();
    resultsList.innerHTML = "";

    if (query) {
        const results = performSearch(query);
        displayResults(results);
    }
});

function performSearch(query) {
    // Simulate a search operation
    const items = ["Apple", "Banana", "Orange", "Mango", "Apricot", "Avocado", "Blueberry", "Blackberry"];
    return items.filter(item => item.toLowerCase().includes(query));
}

function displayResults(results) {
    results.forEach(item => {
        const li = document.createElement("li");
        li.textContent = item;
        resultsList.appendChild(li);
    });
}
