'use strick'

document.addEventListener("DOMContentLoaded", () => {
    fetch("/components/header.html")
      .then(res => res.text())
      .then(data => {
        document.getElementById("header").innerHTML = data;
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
