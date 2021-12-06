//Header Function Work 

let menu2 = document.querySelector('#menu2')
let navbar = document.querySelector('.navbar-2');
let header2 = document.querySelector('.header-2');

function navToggle(){
    menu2.classList.toggle('fa-times');
    navbar.classList.toggle('nav-toggle');
}

window.addEventListener('scroll',function(){

    menu2.classList.remove('fa-times');
    navbar.classList.remove('nav-toggle');

    if(window.scrollY > 60){
        header2.classList.add('sticky');
    }else{
        header2.classList.remove('sticky');
    }

});

$('.carousel').carousel({
  interval: false,
});

//menu item active work
$(document).on('click', '.items li', function () {
  $(this).addClass('active').siblings().removeClass('active')
})

//Admin Panel navigation menu button click and show sidebar in small screen
$('#menu-btn').click(function () {
  $('#menu').toggleClass('active')
})



// $(".slider").owlCarousel({
//         loop: true,
//         autoplay: true,
//         autoplayTimeout: 2000, //2000ms = 2s;
//         autoplayHoverPause: true,
//       });
// Scroll to top button appear
// $(document).on('scroll', function () {
//     var scrollDistance = $(this).scrollTop();
//     if (scrollDistance > 100) {
//       $('.scroll-to-top').fadeIn();
//     } else {
//       $('.scroll-to-top').fadeOut();
//     }
//   });

//scroll bottom to top
var scrollToTopBtn = document.querySelector(".scrollToTopBtn");
var rootElement = document.documentElement;

// function handleScroll() {
//   // Do something on scroll
//   var scrollTotal = rootElement.scrollHeight - rootElement.clientHeight;
//   if (rootElement.scrollTop / scrollTotal > 0.8) {
//      Show button
//     scrollToTopBtn.classList.add("showBtn");
//   } else {
//     Hide button
//     scrollToTopBtn.classList.remove("showBtn");
//   }
// }

function scrollToTop() {
  // Scroll to top logic
  rootElement.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}
scrollToTopBtn.addEventListener("click", scrollToTop);
document.addEventListener("scroll", handleScroll);