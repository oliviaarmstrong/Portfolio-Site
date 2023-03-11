const PHOTOS = [
  "https://i.imgur.com/EPksE5F.png",
  "https://i.imgur.com/auJOyyc.png",
  "https://i.imgur.com/WGM7rTX.png",
  "https://i.imgur.com/dKhMVSI.png"
];
let index = 0;
document.querySelector(".painting").src = PHOTOS[index];

document.querySelector("#prev").addEventListener("click", () => {
  index -= 1;
  document.querySelector("#next").disabled = false;
  if (index === 0) {
    document.querySelector("#prev").disabled = true;
  }
  document.querySelector(".painting").src = PHOTOS[index];
});

function goToNext() {
  index += 1;
  document.querySelector("#prev").disabled = false;
  if (index === PHOTOS.length - 1) {
    document.querySelector("#next").disabled = true;
  }
  document.querySelector(".painting").src = PHOTOS[index];
}

document.querySelector("#next").addEventListener("click", goToNext);
