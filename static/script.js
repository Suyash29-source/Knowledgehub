// ✅ Navbar Toggle (Mobile)
const menuIcon = document.getElementById('menuIcon');
const navLinks = document.getElementById('navLinks');

menuIcon.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

document.querySelectorAll('.nav-links a, .register-btn').forEach(link => {
  link.addEventListener('click', () => {
    if (window.innerWidth <= 700) {
      navLinks.classList.remove('open');
    }
  });
});

// ✅ Course Tab Switching
const badges = document.querySelectorAll('.badge');
const courseSections = document.querySelectorAll('.course-cards');

badges.forEach(badge => {
  badge.addEventListener('click', () => {
    // Remove active from all badges
    badges.forEach(b => b.classList.remove('active'));
    badge.classList.add('active');

    // Hide all course sections
    courseSections.forEach(section => section.classList.remove('active'));

    // Show selected section
    const targetId = badge.getAttribute('data-target');
    const target = document.getElementById(targetId);
    if (target) {
      target.classList.add('active');
    }
  });
});

// ✅ Auto Sliding Quote Cards
const slides = document.querySelectorAll('.slide');
const slider = document.getElementById('slider');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const indicator = document.getElementById('sliderIndicator');

let currentIndex = 0;
const totalSlides = slides.length;
let autoSlideInterval;

function showSlide(index) {
  const slider = document.getElementById("slider");
  const slides = document.querySelectorAll(".slide");
  const indicator = document.getElementById("sliderIndicator");

  if (index < 0) index = slides.length - 1;
  if (index >= slides.length) index = 0;
  currentIndex = index;

  const slideWidth = slider.offsetWidth; // ← slider ki actual width
  slider.style.transform = `translateX(-${index * slideWidth}px)`;

  indicator.textContent = `${index + 1}/${slides.length}`;
}


prevBtn.addEventListener('click', () => {
  showSlide(currentIndex - 1);
  resetAutoSlide();
});

nextBtn.addEventListener('click', () => {
  showSlide(currentIndex + 1);
  resetAutoSlide();
});

function startAutoSlide() {
  autoSlideInterval = setInterval(() => {
    showSlide(currentIndex + 1);
  }, 3000);
}

function resetAutoSlide() {
  clearInterval(autoSlideInterval);
  startAutoSlide();
}

// Initialize slider
showSlide(0);
startAutoSlide();

    // Tab active effect
    document.querySelectorAll('.subject-btn').forEach(btn => {
      btn.addEventListener('click', function(){
        document.querySelectorAll('.subject-btn').forEach(b => b.classList.remove('active'));
        this.classList.add('active');
      });
    });