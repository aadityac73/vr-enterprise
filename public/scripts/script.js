const nav = document.querySelector(".navbar");
const body = document.querySelector("body");
const menu = document.querySelector(".mn-btn");
const cancel = document.querySelector(".cancel-btn");
menu.onclick = () => {
  nav.classList.add("show")
  body.classList.add("disabled")
}
cancel.onclick = () => {
  nav.classList.remove("show")
  body.classList.remove("disabled")
}