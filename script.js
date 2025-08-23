document.addEventListener("DOMContentLoaded", () => {
  // 📨 Initialize EmailJS
  emailjs.init("kt22qACEe_3RhodwH");

  // 🔝 Back to Top Button Behavior
  const backToTop = document.querySelector(".back-to-top");
  window.addEventListener("scroll", () => {
    if (backToTop) {
      backToTop.style.display = window.scrollY > 300 ? "block" : "none";
    }
  });

  if (backToTop) {
    backToTop.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  // 📱 Navbar Toggle
  const menuToggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");
  if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
      navLinks.classList.toggle("active");
    });
  }

  // 🎯 Smooth Scroll
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", e => {
      e.preventDefault();
      const target = document.querySelector(anchor.getAttribute("href"));
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  });

  // 📌 Highlight Active Section
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

  // ✨ Typing Effect
  const roleText = document.querySelector(".dynamic-role");
  const roles = ["Web Designer", "UI/UX Designer", "Video Editor"];
  let roleIndex = 0;
  let charIndex = 0;

  function typeRole() {
    if (roleText && charIndex < roles[roleIndex].length) {
      roleText.textContent += roles[roleIndex].charAt(charIndex);
      charIndex++;
      setTimeout(typeRole, 100);
    } else {
      setTimeout(() => {
        if (roleText) roleText.textContent = "";
        charIndex = 0;
        roleIndex = (roleIndex + 1) % roles.length;
        typeRole();
      }, 1000);
    }
  }
  if (roleText) typeRole();

  // 💼 Animated Counters
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

  // 🎩 Scroll Reveal
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

  // 📬 Contact Form Submission
  const contactForm = document.querySelector(".contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", function(e) {
      e.preventDefault();
      emailjs.sendForm("kt22qACEe_3RhodwH", "template_v77e14j", this)
        .then(() => emailjs.sendForm("kt22qACEe_3RhodwH", "template_mhjwxrq", this))
        .then(() => alert("Message sent successfully!"))
        .catch(error => {
          console.error("Email failed:", error);
          alert("Failed to send message. Please try again.");
        });
    });
  }

  // 🖼️ Portfolio Click Behavior
  document.querySelectorAll('.project-box').forEach(box => {
    box.addEventListener('click', (e) => {
      const link = box.getAttribute('href');
      window.open(link, '_blank');
    });
  });
});
