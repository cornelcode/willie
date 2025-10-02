// Array of image paths
const images = [
  "Screenshot 2025-10-02 041533.png",
  "Screenshot 2025-10-02 041601.png",
  "Screenshot 2025-10-02 041621.png",
  "Screenshot 2025-10-02 041642.png"
];

let currentIndex = 0;
const heroSection = document.querySelector(".hero");

// Function to change background
function changeBackground() {
  heroSection.style.backgroundImage = `url('${images[currentIndex]}')`;
  currentIndex = (currentIndex + 1) % images.length;
}

// Start slideshow
changeBackground(); // set first image
setInterval(changeBackground, 5000); // change every 5 seconds
