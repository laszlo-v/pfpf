// getting elements we need to work with
const hamContainer = document.querySelector(".ham-container");
const nav = document.querySelector(".home-container nav ul");

const accordionHead = document.querySelectorAll(".accordion-head");
const accordionBody = document.querySelectorAll(".accordion-body");

const accordionHeadArray = Array.prototype.slice.call(accordionHead);
const accordionBodyArray = Array.prototype.slice.call(accordionBody);

// onclick event to toggle states/classnames
hamContainer.addEventListener("click", () => {
  nav.classList.toggle("nav-active");
  hamContainer.classList.toggle("ham-active");
});

// accordion starts here
accordionHeadArray
  ? accordionHeadArray.forEach((e, i) => {
      e.addEventListener("click", () => {
        accordionHeadArray.forEach((e) => {
          e.classList.contains("accordion-head-active")
            ? e.classList.remove("accordion-head-active")
            : "";
        });
        accordionBodyArray.forEach((e) => {
          e.classList.contains("accordion-body-active")
            ? e.classList.remove("accordion-body-active")
            : "";
        });
        accordionHeadArray[i].classList.toggle("accordion-head-active");
        accordionBodyArray[i].classList.toggle("accordion-body-active");
      });
    })
  : "";

// nav links decoration, removing and adding classname
const navAs = document.querySelectorAll(".navigation a");
navAs.forEach((e, i) => {
  e.addEventListener("click", () => {
    navAs.forEach((e) => {
      e.classList.contains("nav-link-active")
        ? e.classList.remove("nav-link-active")
        : "";
    });

    navAs[i].classList.add("nav-link-active");
    // closing the nav & resetting the ham icon
    nav.classList.toggle("nav-active");
    hamContainer.classList.toggle("ham-active");
  });
});

/********* hamburger button accessibility - only the button, not the links ********************/

const hamContainerAccessibility = document.querySelector(".ham-container");
const menu = document.querySelector(".navigation ul");

hamContainerAccessibility.addEventListener("keydown", (event) => {
  if (event.key === "Enter" || event.keyCode === 13) {
    // Toggle the menu visibility
    const expanded = menu.getAttribute("aria-expanded") === "true" || false;
    menu.setAttribute("aria-expanded", !expanded);
  }
});

/****  only works on desktop + css style required, messes up the mobile nav links !!! ****** */
// const divId = document.querySelectorAll("#home");
// const sections = document.querySelectorAll("section[id]");

// const divAndSections = new Set([...divId, ...sections]);

// console.log(divAndSections);
// const navHighlighter = () => {
//   let scrollY = window.pageYOffset + 100;

//   divAndSections.forEach((current) => {
//     const sectionHeight = current.offsetHeight;
//     const sectionTop = current.offsetTop;
//     sectionId = current.getAttribute("id");

//     if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
//       document
//         .querySelector(".navigation a[href*=" + sectionId + "]")
//         .classList.add("nav-active");
//     } else {
//       document
//         .querySelector(".navigation a[href*=" + sectionId + "]")
//         .classList.remove("nav-active");
//     }
//   });
// };

// window.addEventListener("scroll", navHighlighter);

// on Chrome it sometimes jumps to contact on page load, => probably autofocus.
const scrollToTop = () => {
  window.scrollTo(0, 0);
};
setTimeout(() => {
  scrollToTop();
}, 100);
