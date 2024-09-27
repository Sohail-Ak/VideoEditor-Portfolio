document.addEventListener('DOMContentLoaded', function() {
    const typewriterText = 'Video Editor';
    let i = 0;
    let isDeleting = false;
    const speed = 100; // Speed of typing in milliseconds
    const delay = 1000; // Delay before starting to delete or type again
  
    function typeWriter() {
      const display = document.getElementById('typewriter');
  
      if (isDeleting) {
        display.innerHTML = typewriterText.substring(0, i--);
        if (i < 0) {
          isDeleting = false;
          setTimeout(typeWriter, delay); // Pause before typing again
          return;
        }
      } else {
        display.innerHTML = typewriterText.substring(0, i++);
        if (i > typewriterText.length) {
          isDeleting = true;
          setTimeout(typeWriter, delay); // Pause before deleting
          return;
        }
      }
  
      setTimeout(typeWriter, speed);
    }
  
    typeWriter(); // Start the typewriter effect
  
    // Existing functionality for toggle icon navbar, sticky header, etc.
    let menuIcon = document.querySelector("#menu-icon");
    let navbar = document.querySelector(".navbar");
  
    menuIcon.onclick = () => {
      menuIcon.classList.toggle("bx-x");
      navbar.classList.toggle("active");
    };
  
    let sections = document.querySelectorAll("section");
    let navLinks = document.querySelectorAll("header nav a");
  
    window.onscroll = () => {
      let header = document.querySelector("header");
      header.classList.toggle("sticky", window.scrollY > 100);
  
      sections.forEach((sec) => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute("id");
  
        if (top >= offset && top < offset + height) {
          navLinks.forEach((link) => {
            link.classList.remove("active");
            document
              .querySelector("header nav a[href*=" + id + "]")
              .classList.add("active");
          });
        }
      });
  
      navLinks.forEach((link) => {
        link.onclick = () => {
          menuIcon.classList.remove("bx-x");
          navbar.classList.remove("active");
        };
      });
  
      // Animation Footer on Scroll
      // Add your footer animation code here if needed
    };
  });
  