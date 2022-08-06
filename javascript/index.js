const toggle = document.querySelector("label");
const link = document.querySelector(".links");

toggle.addEventListener("click", function(){
    link.classList.toggle("show-links");
});