fetch('destinations.json')
    .then(response => response.json())
    .then(data => {
        const destinationSelect = document.getElementById('destination-select');
        const destinationContainer = document.getElementById('destination-container');

        // Lägg till städer till dropdown-menyn
        data.countries.forEach(country => {
            country.cities.forEach(city => {
                const option = document.createElement('option');
                option.value = JSON.stringify(city); // Lagrar hela stadsobjektet som värde
                option.textContent = city.name;
                destinationSelect.appendChild(option);
            });
        });

        // Hantera ändringar i dropdown-menyn
        destinationSelect.addEventListener('change', () => {
            const selectedCity = JSON.parse(destinationSelect.value); // Hämta och parsa stadsobjektet
            if (selectedCity) {
                destinationContainer.innerHTML = `
                    <h2>${selectedCity.name}</h2>
                    <img src="${selectedCity.imageUrl}" alt="${selectedCity.name}" style="max-width: 300px;">
                   
                `;
            } else {
                destinationContainer.innerHTML = ''; // Rensa behållaren om inget är valt
            }
        });
    })
    .catch(error => console.error('Fel vid hämtning av JSON:', error));