"use strict";

document.addEventListener("DOMContentLoaded", () => {
  // add header
  fetch("components/header.html")
    .then((res) => res.text())
    .then((data) => {
      document.getElementById("header").innerHTML = data;
    });

  //  add footer
  fetch("components/footer.html")
    .then((res) => res.text())
    .then((data) => {
      document.getElementById("footer").innerHTML = data;
    });

  // animation for pictures
  const animatedImages = document.querySelectorAll(
    ".hero__img-mb, .about__img-left, .about__img, .about__img--mb, .first-purchase__image, .follow__image, .follow__mb-img"
  );

  const observerVisible = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          obs.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.3,
    }
  );

  animatedImages.forEach((img) => observerVisible.observe(img));

  //  animation of popular elements
  const animatedElements = document.querySelectorAll(".popular__item, .item");

  const observerFade = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("fade-up");
          obs.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.3,
    }
  );

  animatedElements.forEach((el) => observerFade.observe(el));
});

// left/right animation (hero images)
const observerSideImages = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate");
        observerSideImages.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.1 }
);

document
  .querySelectorAll(".hero__img-left, .hero__img-right")
  .forEach((el) => observerSideImages.observe(el));

//  burger-menu toggle
document.addEventListener("click", documentActions);

function documentActions(e) {
  const targetElement = e.target;

  if (targetElement.closest(".icon-menu")) {
    document.body.classList.toggle("menu-open");
  }
}

// dropdown toggle
document.addEventListener("click", function (e) {
  const dropdown = e.target.closest(".dropdown");
  if (e.target.closest(".dropdown__title")) {
    dropdown.classList.toggle("active");
  } else {
    document.querySelectorAll(".dropdown").forEach((drop) => {
      if (drop !== dropdown) {
        drop.classList.remove("active");
      }
    });
  }
});

// remove the menu on the desktop during the re-site
window.addEventListener("resize", () => {
  if (window.innerWidth >= 768) {
    document.body.classList.remove("menu-open");
  }
});

//  blocking the standard action of clicking on icons
document.querySelectorAll(".icon__button").forEach((button) => {
  button.addEventListener("click", (e) => {
    e.stopPropagation();
    e.preventDefault();
  });
});
