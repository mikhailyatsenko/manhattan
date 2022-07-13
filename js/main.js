let scrollY;
let headerHeight = document.querySelector(".header").clientHeight;
let heroHeight = document.querySelector("#hero").clientHeight;

const iconMenu = document.querySelector(".burger-icon");
const menuBody = document.querySelector(".menu-body");

const menuLinks = document.querySelectorAll(".menu-link[data-goto]");

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

// burger menu

iconMenu.addEventListener("click", () => {
  iconMenu.classList.toggle("active");
  menuBody.classList.toggle("active");
});

//smooth menu click

if (menuLinks.length) {
  menuLinks.forEach((link) => {
    link.addEventListener("click", onMenuLinkClick);
  });
}

function onMenuLinkClick(e) {
  e.preventDefault();
  const menuLink = e.target;
  if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
    const gotoBlock = document.querySelector(menuLink.dataset.goto);
    const gotoBlockDistance = gotoBlock.getBoundingClientRect().top + window.scrollY - document.querySelector(".header").offsetHeight;

    if (iconMenu.classList.contains("active")) {
      iconMenu.classList.remove("active");
      menuBody.classList.remove("active");
    }

    window.scrollTo({
      top: gotoBlockDistance,
      behavior: "smooth",
    });
  }
}
