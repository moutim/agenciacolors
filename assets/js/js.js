const botaoMenu = document.querySelector(".menu")
const menuAberto = document.querySelector(".menu-aberto")

function abrirMenu (){
    menuAberto.classList.toggle("abrir-menu")
}
botaoMenu.addEventListener("click", abrirMenu)
