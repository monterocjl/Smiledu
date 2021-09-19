// Para ocultar y mostrar la Sidebar
let sidebarBtn = document.querySelector(".smiledu-sidebar_header_menu-btn");
let sidebar = document.querySelector(".smiledu-sidebar");
    sidebarBtn.addEventListener("click", ()=>{
        sidebar.classList.toggle("close");
    });


// Para desplegar el detalle de las herramientas del sidebar panel
let matriculaBtn = document.querySelector(".btn-matricula");
let subMenu = document.querySelector(".sub-menu");
let arrow = document.querySelector(".arrow-selected");
    matriculaBtn.addEventListener("click", ()=>{
    subMenu.classList.toggle("showMenu");
    arrow.classList.toggle("showMenu");
    matriculaBtn.classList.toggle("showMenu");
    });


// Para desplegar el detalle de las Card de los grados del colegio elegido
const cardCollageBtn = document.querySelectorAll(".btn-card-collage");
for (let i = 0; i < cardCollageBtn.length; i++) {
    cardCollageBtn[i].addEventListener("click", function () {
        const card = this.parentElement;
        const cardCollageSubMenu = this.nextElementSibling;

        cardCollageSubMenu.classList.toggle("showDetails");
        card.classList.toggle("showDetails");
})}

// Para desplegar FABs
const fabBtn = document.querySelector(".fab");
const fabsOpen = document.querySelector(".fab-open");
    fabBtn.addEventListener("click", ()=>{
        fabsOpen.classList.toggle("showFabs");
        fabBtn.classList.toggle("showFabs");
    });