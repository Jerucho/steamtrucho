const bannerImgs = [
  "../../images/Banner.png",

  "https://cdn2.steamgriddb.com/hero/c73f4d8f3e0c84920eef1464c4c73cb8.jpg",

  "https://i.redd.it/vlm6uxl72j4c1.png",
];

document.addEventListener("DOMContentLoaded", () => {
  const banner = document.getElementById("banner");
  const bannerText = document.getElementById("bannerText");
  let currentIndex = 0;

  function changeBackground() {
    banner.style.backgroundImage = `url('${bannerImgs[currentIndex]}')`;
    currentIndex = (currentIndex + 1) % bannerImgs.length;
  }

  setInterval(changeBackground, 3000);
});
