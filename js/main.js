let scrollY;
let headerHeight = document.querySelector(".header").clientHeight;
let heroHeight = document.querySelector("#hero").clientHeight;

const swiper = new Swiper(".mySwiper", {
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  // autoplay: {
  //   delay: 2500,
  //   disableOnInteraction: false,
  // },
});

var swiper2 = new Swiper(".gallery-swiper", {
  slidesPerView: 2,
  spaceBetween: 30,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    1281: {
      slidesPerView: 4,
    },
    769: {
      slidesPerView: 3,
    },
  },
});

function stickyMenu() {
  scrollY = window.pageYOffset;
  if (scrollY > headerHeight) {
    document.querySelector(".header").classList.add("fixed");
  } else {
    document.querySelector(".header").classList.remove("fixed");
  }

  if (scrollY > heroHeight) {
    document.querySelector(".header").classList.add("in-view");
  } else {
    document.querySelector(".header").classList.remove("in-view");
  }
}

window.addEventListener("scroll", stickyMenu);
