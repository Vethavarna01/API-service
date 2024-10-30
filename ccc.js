// API URL
const apiUrl = "https://catfact.ninja/fact";

// Function to fetch a random cat fact from the API
function fetchCatFacts() {
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const factsContainer = document.getElementById('facts-container');
            factsContainer.innerHTML = '';  // Clear previous facts

            const factDiv = document.createElement('div');
            factDiv.className = 'fact';

            // HTML structure for the fetched fact
            factDiv.innerHTML = `
                <p>${data.fact}</p>
            `;

            // Append fact to the container
            factsContainer.appendChild(factDiv);
        })
        .catch(error => console.log('Error fetching cat fact:', error));
}
