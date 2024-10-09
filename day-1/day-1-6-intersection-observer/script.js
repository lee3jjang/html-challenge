function handleClick() {
  console.log("handleClick is called");
}

const observer = new IntersectionObserver((entries) => {
  // observer가 태그 찍었을 때 handler
  // 한번에 여러개 찍을 수 있어서 entries로 오는 듯?
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = 1;
    } else {
      entry.target.style.opacity = 0;
    }
  });
});

// observer = new IntersectionObserver((entries)=> {...})
// tag1, tag2, ... => observer.observe(tag1), observer.observe(tag2), ...
// opacity: 0 -> 1, transition: opacity 0.5s;

const divList = document.querySelectorAll("div");

divList.forEach((div) => {
  // 누구를 observe 할지?
  observer.observe(div);
});
