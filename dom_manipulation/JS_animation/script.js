let box = document.querySelector("#box-animated");
let btn = document.querySelector("#btn");

btn.addEventListener("click", animate);

let timer = null;
function animate() {
  let position = 0;
  if (timer) clearInterval(timer);
  timer = setInterval(frame, 10);
  function frame() {
    if (position === 350) clearInterval(timer);
    else {
      position++;
      box.style.left = position + "px";
      box.style.top = position + "px";
    }
  }
}
