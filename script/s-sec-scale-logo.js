//Увеличение логотипов во 2 секции
let logo = document.querySelectorAll(".s-section__logo");

for(let i = 0; i < logo.length; i++){
    logo[i].addEventListener("mouseover",function(){
        logo[i].style.transform = "scale(1.1)";
    });

    logo[i].addEventListener("mouseout", function(){
        logo[i].removeAttribute("style");
    })
}