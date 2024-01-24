//Data here wwas gotten from index and saved in localhost then pasted on playlet page

const data = JSON.parse(localStorage.getItem('users')) || [];

// Select all movie cards
const movieCards = document.querySelectorAll('.movie-card');


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
    data.push(movieObject);

    //save the data in localstorage
    localStorage.setItem('movieObject', JSON.stringify(data));

    // Redirect to another page with movieData as a query parameter
    window.location.href = `./files/playlet.html`;
}

console.log('movieData sent:', JSON.stringify(data));

 

// Add click event listeners to movie cards
movieCards.forEach(card => {
    card.addEventListener('click', function(event) {
        if (event.target.classList.contains('heart_icon')) {
            // Like click handler in the index page
            function like() {
                const heart = event.target;
                heart.style.backgroundColor = "#be123c";
                console.log('liked');
            }

            like();
        } else {
            handleClick(event);
        }
    });
});

console.log('isConnected');

//Data Saved sucessfully