let heading = document.querySelectorAll(".search__heading");
let menu = document.querySelectorAll(".search__menu");
let item = document.querySelectorAll("[data-menu-item]");
let group = document.querySelectorAll(".search__group");


for(let i = 0; i < heading.length; i++){
    heading[i].addEventListener("click", function(event){

        let check = menu[i].classList.toggle("hidden");

        setTimeout(function(){menu[i].style.opacity = "1";}, 10)

        //Закрытие других меню при переключении на другое
        for(let j = 0; j < heading.length; j++){
            if(!menu[j].classList.contains("hidden") && j!==i){
                menu[j].classList.add("hidden");
                menu[j].style.opacity = "0";

                //Стирает style старой стрелки
                let arrow = heading[j].querySelector("img");
                arrow.removeAttribute("style");
        
            }
        }

        //Если менюшка открыта то переворачиваем стрелку
        let arrow = heading[i].querySelector("img");
        if(!check){arrow.style.transform = "rotate(180deg)";} else {
            arrow.removeAttribute("style");
        }

    });
}

//Вставка из выборки в поле search__choice -> p(замена текста)
for(let i = 0; i < item.length; i++){
    item[i].addEventListener("click", function(event){
        let text = event.target.innerText;
        event.target.closest("div.search__heading").nextElementSibling.querySelector("p").innerText = text;
    });
}





//Подгон высоты менюшки
    //Клонирование параграфа дял того, чтобы узнать его высоту
let cloneParagraph = document.querySelector("[data-menu-item]").cloneNode();
cloneParagraph.innerText = "A";
cloneParagraph.style.visibility = "hidden";
cloneParagraph.style.position = "absolute";
cloneParagraph.style.bottom = "0";
cloneParagraph.style.left = "0";
document.querySelector("body").append(cloneParagraph);
        //Высота одного параграфа
let heightParagraph = cloneParagraph.offsetHeight;
cloneParagraph.remove();

    //Перебор
for(let i = 0; i < heading.length; i++){
        //Все опции в одном заголовке грубо говоря
    let options = heading[i].querySelectorAll("p");


    if(options.length * heightParagraph < 120){        
        let par = heading[i].querySelector(".search__menu")
        par.style.height = "auto";
        par.style.overflowY = "hidden";
    }
}





//Закрытие менюшки по клику по странице
window.addEventListener("click", function(){
    for(let i = 0; i < menu.length; i++){
        menu[i].style.opacity = "0";
        setTimeout(function(){menu[i].classList.add("hidden");}, 50);
        //Возращение стрелки в обратно положение
        heading[i].querySelector("img").removeAttribute("style");
    }
})

for(let i = 0; i < group.length;i++){
    group[i].addEventListener("click", function(event){
        event.stopPropagation();
    });
}

window.addEventListener("wheel", function(){
    for(let i = 0; i < menu.length; i++){
        menu[i].style.opacity = "0";
        setTimeout(function(){menu[i].classList.add("hidden");}, 90);
    }
});

for(let i = 0; i < group.length;i++){
    menu[i].addEventListener("wheel", function(event){
        event.stopPropagation();
    });
}





