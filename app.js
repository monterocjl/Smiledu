let matriculaBtn = document.querySelector(".btn-matricula");
let subMenu = document.querySelector(".sub-menu");
let arrow = document.querySelector(".arrow-selected");


    matriculaBtn.addEventListener("click", ()=>{
    subMenu.classList.toggle("showMenu");
    arrow.classList.toggle("showMenu");
    matriculaBtn.classList.toggle("showMenu");
    });

let sidebarBtn = document.querySelector(".smiledu-sidebar_header_menu-btn");
let sidebar = document.querySelector(".smiledu-sidebar");


    sidebarBtn.addEventListener("click", ()=>{
        sidebar.classList.toggle("close");
    });