function handleClick() {
  console.log("handleClick is called");
}

let lastScroll = 0;
document.addEventListener("scroll", () => {
  const currentScroll = document.documentElement.scrollTop;
  const isScrollDown = currentScroll >= lastScroll;
  lastScroll = currentScroll;
  const header = document.querySelector("header");
  console.log(isScrollDown);

  if (isScrollDown) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
});
