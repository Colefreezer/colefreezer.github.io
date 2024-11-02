document.addEventListener('DOMContentLoaded', function() {
    let currentImageIndex = 0;
    const images = [
      'CSS/Images/Display/Display1.png',
      'CSS/Images/Display/Display2.png',
      'CSS/Images/Display/Display3.png',
    ];
  
    const photoSection = document.querySelector('.photoSection');
  
    function changeImage() {
      currentImageIndex = (currentImageIndex + 1) % images.length;
      photoSection.style.backgroundImage = `url(${images[currentImageIndex]})`;
      photoSection.classList.add('swipe-animation');
      setTimeout(() => {
        photoSection.classList.remove('swipe-animation');
      }, 1000); // Adjust this timeout value to match your CSS transition duration
    }
  
    // Change image every 5 seconds (5000 milliseconds)
    const interval = setInterval(changeImage, 5000);
  });
  