const bar=document.querySelector(".bar-icon");
const right_nav=document.querySelector(".right-nav")
const ul=document.querySelector(".right-nav ul")

bar.addEventListener('click',function(){
    right_nav.classList.toggle("display")
    ul.classList.toggle("active")
})
