const line = document.querySelector(".percent");
let start = 100;

setInterval(() => {
  if (start > 0) {
    start--;
  } else {
    start = 0;
  }
  console.log(line.style["stroke-dashoffset"]);
  line.style["stroke-dashoffset"] = start;
}, 500);
