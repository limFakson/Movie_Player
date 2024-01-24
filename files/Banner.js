//Homepage banner image swap function

// window.onload - function () {
const Title = document.getElementById('title');
const imdb = document.getElementById('imdb');
const tomato = document.getElementById('tomato');
const summary = document.getElementById('summarized');

//array for the image and preview details
const imageUrls = [
    {
        image : 'files/png/john-wick.jpg',
        Title : 'John Wick 4: Parabelum',
        summary :'John wick is on a run after killng a member of the international assasins' + 'guild,' 
        + 'and with a 14 million price tag on his head,' +
        'he is a target of every hitman men and women everywhere'
    },
    {
        image : 'files/png/demon-slayer.jpg',
        Title : 'Demon Slayer: Kimetsu No Yaiba',
        summary :'Tangiro has a personnal mission of turnig of sister to human,' + 'on is quest of change he has be become stronger to fight the demon boss'
    }, 
    {
        image : 'files/png/fastx.jpg',
        Title : 'Fast & Furious 4: fastX',
        summary :'The last episode of fast & furious where paul walker came back to life' + ' ' + 'and they have to race to death'
    }, 
    {
        image : 'files/png/spider-man.jpg',
        Title : 'Spider-man 2: Across the spider verse',
        summary :'Miles was greater power and now he has a great reponsibility to protect the universe from' + ' ' + 'his moortal enemy: HImself' + ' ' + 'After been chaseed by the league of spider-mans'
    },
    {
        image : 'files/png/sololeveling.jpg',
        Title : 'Solo-leveling: The Rise',
        summary :'Sung jin woo, the world weakest hunter' + ' ' + 'meet fortune in the dungeon, where he has to lay his life to get it' + 
        ' ' + 'now becoming the world greatest hunter.'
    }
];

const movieBanner = document.querySelector('.movie-banner');

// Index of the current image in the array
let currentImageIndex = 0;


// Set the background image of .movie-banner
function changeBackgroundImage() {
    movieBanner.style.backgroundImage = `url(${imageUrls[currentImageIndex].image})`;
    Title.textContent = `${imageUrls[currentImageIndex].Title}`;
    summary.textContent = `${imageUrls[currentImageIndex].summary}`;

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