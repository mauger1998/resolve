const menu = document.querySelector("nav img")
const dropDown = document.querySelector(".drop-down")

menu.addEventListener("click", () => {
    dropDown.classList.toggle("drop-down-add")
})