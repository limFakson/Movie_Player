// Get the movie data from the query parameter
const urlParams = new URLSearchParams(window.location.search);
const secondPageMovieData = JSON.parse(urlParams.get('movieData'));

// Parse the JSON string back into an array of movie objects
const secondPageData = JSON.parse(secondPageMovieData);

// Access and display the movie data on the page
if (secondPageData && secondPageData.length > 0) {
    // Assuming you have elements with IDs to display the data
    document.getElementById('name').textContent = secondPageData[0].Name;
    document.getElementById('ldate').textContent = secondPageData[0].Ldate;
    document.getElementById('watch-movie').setAttribute('src', secondPageData[0].Image);
    document.getElementById('genre').textContent = secondPageData[0].fGenre;
}
