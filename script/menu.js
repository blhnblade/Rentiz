let menu = document.querySelector(".menu");
let hamburger = document.querySelector(".header__hamburger");
let closeButton = document.querySelector(".menu__close");

//Вылет менюшки и улёт гамбургера
hamburger.addEventListener("click", function(){
    menu.classList.remove("hidden");
    setTimeout(function(){menu.style.transform = "translateX(0%)";}, 1);
    hamburger.style.transform = "translateX(110%)";
});


//Закрытие менюшки и прилёт гамбургера
closeButton.addEventListener("click", function(){
    menu.removeAttribute("style");
    setTimeout(function(){menu.classList.add("hidden")}, 240);
    hamburger.removeAttribute("style");
    
})
