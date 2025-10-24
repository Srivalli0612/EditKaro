const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Portfolio Filter
const filterBtns = document.querySelectorAll('.filter-btn');
const videoCards = document.querySelectorAll('.video-card');

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const category = btn.getAttribute('data-category');

    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    videoCards.forEach(card => {
      if (category === 'all' || card.getAttribute('data-category') === category) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
  });
});


// Lightbox Video Preview
const lightbox = document.getElementById('lightbox');
const lightboxVideo = document.getElementById('lightboxVideo');
const closeBtn = document.querySelector('.close-btn');

videoCards.forEach(card => {
  const video = card.querySelector('video');

  card.addEventListener('click', () => {
    lightbox.classList.add('active');
    lightboxVideo.src = video.src;
    lightboxVideo.play();
  });
});

closeBtn.addEventListener('click', () => {
  lightbox.classList.remove('active');
  lightboxVideo.pause();
  lightboxVideo.src = '';
});

lightbox.addEventListener('click', e => {
  if (e.target === lightbox) {
    lightbox.classList.remove('active');
    lightboxVideo.pause();
    lightboxVideo.src = '';
  }
});

// Smooth Scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});
