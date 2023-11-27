// hoverEffect.js

document.addEventListener("DOMContentLoaded", function () {
  // Get all social media icons
  const socialMediaIcons = document.querySelectorAll(".socialmedia-icons img");

  // Add event listeners for mouseover and mouseout
  socialMediaIcons.forEach((icon) => {
    icon.addEventListener("mouseover", function () {
      // Change opacity to 50% on hover
      icon.style.opacity = "0.5";
    });

    icon.addEventListener("mouseout", function () {
      // Reset opacity on mouseout
      icon.style.opacity = "1";
    });
  });
});
