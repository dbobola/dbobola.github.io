/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader() {
  const header = document.getElementById("header");
  // when the scroll is greater than 50 viewport height, add the scroll header class to the header tag.
  if (this.scrollY >= 50) header.classList.add("scroll-header");
  else header.classList.remove("scroll-header");
}
window.addEventListener("scroll", scrollHeader);

/*=============== SERVICES MODAL ===============*/
const modalViews = document.querySelectorAll(".services__modal"),
  modalBtns = document.querySelectorAll(".services__button"),
  modalClose = document.querySelectorAll(".services__modal-close");

let modal = function (modalClick) {
  modalViews[modalClick].classList.add("active-modal");
};

modalBtns.forEach((mb, i) => {
  mb.addEventListener("click", () => {
    modal(i);
  });
});

modalClose.forEach((mc) => {
  mc.addEventListener("click", () => {
    modalViews.forEach((mv) => {
      mv.classList.remove("active-modal");
    });
  });
});
/*=============== MIXITUP FILTER PORTFOLIO ===============*/
let mixerPortfolio = mixitup(".work__container", {
  selectors: {
    target: ".work__card",
  },
  animation: {
    duration: 300,
  },
});

/* Link active work */
const linkWork = document.querySelectorAll(".work__item");
function activeWork() {
  linkWork.forEach((l) => l.classList.remove("active-work"));
  this.classList.add("active-work");
}
linkWork.forEach((l) => l.addEventListener("click", activeWork));
/*=============== SWIPER TESTIMONIAL ===============*/
let swiperTestimonial = new Swiper(".testimonial__container", {
  spaceBetween: 24,
  loop: true,
  grabCursor: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  breakpoints: {
    576: {
      slidesPerView: 2,
    },

    768: {
      slidesPerView: 2,
      spaceBetween: 48,
    },
  },
});

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll("section[id]");

const scrollActive = () => {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 58,
      sectionId = current.getAttribute("id"),
      sectionsClass = document.querySelector(
        ".nav__menu a[href*=" + sectionId + "]"
      );

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      sectionsClass.classList.add("active-link");
    } else {
      sectionsClass.classList.remove("active-link");
    }
  });
};
window.addEventListener("scroll", scrollActive);

/*=============== LIGHT DARK THEME ===============*/
const themeButton = document.getElementById("theme-button");
const lightTheme = "light-theme";
const iconTheme = "bx-sun";

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

// We obtain the current theme that the interface has by validating the light-theme class
const getCurrentTheme = () =>
  document.body.classList.contains(lightTheme) ? "dark" : "light";
const getCurrentIcon = () =>
  themeButton.classList.contains(iconTheme) ? "bx bx-moon" : "bx bx-sun";

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the light
  document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
    lightTheme
  );
  themeButton.classList[selectedIcon === "bx bx-moon" ? "add" : "remove"](
    iconTheme
  );
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener("click", () => {
  // Add or remove the light / icon theme
  document.body.classList.toggle(lightTheme);
  themeButton.classList.toggle(iconTheme);
  // We save the theme and the current icon that the user chose
  localStorage.setItem("selected-theme", getCurrentTheme());
  localStorage.setItem("selected-icon", getCurrentIcon());
});
/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2500,
  delay: 400,
  // resetL true,
});

sr.reveal(`.home__data`);
sr.reveal(`.home__handle`, { delay: 700 });
sr.reveal(`.home__social, .home__scroll`, { delay: 900, origin: "bottom" });

const typingContainer = document.querySelector(".typing-container");
const typingText = document.querySelector("#typing-text");

function autoScroll() {
  if (typingText.offsetHeight > typingContainer.offsetHeight) {
    typingText.classList.add("scrolling");
  } else {
    typingText.classList.add("scrolling");
  }
}

setInterval(autoScroll, 100);
function typeWriter() {
  new TypeIt("#home__intro", {
    speed: 50,
    startDelay: 900,
    waitUntilVisible: true,
  })
    .type("<span class='home__greeting'>Hello I'm.</span>", {
      delay: 100,
    })
    .break({ delay: 500 })

    .type("<span class='home__name'>David-Bobola</span>", { delay: 225 })
    .pause(200)
    .break({ delay: 500 })
    .type("<span class='home__education'>Self-taught Engineer</span>", {
      delay: 400,
    })
    .delete(20)
    .type("<span class='home__education'>DevOps and SRE Engineer</span>", {
      delay: 400,
    })
    .pause(200)
    .break({ delay: 500 })
    .type(
      "<em><strong class='home__education-subtitle'>with a focus on Python automation and AI.</strong></em>",
      {
        speed: 100,
      }
    )
    .go();

  new TypeIt("#typing-text", {
    speed: 50,
    startDelay: 900,
    waitUntilVisible: true,
    lifeLike: true,
    breakLines: false,
  })

    .type(
      "As a DevOps Engineer with 6+ years of experience, I bring extensive knowledge and passion to the field. My focus on Python automation and agile engineering for data science make me a valuable asset to any team. I dropped out of college to pursue my passion for AI, and my continuous unconventional learning and dedication have resulted in successful projects. "
    )
    .pause(500)
    .break({ delay: 500 })
    .type(
      "I am a true believer in collaboration, automation, and continuous improvement and I put these principles into practice in all my work. DevOps is more than just a set of tools and processes to me, it is a mindset and a way of life. "
    )
    .pause(500)
    .type(
      "I am driven by creating positive impact and delivering value to clients, whether building chatbots, automating testing, or guiding cloud migrations. I bring technical expertise, creative thinking, and emotional intelligence to every project I work on, and am inspired to shape the future of AI."
    )
    .pause(500)

    .go();
}
