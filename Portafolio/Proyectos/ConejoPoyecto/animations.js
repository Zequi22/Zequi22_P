document.addEventListener('DOMContentLoaded', () => {
    // Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);

    const bunny = document.getElementById('bunny');
    const bunnyPath = document.getElementById('bunnyPath');

    // Bunny animation
    gsap.to(bunny, {
        motionPath: {
            path: bunnyPath,
            align: bunnyPath,
            autoRotate: true
        },
        duration: 3,
        repeat: -1,
        ease: "power1.inOut"
    });

    // Scroll animations for sections
    gsap.utils.toArray('section').forEach(section => {
        gsap.from(section, {
            opacity: 0,
            y: 50,
            duration: 1,
            scrollTrigger: {
                trigger: section,
                start: "top 80%"
            }
        });
    });

    // Hover and interaction effects
    const interactiveElements = document.querySelectorAll(
        '.tipo-card, .cuidado-item, .salud-item, .cultura-item'
    );
    
    interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            gsap.to(el, { 
                scale: 1.05, 
                boxShadow: "0 10px 20px rgba(0,0,0,0.2)", 
                duration: 0.3 
            });
        });
        
        el.addEventListener('mouseleave', () => {
            gsap.to(el, { 
                scale: 1, 
                boxShadow: "0 4px 6px rgba(0,0,0,0.1)", 
                duration: 0.3 
            });
        });
    });

    // Enhanced food section interactions
    const foodItems = document.querySelectorAll('.alimentos-permitidos li, .alimentos-prohibidos li');
    
    foodItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            gsap.to(item, { 
                scale: 1.05, 
                boxShadow: "0 4px 8px rgba(0,0,0,0.2)", 
                duration: 0.3 
            });
        });
        
        item.addEventListener('mouseleave', () => {
            gsap.to(item, { 
                scale: 1, 
                boxShadow: "none", 
                duration: 0.3 
            });
        });
    });

    // Rabbit Carousel
    const carouselImages = document.querySelectorAll('.carousel-image');
    let currentImageIndex = 0;

    function changeCarouselImage() {
        // Remove active class from current image
        carouselImages[currentImageIndex].classList.remove('active');

        // Increment index, wrap around if needed
        currentImageIndex = (currentImageIndex + 1) % carouselImages.length;

        // Add active class to next image
        carouselImages[currentImageIndex].classList.add('active');
    }

    // Change image every 3 seconds
    if (carouselImages.length > 0) {
        setInterval(changeCarouselImage, 3000);
    }
});