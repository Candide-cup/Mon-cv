const menuOpenButton = document.querySelector("#menu-open-button");
const menuCloseButton = document.querySelector("#menu-close-button");

menuOpenButton.addEventListener("touchstart", () => {
  document.body.classList.toggle("show-mobile-menu");
});
menuCloseButton.addEventListener("touchstart", () => menuOpenButton.click());
// menuOpenButton.addEventListener("click", () => menuOpenButton.click());
