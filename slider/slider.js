const slider = document.getElementById("slider");
const images = ["images/1.jpg", "images/2.jpg", "images/3.jpg", "images/4.jpg"];

let imageIndex = 0;

setInterval(() => {
  if (imageIndex >= images.length) {
    imageIndex = 0;
  }
  const imageUrl = images[imageIndex];
  slider.setAttribute("src", imageUrl);
  imageIndex++;
}, 1000);
