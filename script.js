const sushi = document.querySelector(".sushi");
const navmenu = document.querySelector(".nav-menu");


sushi.addEventListener("click", () => {
    sushi.classList.toggle('active');
    navmenu.classList.toggle('active');
})