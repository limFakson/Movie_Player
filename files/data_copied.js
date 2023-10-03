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

//slide in menu
const slide = document.getElementById('slide');
const checkbox = document.getElementById('in-box');

//function call
slide.addEventListener('click', ()=>{
    // Toggle the checkbox state by setting its 'checked' property
    checkbox.checked = !checkbox.checked;
});

// Function to toggle the menu
function toggleMenu() {
    const menu = document.getElementById('menu');
    menu.style.transform = (menu.style.transform === "translateX(0%)" || menu.style.transform === "") ? "translateX(-100%)" : "translateX(0%)";
  }

  // Swipe detection
  let touchStartX = 0;
  let touchEndX = 0;

  document.addEventListener('touchstart', function (event) {
    touchStartX = event.touches[0].clientX;
  });

  document.addEventListener('touchend', function (event) {
    touchEndX = event.changedTouches[0].clientX;
    handleSwipe();
  });

  function handleSwipe() {
    const swipeThreshold = 60; // Adjust this value as needed

    if (touchStartX - touchEndX > swipeThreshold) {
      // Swipe to the left (closing menu)
      toggleMenu();
    } else if (touchEndX - touchStartX > swipeThreshold) {
      // Swipe to the right (opening menu)
      toggleMenu();
    }
  }