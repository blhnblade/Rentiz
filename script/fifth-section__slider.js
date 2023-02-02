//Область слайдера
let sliderArea = document.querySelector(".fifth-section__slider");
//Слайды
let slide = sliderArea.querySelectorAll(".fifth-section__slide");

//Обнаружение максимальной высоты слайда
let max = getComputedStyle(slide[0]).height;
for(let i = 1; i < slide.length; i++){
        if(max < getComputedStyle(slide[i]).height){
            max = getComputedStyle(slide[i]).height;
        }
}
sliderArea.style.height = max;


//Массив с высотой слайдов
let heightSlide = [];
for(let i = 0; i < slide.length; i++){
    heightSlide[i] = getComputedStyle(slide[i]).height;
}

//Стрелки
let arrowLeft = document.querySelector("#slider-left-arrow");
let arrowRight = document.querySelector("#slider-right-arrow");

//Удаление всех сладйов кроме первого
for(let i = 1; i<slide.length; i++){
    slide[i].remove();
}

//Показатель отображенного сдайда
let slideNow = 0;


//Клик по правой стрелке
arrowRight.addEventListener("click", function(){
    slideNow++;
    if(slideNow === slide.length){slideNow = 0;}
    sliderArea.querySelector(".fifth-section__slide").remove()
    sliderArea.append(slide[slideNow]);
});



//Клик по левой стрелке
arrowLeft.addEventListener("click", function(){
    slideNow--;
    if(slideNow === -1){slideNow = slide.length-1;}
    sliderArea.querySelector(".fifth-section__slide").remove();
    sliderArea.append(slide[slideNow]);
});
