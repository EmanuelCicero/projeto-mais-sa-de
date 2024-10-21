
const navbarScrollAdjust = document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute('href'));
    const navbarHeight = document.querySelector('header').offsetHeight;

    window.scrollTo({
      top: target.offsetTop - 15 - navbarHeight,
      behavior: 'smooth'
    });
  });
});

export default navbarScrollAdjust;