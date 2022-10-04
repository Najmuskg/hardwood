const menu = document.querySelector(".menu--icon");
const nav =document.querySelector(".nav");
const close =document.querySelector(".close--icon");

menu.addEventListener("click",()=>{
    nav.classList.toggle("active");
   close.classList.toggle("active");
   menu.classList.toggle("active");
});

close.addEventListener("click",() =>{
    nav.classList.toggle("active"); 
    close.classList.toggle("active");
    menu.classList.toggle("active");
})

var swiper = new Swiper(".slider", {
    slidesPerView: 3,
    // spaceBetween: 10,
    navigation: {
      nextEl: ".swiper-right-arrow",
      prevEl: ".swiper-left-arrow",
    },
  });
