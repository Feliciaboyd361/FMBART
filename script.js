const button = document.getElementById('toggleNightMode');
if (button) {
    button.addEventListener('click', () => {
        document.body.classList.toggle('night-mode'); 
        
       
        button.textContent = document.body.classList.contains('night-mode') 
            ? 'Switch to Day Mode' 
            : 'Switch to Night Mode';
    });
} else {
    console.error("Night Mode button not found!");
}


const galleryItems = document.querySelectorAll('.gallery-item img'); 
const lightbox = document.getElementById('lightbox');
const lightboxImage = document.getElementById('lightbox-image');
const closeButton = document.querySelector('.close');

if (galleryItems.length && lightbox && lightboxImage && closeButton) {
    galleryItems.forEach(item => {
        item.addEventListener('click', () => {
            lightboxImage.src = item.src; 
            lightbox.classList.add('show');
        });
    });

    closeButton.addEventListener('click', () => {
        lightbox.classList.remove('show');
    });

    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            lightbox.classList.remove('show');
        }
    });
} else {
    console.error("Lightbox elements not properly configured!");
}


const profileImage = document.getElementById('profileImage');
if (profileImage) {
    profileImage.addEventListener('mouseover', () => {
        profileImage.style.filter = 'grayscale(0%)'; 
    });

    profileImage.addEventListener('mouseout', () => {
        profileImage.style.filter = 'grayscale(100%)'; 
    });
} else {
    console.error("Profile image not found!");
}


const navbar = document.getElementById("navbar");
if (navbar) {
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) { 
            navbar.style.backgroundColor = "black"; 
            navbar.style.boxShadow = "0 2px 5px rgba(0, 0, 0, 0.5)"; 
        } else {
            navbar.style.backgroundColor = "#333"; 
            navbar.style.boxShadow = "none"; 
        }
    });
} else {
    console.error("Navbar not found!");
}


const slides = document.querySelectorAll('.slide');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
let currentIndex = 0;

if (slides.length && prevButton && nextButton) {
    
    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.toggle('active', i === index); 
        });
    }

    prevButton.addEventListener('click', () => {
        currentIndex = (currentIndex === 0) ? slides.length - 1 : currentIndex - 1;
        showSlide(currentIndex);
    });

    nextButton.addEventListener('click', () => {
        currentIndex = (currentIndex === slides.length - 1) ? 0 : currentIndex + 1;
        showSlide(currentIndex);
    });

    setInterval(() => {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
    }, 5000);

    showSlide(currentIndex);

    console.log("Slideshow initialized successfully!");
} else {
    console.error("Slideshow elements not properly configured!");
}
