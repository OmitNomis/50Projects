const loadText = document.querySelector(".loading-text");

const bg = document.querySelector(".bg");

let load = 0;

let int = setInterval(blurring, 20);

function blurring() {
  load++;
  if (load > 99) {
    clearInterval(int);
  }

  loadText.innerText = `${load}%`;
  loadText.style.opacity = (100 - load) / 100;
  bg.style.filter = `blur(${(100 - load) * 0.3}px)`;
}
