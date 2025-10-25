// Smooth scroll to contact
function scrollToContact() {
  document.querySelector('#kontak').scrollIntoView({ behavior: 'smooth' });
}

// Animation for gallery
window.addEventListener('scroll', () => {
  const images = document.querySelectorAll('.gallery-container img');
  images.forEach(img => {
    const rect = img.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      img.style.opacity = '1';
      img.style.transform = 'scale(1.03)';
    } else {
      img.style.opacity = '0.7';
      img.style.transform = 'scale(1)';
    }
  });
});

// Form handler
document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Terima kasih! Pesan Anda telah dikirim.');
  this.reset();
});
