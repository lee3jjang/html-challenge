function handleClick() {
  console.log("handleClick is called");
}

const buttons = document.querySelectorAll("a");

buttons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const x = e.clientX - e.target.offsetLeft;
    const y = e.clientY - e.target.offsetTop;
    const ripples = document.createElement("span");
    ripples.style.left = `${x}px`;
    ripples.style.top = `${y}px`;
    btn.appendChild(ripples);
    setTimeout(() => {
      ripples.remove();
    }, 1000);
  });
});
