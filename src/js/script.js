// 📨 Initialize EmailJS
emailjs.init("kt22qACEe_3RhodwH");

// 🔝 1. Back to Top Button Behavior
window.addEventListener("scroll", () => {
  const button = document.querySelector(".back-to-top");
  button.style.display = window.scrollY > 300 ? "block" : "none";
});

document.querySelector(".back-to-top").addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// 📱 2. Navbar Toggle for Responsive Menu
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// 🎯 3. Smooth Scroll for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", e => {
    e.preventDefault();
    const target = document.querySelector(anchor.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// 📌 4. Highlight Active Section in Navbar
const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-item");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    if (pageYOffset >= sectionTop - 60) {
      current = section.getAttribute("id");
    }
  });

  navItems.forEach(item => {
    item.classList.remove("active");
    const link = item.querySelector("a");
    if (link && link.getAttribute("href") === `#${current}`) {
      item.classList.add("active");
    }
  });
});

// ✨ 5. Typing Effect for Roles
const roleText = document.querySelector(".dynamic-role");
const roles = ["Web Designer", "UI/UX Designer", "Video Editor"];
let roleIndex = 0;
let charIndex = 0;

function typeRole() {
  if (charIndex < roles[roleIndex].length) {
    roleText.textContent += roles[roleIndex].charAt(charIndex);
    charIndex++;
    setTimeout(typeRole, 100);
  } else {
    setTimeout(() => {
      roleText.textContent = "";
      charIndex = 0;
      roleIndex = (roleIndex + 1) % roles.length;
      typeRole();
    }, 1000);
  }
}
typeRole();

// 💼 6. Animated Counters
const counters = document.querySelectorAll(".counter");
const speed = 200;

counters.forEach(counter => {
  function updateCount() {
    const target = +counter.getAttribute("data-target");
    const count = +counter.innerText;
    const increment = target / speed;

    if (count < target) {
      counter.innerText = Math.ceil(count + increment);
      setTimeout(updateCount, 30);
    } else {
      counter.innerText = target;
    }
  }
  updateCount();
});

// 🎩 7. Scroll Reveal Animation
const revealElements = document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {
  const triggerBottom = window.innerHeight * 0.85;
  revealElements.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < triggerBottom) {
      el.classList.add("visible");
    } else {
      el.classList.remove("visible");
    }
  });
});

// 📬 8. Contact Form Submission (Page 3)
document.querySelector(".contact-form").addEventListener("submit", function(e) {
  e.preventDefault();
  emailjs.sendForm("kt22qACEe_3RhodwH", "template_v77e14j", this)
    .then(() => emailjs.sendForm("kt22qACEe_3RhodwH", "template_mhjwxrq", this))
    .then(() => alert("Message sent successfully!"))
    .catch(error => {
      console.error("Email failed:", error);
      alert("Failed to send message. Please try again.");
    });
});

// 🖼️ 9. Portfolio Click Behavior (Page 4)
document.querySelectorAll('.project-box').forEach(box => {
  box.addEventListener('click', (e) => {
    const link = box.getAttribute('href');
    window.open(link, '_blank'); // Opens the link in a new tab
  });
});




