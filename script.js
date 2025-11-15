document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('searchInput');
    const movieList = document.getElementById('movieList');

    // Sample Data Array
    const movies = [
        "Inception", "The Matrix", "Pulp Fiction", "The Dark Knight",
        "Fight Club", "Forrest Gump", "Interstellar", "Goodfellas",
        "The Godfather", "Titanic", "Avatar", "Jurassic Park",
        "Star Wars: A New Hope", "The Social Network", "Parasite",
        "Joker", "Blade Runner 2049", "Whiplash"
    ];

    // Function to render the list based on a provided array
    const renderList = (itemsToDisplay) => {
        // Clear the current list content
        movieList.innerHTML = '';

        if (itemsToDisplay.length === 0) {
            const noResults = document.createElement('li');
            noResults.textContent = 'No movies found matching your search.';
            noResults.classList.add('no-results');
            movieList.appendChild(noResults);
            return;
        }

        // Create a list item for each movie and append it to the UL
        itemsToDisplay.forEach(movie => {
            const listItem = document.createElement('li');
            listItem.textContent = movie;
            listItem.classList.add('movie-item');
            movieList.appendChild(listItem);
        });
    };

    // Main Filtering Function
    const filterContent = () => {
        // Get the search term and convert it to lower case for case-insensitive search
        const searchTerm = searchInput.value.toLowerCase();

        // Use the Array.prototype.filter() method
        const filteredMovies = movies.filter(movie => {
            // Check if the movie title (converted to lower case) includes the search term
            return movie.toLowerCase().includes(searchTerm);
        });

        // Re-render the list with the filtered results
        renderList(filteredMovies);
    };

    // --- Initialization and Event Listener ---

    // 1. Render the full list when the page loads
    renderList(movies);

    // 2. Add an event listener to the search input for real-time filtering
    // The 'input' event fires every time the value of the input changes
    searchInput.addEventListener('input', filterContent);
});