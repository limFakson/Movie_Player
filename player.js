//checkboxes
const checkboxOne = document.getElementById('checkbox-one');
const checkboxTwo = document.getElementById('checkbox-two');
const checkboxThree = document.getElementById('checkbox-three');
const checkboxFour = document.getElementById('checkbox-four');
const checkboxFive = document.getElementById('checkbox-five');

//labels
const labelOne = document.getElementById('label-one');
const labelTwo = document.getElementById('label-two');
const labelThree = document.getElementById('label-three');
const labelFour = document.getElementById('label-four');
const labelFive = document.getElementById('label-five');

//Movie card
const Moviecard = document.querySelector('.movie-card');
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

Moviecard.addEventListener('click', ()=>{
    window.location.href = "playlet.html"
})