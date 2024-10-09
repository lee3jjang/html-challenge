const buttons = document.querySelectorAll("button");

for (const button of buttons) {
  button.addEventListener("click", () => {
    // document.querySelector("#header")
    const targetId = button.dataset.target;
    // querySelector<K extends keyof HTMLElementTagNameMap>(selectors: K): HTMLElementTagNameMap[K] | null;
    // HTMLElementTagNameMap: "a" -> ..., "button" -> ...
    // K: "a", "button", ...
    // querySelector<E extends Element = Element>(selectors: string): E | null;
    const target = document.querySelector(targetId);

    // window.scrollTo: top, left 줄 수 있는데 사실상 top만 주는 걸로;
    // const options = {top: 100, behavior: "smooth"}
    // window.scrollTo(options)
    window.scrollTo({ top: target.offsetTop, behavior: "smooth" });
  });
  button.addEventListener("click", () => {
    console.log(`${button.dataset.target} is called`);
  });
}
