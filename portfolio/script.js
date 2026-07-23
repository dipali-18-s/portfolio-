// =============================
// AOS Animation
// =============================

AOS.init({
    duration: 1000,
    once: true
});

// =============================
// Typing Effect
// =============================

var typed = new Typed(".typing", {
    strings: [
        "MCA Student",
        "Java Backend Developer",
        "Web Developer",
        "Problem Solver"
    ],
    typeSpeed: 80,
    backSpeed: 50,
    backDelay: 1500,
    loop: true
});

// =============================
// Mobile Menu
// =============================

const menuBtn = document.querySelector(".menu-btn");
const navbar = document.querySelector("nav");

menuBtn.addEventListener("click", () => {
    navbar.classList.toggle("active");
});

// Close menu after clicking a link

document.querySelectorAll("nav a").forEach(link => {

    link.addEventListener("click", () => {
        navbar.classList.remove("active");
    });

});

// =============================
// Sticky Header
// =============================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.style.background = "#020617";

    } else {

        header.style.background = "rgba(15,23,42,.9)";
    }

});

// =============================
// Active Navigation
// =============================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        if (scrollY >= sectionTop) {

            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});

// =============================
// Scroll To Top Button
// =============================

const topBtn = document.createElement("button");

topBtn.innerHTML = "↑";

topBtn.className = "top-btn";

document.body.appendChild(topBtn);

window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {

        topBtn.style.display = "block";

    } else {

        topBtn.style.display = "none";
    }

});

topBtn.onclick = () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

};

// =============================
// Scroll Progress Bar
// =============================

const progress = document.createElement("div");

progress.className = "progress-bar";

document.body.appendChild(progress);

window.addEventListener("scroll", () => {

    const totalHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    const progressHeight =
        (window.pageYOffset / totalHeight) * 100;

    progress.style.width = progressHeight + "%";

});

// =============================
// Fade Hero Image
// =============================

const heroImage = document.querySelector(".home-image img");

window.addEventListener("mousemove", (e) => {

    let x = (window.innerWidth / 2 - e.pageX) / 40;

    let y = (window.innerHeight / 2 - e.pageY) / 40;

    heroImage.style.transform =
        `translate(${x}px,${y}px)`;

});

// =============================
// Contact Form
// =============================

const form = document.querySelector("form");

form.addEventListener("submit", function (e) {

    e.preventDefault();

    alert("Thank you! Your message has been received.");

    form.reset();

});