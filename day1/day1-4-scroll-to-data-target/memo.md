☐ window.scrollTo({ top: 000, behavior: "smooth"})
  - 원하는 위치로 이동이 가능함
  - window.scrollTo -> { top: xxx, behavior: yyy } -> 그리로 이동함
    (☆ xxx: number형 value)

☐ <div id="#ele" data-target="some data" />
  - ele 선택 후 -> ele.dataset.target -> value 끄집어낼 수 있다

☐ ele.addEventListener("click", (event) => {
  ...
  event.clientX, event.clientY
  event.target.offsetTop
  event.target.offsetLeft
  const span = document.createElement("span");
  span.style.x = "10px";
  span.style.y = "10px";
  ele.appendChild(span);
})

  - event -> clientX, clientY
  - event -> target -> target.offsetLeft, taget.offsetTop
  - number 타입, px 단위
  - element(addEventListener), event, document(createElement)