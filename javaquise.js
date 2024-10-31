document.addEventListener("DOMContentLoaded", function() {
    const image = document.getElementById("image");
    
    image.addEventListener("click", function() {
        // Check if the image is already enlarged
        if (image.style.transform === "scale(2)") {
            image.style.transform = "scale(1)"; // Reset to original size
        } else {
            image.style.transform = "scale(2)"; // Enlarge the image
        }
    });
});