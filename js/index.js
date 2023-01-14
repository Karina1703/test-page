const headerButton = document.querySelector(".header__button");
const headerContent = document.querySelector(".header");
const info = document.querySelector(".info");

headerButton.addEventListener("click", () => {
    headerContent.classList.toggle("show");
    headerButton.classList.toggle("change");
})

info.addEventListener("click", (event) => {
    const link = event.target.closest('.info__link');
    const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)
    if(link && vw < 980){
        headerContent.classList.toggle("show");
        headerButton.classList.toggle("change");
    }
})

