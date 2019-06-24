// get DOM elements
const video = document.querySelector(".player");
const svgImg = document.querySelector(".play-svg");
const thumbnail = document.querySelector("img.thumbnail");

// functions
const toggleVideo = (e) => video[video.paused ? "play" : "pause"]();
const updateButton = () => {
  svgImg.style.opacity = video.paused ? 0.8 : 0;
  thumbnail.style.opacity = 0;
}

// hook up listeners
video.addEventListener("click", toggleVideo);
svgImg.addEventListener("click", toggleVideo);
video.addEventListener("play", updateButton);
video.addEventListener("pause", updateButton);
