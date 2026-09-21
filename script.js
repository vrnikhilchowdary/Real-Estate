// Beginner-friendly interactions for the landing page

const header = document.querySelector(".site-header");
const navToggle = document.getElementById("navToggle");
const mainNav = document.getElementById("mainNav");
const enquireForm = document.getElementById("enquireForm");
const formStatus = document.getElementById("formStatus");

// Darken the header after the user scrolls past the top
window.addEventListener("scroll", function () {
  if (window.scrollY > 40) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

// Open / close the mobile menu
navToggle.addEventListener("click", function () {
  const isOpen = mainNav.classList.toggle("open");
  navToggle.setAttribute("aria-expanded", String(isOpen));
  navToggle.setAttribute("aria-label", isOpen ? "Close menu" : "Open menu");
});

// Close the menu when a navigation link is clicked
mainNav.querySelectorAll("a").forEach(function (link) {
  link.addEventListener("click", function () {
    mainNav.classList.remove("open");
    navToggle.setAttribute("aria-expanded", "false");
    navToggle.setAttribute("aria-label", "Open menu");
  });
});

// Simple form check (no backend required)
enquireForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const city = document.getElementById("city").value;

  if (!name || !email || !city) {
    formStatus.textContent = "Please fill in your name, email, and city.";
    return;
  }

  formStatus.textContent = "Thank you. Our concierge team will be in touch shortly.";
  enquireForm.reset();
});
