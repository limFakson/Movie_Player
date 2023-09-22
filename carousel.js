//labels
const labelOne = document.getElementById('label-one');
const labelTwo = document.getElementById('label-two');
const labelThree = document.getElementById('label-three');
const labelFour = document.getElementById('label-four');
const labelFive = document.getElementById('label-five');

//checkboxes
const checkboxOne = document.getElementById('checkbox-one');
const checkboxTwo = document.getElementById('checkbox-two');
const checkboxThree = document.getElementById('checkbox-three');
const checkboxFour = document.getElementById('checkbox-four');
const checkboxFive = document.getElementById('checkbox-five');

// Movie banner carousel changer i.e checkbox

//label for checked checkbox
labelOne.addEventListener('click', ()=>{
    checkboxOne.checked = true;
    checkboxTwo.checked = false;
    checkboxThree.checked = false;
    checkboxFour.checked = false;
    checkboxFive.checked = false;
});
labelTwo.addEventListener('click', ()=>{
    checkboxOne.checked = false;
    checkboxTwo.checked = true;
    checkboxThree.checked = false;
    checkboxFour.checked = false;
    checkboxFive.checked = false;
});
labelThree.addEventListener('click', ()=>{
    checkboxOne.checked = false;
    checkboxTwo.checked = false;
    checkboxThree.checked = true;
    checkboxFour.checked = false;
    checkboxFive.checked = false;
});
labelFour.addEventListener('click', ()=>{
    checkboxOne.checked = false;
    checkboxTwo.checked = false;
    checkboxThree.checked = false;
    checkboxFour.checked = true;
    checkboxFive.checked = false;
});
labelFive.addEventListener('click', ()=>{
    checkboxOne.checked = false;
    checkboxTwo.checked = false;
    checkboxThree.checked = false;
    checkboxFour.checked = false;
    checkboxFive.checked = true;
});

//window preload sets
window.addEventListener('load', ()=>{
    checkboxOne.checked = false;
    checkboxTwo.checked = false;
    checkboxThree.checked = true;
    checkboxFour.checked = false;
    checkboxFive.checked = false;
});

const imageUrls = [
    'png/john-wick.jpg',
    'png/fastx.jpg',
    'png/jagunjagun.jpg',
    'png/sololeveling.jpg'
];

const movieBanner = document.querySelector('.movie-banner');
let currentImageIndex = 0; // Index of the current image in the array

function changeBackgroundImage() {
    // Set the background image of .movie-banner
    movieBanner.style.backgroundImage = `url(${imageUrls[currentImageIndex]})`;

    // Increment the image index or loop back to the first image
    currentImageIndex = (currentImageIndex + 1) % imageUrls.length;
}

// Call the changeBackgroundImage function at specified intervals (e.g., every 5 seconds)
const intervalTime = 8000; // Change image every 5 seconds (adjust as needed)
setInterval(changeBackgroundImage, intervalTime);

// Call the function once to set the initial background image
changeBackgroundImage();

