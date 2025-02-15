const menuhamburguer = document.querySelector(".menu-hamburguer");
const menuMobile = document.querySelector(".menu-mobile");

menuhamburguer.addEventListener("click", () => {
    menuMobile.classList.toggle("active"); // Alterna a classe active para mostrar/ocultar o menu
});
