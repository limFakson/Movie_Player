// Get the movie data from the query parameter
const urlParams = new URLSearchParams(window.location.search);
const secondPageMovieData = urlParams.get('movieData'); // No need to parse here

// Check if secondPageMovieData is not null or undefined before parsing
if (secondPageMovieData) {
    try {
        const secondPageData = JSON.parse(secondPageMovieData); // Parse here
        // Access and display the movie data on the page
        if (secondPageData.length > 0) {
            // Assuming you have elements with IDs to display the data
            document.getElementById('name').textContent = secondPageData[0].Name;
            document.getElementById('ldate').textContent = secondPageData[0].Ldate;
            document.getElementById('watch-movie').setAttribute('src', secondPageData[0].Image);
            document.getElementById('genre').textContent = secondPageData[0].fGenre;
            document.title.textContent = "stranger";
        }
    } catch (error) {
        console.error('JSON parsing error:', error);
    }
}
console.log(document.title)
console.log('Second page script is running');
