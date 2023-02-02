//header login signup изменение цвета background'a

let login = document.querySelector(".header__login");
let signup = document.querySelector(".header__signup");

login.addEventListener("mouseover",function(){
    login.style.backgroundColor = "var(--color-bright-green)";
    login.style.border = "1px solid var(--color-bright-green)";
    signup.style.backgroundColor = "transparent";
    signup.style.border = "1px solid var(--color-bright-green)";
})

login.addEventListener("mouseout",function(){
    login.removeAttribute("style");
    signup.style.backgroundColor = "var(--color-bright-green)";
    signup.style.border = "1px solid var(--color-bright-green)";
});

signup.addEventListener("mouseover",function(){

})

signup.addEventListener("mouseout",function(){
    signup.removeAttribute("style");
    login.style.backgroundColor = "transparent";
    login.style.border = "1px solid var(--color-bright-green)";
});
