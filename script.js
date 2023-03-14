// Get references to the hero image and featured item images
const heroImage = document.getElementById('hero-image');
const featuredImages = document.querySelectorAll('.featured-items a');

// Loop through each featured item image and add a click event listener
featuredImages.forEach(featuredImage => {
  featuredImage.addEventListener('click', event => {
    event.preventDefault(); // Prevent the default link behavior
    const newImage = event.currentTarget.dataset.image; // Get the filename of the new image
    heroImage.src = newImage; // Set the hero image source to the new image
  });
});
