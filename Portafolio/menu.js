document.addEventListener('DOMContentLoaded', () => {
  const hamburgerMenu = document.getElementById('hamburger-menu');
  const navMenu = document.querySelector('.nav-menu');
  const navLinks = document.querySelectorAll('.nav-menu a');
  const projectsNavItem = document.querySelector('.nav-projects');
  const projectsLink = projectsNavItem?.querySelector('a');
  const projectsDropdown = projectsNavItem?.querySelector('.dropdown-menu');

  function toggleMenu() {
    hamburgerMenu.classList.toggle('active');
    navMenu.classList.toggle('active');
  }

  hamburgerMenu.addEventListener('click', toggleMenu);

  // Close menu when a link is clicked
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      hamburgerMenu.classList.remove('active');
      navMenu.classList.remove('active');
      
      // Close dropdown if it exists
      if (projectsDropdown) {
        projectsDropdown.classList.remove('mobile-active');
      }
    });
  });

  // Projects dropdown toggle for mobile
  if (projectsLink && projectsDropdown) {
    projectsLink.addEventListener('click', (e) => {
      e.preventDefault();
      projectsDropdown.classList.toggle('mobile-active');
    });
  }

  // Close menu if clicked outside
  document.addEventListener('click', (event) => {
    const isClickInsideMenu = navMenu.contains(event.target);
    const isClickOnHamburger = hamburgerMenu.contains(event.target);
    
    if (!isClickInsideMenu && !isClickOnHamburger) {
      hamburgerMenu.classList.remove('active');
      navMenu.classList.remove('active');
      
      // Close dropdown if it exists
      if (projectsDropdown) {
        projectsDropdown.classList.remove('mobile-active');
      }
    }
  });
});