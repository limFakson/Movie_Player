// window.onload - function () {
    const Title = document.getElementById('title');
const imdb = document.getElementById('imdb');
const tomato = document.getElementById('tomato');
const summary = document.getElementById('summarized');

//array for the image and preview details
const imageUrls = [
    'png/john-wick.jpg',
    'png/demon-slayer.jpg',
    'png/fastx.jpg',
    'png/spider-man.jpg',
    'png/sololeveling.jpg'
];

const movieBanner = document.querySelector('.movie-banner');

// Index of the current image in the array
let currentImageIndex = 0;

// Set the background image of .movie-banner
function changeBackgroundImage() {
    movieBanner.style.backgroundImage = `url(${imageUrls[currentImageIndex]})`;

    // Remove the active class from all checkboxes
    checkboxes.forEach((checkbox) => {
        checkbox.classList.remove('active-checkbox');
    });

    // Add the active class to the checkbox corresponding to the current image
    checkboxes[currentImageIndex].classList.add('active-checkbox');

    // Uncheck all checkboxes
    checkboxes.forEach((checkbox) => {
        checkbox.checked = false;
    });

    // Check the checkbox corresponding to the current image
    checkboxes[currentImageIndex].checked = true;

    // Increment the image index or loop back to the first image
    currentImageIndex = (currentImageIndex + 1) % imageUrls.length;
}

// Call the changeBackgroundImage function at specified intervals (e.g., every 8 seconds)
const intervalTime = 8000; // Change image every 8 seconds (adjust as needed)
setInterval(changeBackgroundImage, intervalTime);

// Add event listeners to checkboxes
const checkboxes = document.querySelectorAll('.banner-carousel input[type="checkbox"]');
checkboxes.forEach((checkbox, index) => {
    checkbox.addEventListener('change', () => {
        if (checkbox.checked) {
            // Change the background image based on the checkbox index
            changeBackgroundImage(index);
        }
    });
});

// Call the function once to set the initial background image
changeBackgroundImage();

// };