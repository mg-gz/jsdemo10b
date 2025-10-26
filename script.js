// get all color buttons
const buttons = document.querySelectorAll(".color-btn");
const description = document.getElementById("color-description");
const soundBtn = document.getElementById("sound-btn");

// load the sound (make sure your MP3 is in same folder)
const sound = new Audio("resources/click-sound.mp3");

// image stuff
const image = document.getElementById("displayed-image");
const nextImageBtn = document.getElementById("next-image-btn");

// these are my images that change when I click next
const images = ["resources/image1.png", "resources/image2.png"];
let currentImage = 0; // start at first one

// some info about each color
const colorInfo = {
  red: "[Red is the color of energy, passion, and action!]",
  blue: "[Blue symbolizes calm, trust, and intelligence.]",
  green: "[Green represents nature, growth, and harmony.]",
  yellow: "[Yellow stands for happiness, optimism, and sunshine!]",
  purple: "[Purple is the color of creativity, luxury, and mystery.]"
};

// when I click a color, bg changes + show description text
buttons.forEach(button => {
  button.addEventListener("click", () => {
    const color = button.getAttribute("data-color");
    document.body.style.backgroundColor = color;

    // change the text below to describe the color
    description.textContent = colorInfo[color];
    description.style.opacity = 0;
    setTimeout(() => description.style.opacity = 1, 100); // smooth fade
  });
});

// when i click play sound, play my mp3 file
soundBtn.addEventListener("click", () => {
  sound.play();
});

// next image button (it fades a bit)
nextImageBtn.addEventListener("click", () => {
  image.style.opacity = 0; // fade out
  
  setTimeout(() => {
    currentImage = (currentImage + 1) % images.length; // loop back to 1st img
    image.src = images[currentImage];
    image.style.opacity = 1; // fade in
  }, 300);
});


// click counter 
// counts how many times the user clicks the button
const counterBtn = document.getElementById("counter-btn");
const counterDisplay = document.getElementById("click-count");

let count = 0; // start from zero

counterBtn.addEventListener("click", () => {
  count++; // add 1 every click
  counterDisplay.textContent = `Clicks: ${count}`; // update text
});
