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

// const menuList = [
//   { label: "About Us", link: "/about" },
//   { label: "Catalog", link: "/catalog" },
//   { label: "Contacts", link: "/contacts" },
// ];

// document.addEventListener("DOMContentLoaded", () => {
//   const menu = document.querySelector("#menu");

//   const html = menuList.map(
//     item => `<li class='menu__item'><a href="${item.link}">${item.label}</a></li>`
//   ).join("");

//   menu.innerHTML = `<ul class='menu__list'>${html}</ul>`;
// });

document.addEventListener("click", documentActions);

function documentActions(e) {
  const targetElement = e.target;

  if (targetElement.closest(".icon-menu")) {
    document.body.classList.toggle("menu-open");
  }
}

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
  const mobileImage = document.querySelector(".hero__img-mb");

  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        mobileImage.classList.add("visible");
      }
    },
    {
      threshold: 0.3,
    }
  );

  if (mobileImage) {
    observer.observe(mobileImage);
  }
});
