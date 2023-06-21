const imageEl = document.getElementById("fadingImage");
const images = [
  "images/IMG.png", 
  "images/njord.jpg",
  "images/njord2.png"
];

window.setInterval(changePicture, 5000);
let i = 0;
function changePicture() {
  i++;
  if (i > images.length - 1) i = 0;
  imageEl.style.backgroundImage = `url(${images[i]})`;
}