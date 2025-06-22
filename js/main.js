"use strick";

document.addEventListener("DOMContentLoaded", () => {
  fetch("/components/header.html")
    .then((res) => res.text())
    .then((data) => {
      document.getElementById("header").innerHTML = data;
    });
});

document.addEventListener("DOMContentLoaded", () => {
  fetch("/components/footer.html")
    .then((res) => res.text())
    .then((data) => {
      document.getElementById("footer").innerHTML = data;
    });
});

document.addEventListener("click", documentActions);

function documentActions(e) {
  const targetElement = e.target;

  if (targetElement.closest(".icon-menu")) {
    document.body.classList.toggle("menu-open");
  }
}

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

window.addEventListener("resize", () => {
  if (window.innerWidth >= 768) {
    document.body.classList.remove("menu-open");
  }
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.1 }
);

document
  .querySelectorAll(".hero__img-left, .hero__img-right")
  .forEach((el) => observer.observe(el));

document.addEventListener("DOMContentLoaded", () => {
  const animatedImages = document.querySelectorAll(
    ".hero__img-mb, .about__img-left, .about__img, .about__img--mb, .first-purchase__image, .follow__image, .follow__mb-img"
  );

  const observer = new IntersectionObserver(
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

  animatedImages.forEach((img) => observer.observe(img));
});

document.querySelectorAll(".icon__button").forEach((button) => {
  button.addEventListener("click", (e) => {
    e.stopPropagation();
    e.preventDefault();
  });
});
