
document.addEventListener("DOMContentLoaded", function () {

  /* ===============================
     ELEMENT SELECTION
  =============================== */

  const menuToggle = document.getElementById("menuToggle");
  const menu = document.getElementById("m1");
  const navLinks = document.querySelectorAll(".premium-menu a");
  const sections = document.querySelectorAll("section[id]");
  const revealElements = document.querySelectorAll(".reveal, .about-section, #contactUs");


  /* ===============================
     MOBILE MENU TOGGLE (SAFE)
  =============================== */

  if (menuToggle) {
    menuToggle.addEventListener("click", () => {
      menu.classList.toggle("show");
    });
  }


  /* ===============================
     CLICK MENU HIGHLIGHT
  =============================== */

  navLinks.forEach(link => {
    link.addEventListener("click", function () {
      navLinks.forEach(l => l.classList.remove("active"));
      this.classList.add("active");

      // Close mobile menu after click
      if (menu) {
        menu.classList.remove("show");
      }
    });
  });


  /* ===============================
     SCROLL EVENTS (REVEAL + ACTIVE MENU)
  =============================== */

  function handleScroll() {

    const scrollY = window.pageYOffset;
    const triggerPoint = window.innerHeight * 0.85;

    /* ---- Reveal Animation ---- */
    revealElements.forEach(el => {
      const top = el.getBoundingClientRect().top;
      if (top < triggerPoint) {
        el.classList.add("active");
      }
    });

    /* ---- Active Menu on Scroll ---- */
    sections.forEach(section => {

      const sectionHeight = section.offsetHeight;
      const sectionTop = section.offsetTop - 120;
      const sectionId = section.getAttribute("id");

      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {

        navLinks.forEach(link => link.classList.remove("active"));

        const activeLink = document.querySelector(
          '.premium-menu a[href="#' + sectionId + '"]'
        );

        if (activeLink) {
          activeLink.classList.add("active");
        }
      }
    });
  }

  window.addEventListener("scroll", handleScroll);

  /* Run once on load */
  handleScroll();

});
