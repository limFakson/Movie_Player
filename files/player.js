// Select all movie cards
const movieCards = document.querySelectorAll('.movie-card');

// Define an array to store movie data
const movieData = [];

// Define event handler for clicking on a movie card
function handleClick(event) {
    // Get the specific movie card's data
    const card = event.currentTarget;
    const movieName = card.querySelector('.Mname').textContent;
    const locationDate = card.querySelector('.LD').textContent;
    const movieImage = card.querySelector('.Mimg').getAttribute('src'); // Assuming 'movie' is an image
    const genre = card.querySelector('.Mgenre').textContent;

    // Create an object to represent the movie data
    const movieObject = {
        Name: movieName,
        Ldate: locationDate,
        Image: movieImage,
        fGenre: genre
    };

    // Add the movie data to the movieData array
    movieData.push(movieObject);

    // Redirect to another page with movieData as a query parameter
    window.location.href = `playlet.html?movieData=${JSON.stringify(movieData)}`;
}

console.log('movieData sent:', JSON.stringify(movieData));

// Add click event listeners to movie cards
movieCards.forEach(card => {
    card.addEventListener('click', handleClick);
});

// Handle the "goHome" button
const goHome = document.getElementById('home');
goHome.addEventListener('click', () => {
    window.location.href = "index.html";
});

console.log('isConnected');