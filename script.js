/**
 * Andhra Pradesh Tourism Website JavaScript
 * Features:
 * - Responsive Navigation
 * - Image Slider
 * - Testimonial Slider
 * - Search Functionality
 * - Login/Signup Modal
 * - Form Validation
 * - PDF Ticket Generator
 * - Lightbox Gallery
 * - Scroll to Top Button
 * - FAQ Accordion
 */

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
  // Initialize all components
  initNavigation();
  initImageSlider();
  initTestimonials();
  initSearchFunctionality();
  initAuthModal();
  initBookingSystem();
  initLightbox();
  initScrollToTop();
  initFaqAccordion();
  initContactForm();
  initGallery();
});

/**
 * Navigation functionality
 * - Toggle mobile menu
 * - Handle active state on scroll
 */
function initNavigation() {
  const toggleMenu = document.querySelector('.toggle-menu');
  const navbar = document.querySelector('.navbar');
  const navLinks = document.querySelectorAll('.navbar a');
  const header = document.querySelector('.header');

  // Toggle mobile menu
  if (toggleMenu) {
    toggleMenu.addEventListener('click', function() {
      navbar.classList.toggle('active');
      toggleMenu.innerHTML = navbar.classList.contains('active') 
        ? '<i class="fas fa-times"></i>' 
        : '<i class="fas fa-bars"></i>';
    });
  }

  // Close menu when clicking a link (mobile)
  navLinks.forEach(link => {
    link.addEventListener('click', function() {
      navbar.classList.remove('active');
      if (toggleMenu) {
        toggleMenu.innerHTML = '<i class="fas fa-bars"></i>';
      }
    });
  });

  // Handle scroll events for navbar
  window.addEventListener('scroll', function() {
    // Add/remove shadow based on scroll position
    if (window.scrollY > 50) {
      header.style.boxShadow = '0 0.5rem 1rem rgba(0, 0, 0, 0.1)';
    } else {
      header.style.boxShadow = 'none';
    }
  });
}

/**
 * Image Slider functionality
 * - Auto and manual slider controls
 * - Dot navigation
 */
function initImageSlider() {
  const sliderContainer = document.querySelector('.slider-container');
  
  if (!sliderContainer) return;

  const slides = document.querySelector('.slides');
  const prevBtn = document.querySelector('.prev');
  const nextBtn = document.querySelector('.next');
  const dots = document.querySelectorAll('.dot');
  
  let currentSlide = 0;
  const totalSlides = document.querySelectorAll('.slides img').length;
  let slideInterval;

  // Function to update the slider position
  function updateSlider() {
    slides.style.transform = `translateX(-${currentSlide * 100}%)`;
    
    // Update active dot
    dots.forEach((dot, index) => {
      dot.classList.toggle('active', index === currentSlide);
    });
  }

  // Function to move to the next slide
  function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    updateSlider();
  }

  // Function to move to the previous slide
  function prevSlide() {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    updateSlider();
  }

  // Function to start automatic slider
  function startSlideInterval() {
    slideInterval = setInterval(nextSlide, 5000);
  }

  // Event listeners for manual slider controls
  if (prevBtn) prevBtn.addEventListener('click', function() {
    clearInterval(slideInterval);
    prevSlide();
    startSlideInterval();
  });

  if (nextBtn) nextBtn.addEventListener('click', function() {
    clearInterval(slideInterval);
    nextSlide();
    startSlideInterval();
  });

  // Event listeners for dot navigation
  dots.forEach((dot, index) => {
    dot.addEventListener('click', function() {
      clearInterval(slideInterval);
      currentSlide = index;
      updateSlider();
      startSlideInterval();
    });
  });

  // Start automatic slider
  startSlideInterval();
}

/**
 * Testimonial Slider functionality
 */
function initTestimonials() {
  const testimonialSlides = document.querySelectorAll('.testimonial-slide');
  const dots = document.querySelectorAll('.testimonial-dots .dot');
  
  if (testimonialSlides.length === 0) return;

  let currentSlide = 0;
  let slideInterval;

  // Function to show a specific testimonial
  function showTestimonial(index) {
    testimonialSlides.forEach(slide => {
      slide.classList.remove('active');
    });
    dots.forEach(dot => {
      dot.classList.remove('active');
    });

    testimonialSlides[index].classList.add('active');
    dots[index].classList.add('active');
    currentSlide = index;
  }

  // Event listeners for dot navigation
  dots.forEach((dot, index) => {
    dot.addEventListener('click', function() {
      clearInterval(slideInterval);
      showTestimonial(index);
      startSlideInterval();
    });
  });

  // Function to show next testimonial
  function nextTestimonial() {
    currentSlide = (currentSlide + 1) % testimonialSlides.length;
    showTestimonial(currentSlide);
  }

  // Function to start automatic testimonial slider
  function startSlideInterval() {
    slideInterval = setInterval(nextTestimonial, 5000);
  }

  // Initialize testimonial slider
  showTestimonial(0);
  startSlideInterval();
}

/**
 * Search Functionality
 * - Filter destinations or services based on search input
 */
function initSearchFunctionality() {
  const searchInput = document.getElementById('search-input');
  const searchBtn = document.getElementById('search-btn');
  const searchItems = document.querySelectorAll('.search-items .destination-card, .search-items .service-card, .search-items .box');
  
  if (!searchInput || searchItems.length === 0) return;

  function performSearch() {
    const searchTerm = searchInput.value.toLowerCase().trim();
    
    if (searchTerm === '') {
      // If search term is empty, show all items
      searchItems.forEach(item => {
        item.style.display = 'block';
      });
      return;
    }
    
    let foundItems = 0;
    
    searchItems.forEach(item => {
      const tags = item.dataset.tags ? item.dataset.tags.toLowerCase() : '';
      const title = item.querySelector('h3') ? item.querySelector('h3').textContent.toLowerCase() : '';
      const description = item.querySelector('p') ? item.querySelector('p').textContent.toLowerCase() : '';
      
      // Check if the search term matches tags, title, or description
      if (tags.includes(searchTerm) || title.includes(searchTerm) || description.includes(searchTerm)) {
        item.style.display = 'block';
        foundItems++;
      } else {
        item.style.display = 'none';
      }
    });
    
    // If no items found, show a message (you might want to add a no-results element to your HTML)
    const noResultsElement = document.getElementById('no-search-results');
    if (noResultsElement) {
      if (foundItems === 0) {
        noResultsElement.style.display = 'block';
      } else {
        noResultsElement.style.display = 'none';
      }
    }
  }

  // Event listeners for search input
  searchInput.addEventListener('keyup', performSearch);
  
  if (searchBtn) {
    searchBtn.addEventListener('click', function(e) {
      e.preventDefault();
      performSearch();
    });
  }
}

/**
 * Authentication Modal (Login/Signup)
 */
function initAuthModal() {
  const loginBtn = document.getElementById('login-btn');
  const authModal = document.getElementById('auth-modal');
  const closeModal = document.querySelector('.close-modal');
  const tabBtns = document.querySelectorAll('.tab-btn');
  const loginForm = document.getElementById('login-form');
  const signupForm = document.getElementById('signup-form');
  
  if (!loginBtn || !authModal) return;

  // Open auth modal
  loginBtn.addEventListener('click', function(e) {
    e.preventDefault();
    authModal.classList.add('active');
  });

  // Close auth modal
  if (closeModal) {
    closeModal.addEventListener('click', function() {
      authModal.classList.remove('active');
    });
  }

  // Close modal when clicking outside
  window.addEventListener('click', function(e) {
    if (e.target === authModal) {
      authModal.classList.remove('active');
    }
  });

  // Tab functionality
  tabBtns.forEach(btn => {
    btn.addEventListener('click', function() {
      const tabTarget = this.dataset.tab;
      
      // Update active tab button
      tabBtns.forEach(btn => btn.classList.remove('active'));
      this.classList.add('active');
      
      // Update active tab content
      document.querySelectorAll('.tab-pane').forEach(pane => {
        pane.classList.remove('active');
      });
      document.getElementById(`${tabTarget}-pane`).classList.add('active');
    });
  });

  // Form validation and submission
  if (loginForm) {
    loginForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const email = document.getElementById('login-email').value;
      const password = document.getElementById('login-password').value;
      
      // Simple validation
      if (email && password) {
        // Simulated login success (no actual backend)
        alert('Login successful!');
        authModal.classList.remove('active');
        loginForm.reset();
      } else {
        alert('Please fill in all fields.');
      }
    });
  }

  if (signupForm) {
    signupForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const name = document.getElementById('signup-name').value;
      const email = document.getElementById('signup-email').value;
      const password = document.getElementById('signup-password').value;
      const confirmPassword = document.getElementById('signup-confirm-password').value;
      
      // Simple validation
      if (!name || !email || !password || !confirmPassword) {
        alert('Please fill in all fields.');
        return;
      }
      
      if (password !== confirmPassword) {
        alert('Passwords do not match.');
        return;
      }
      
      // Simulated signup success (no actual backend)
      alert('Account created successfully!');
      authModal.classList.remove('active');
      signupForm.reset();
    });
  }
}

/**
 * Booking System with PDF Generation
 */
function initBookingSystem() {
  const bookingForm = document.getElementById('booking-form');
  const bookingModal = document.getElementById('booking-modal');
  const closeModal = bookingModal ? bookingModal.querySelector('.close-modal') : null;
  const downloadBtn = document.getElementById('download-pdf');
  const clearFormBtn = document.getElementById('clear-form');
  
  if (!bookingForm) return;

  // Handle booking form submission
  bookingForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Collect form data
    const formData = {
      fullName: document.getElementById('full-name').value,
      email: document.getElementById('email').value,
      phone: document.getElementById('phone').value,
      destination: document.getElementById('destination').value,
      tripType: document.getElementById('trip-type').value,
      departureDate: document.getElementById('departure-date').value,
      returnDate: document.getElementById('return-date').value,
      adults: document.getElementById('adults').value,
      children: document.getElementById('children').value,
      accommodation: document.getElementById('accommodation').value,
      roomType: document.getElementById('room-type').value,
      bookingId: generateBookingId()
    };
    
    // Display booking details in confirmation modal
    displayBookingDetails(formData);
    
    // Show booking confirmation modal
    bookingModal.classList.add('active');
  });

  // Close booking confirmation modal
  if (closeModal) {
    closeModal.addEventListener('click', function() {
      bookingModal.classList.remove('active');
    });
  }

  // Generate PDF Ticket
  if (downloadBtn) {
    downloadBtn.addEventListener('click', function() {
      generatePDF();
    });
  }

  // Clear booking form
  if (clearFormBtn) {
    clearFormBtn.addEventListener('click', function() {
      bookingForm.reset();
    });
  }

  // Generate random booking ID with AP prefix (Andhra Pradesh)
  function generateBookingId() {
    return 'AP' + Math.floor(Math.random() * 1000000).toString().padStart(6, '0');
  }

  // Display booking details in confirmation modal
  function displayBookingDetails(data) {
    const detailsContainer = document.getElementById('booking-details');
    if (!detailsContainer) return;
    
    const departureDate = new Date(data.departureDate);
    const returnDate = new Date(data.returnDate);
    const numDays = Math.ceil((returnDate - departureDate) / (1000 * 60 * 60 * 24));
    
    detailsContainer.innerHTML = `
      <h3>Booking Details</h3>
      <p><strong>Booking ID:</strong> ${data.bookingId}</p>
      <p><strong>Traveler:</strong> ${data.fullName}</p>
      <p><strong>Destination:</strong> ${data.destination}</p>
      <p><strong>Trip Type:</strong> ${data.tripType}</p>
      <p><strong>Dates:</strong> ${formatDate(data.departureDate)} to ${formatDate(data.returnDate)} (${numDays} days)</p>
      <p><strong>Travelers:</strong> ${data.adults} Adults, ${data.children} Children</p>
      <p><strong>Accommodation:</strong> ${data.accommodation} (${data.roomType})</p>
      <p><strong>Contact:</strong> ${data.email} | ${data.phone}</p>
      <p><strong>Total Amount:</strong> ₹${calculateTotalAmount(data)}</p>
    `;
  }

  // Helper function to format date
  function formatDate(dateString) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  }

  // Calculate total amount based on booking details
  function calculateTotalAmount(data) {
    const basePrice = {
      'Spiritual': 12999,
      'Adventure': 15999,
      'Beach': 10999,
      'City': 8999,
      'Culture': 9999,
      'Family': 13999,
      'Photography': 11999
    };
    
    const destinationMultiplier = {
      'Tirumala': 1.2,
      'Srisailam': 1.1,
      'KanakaDurga': 1.0,
      'Gunadala': 0.9,
      'HolyTrinity': 0.9,
      'AmeenPeer': 0.9,
      'BarahShaheed': 0.9,
      'Araku': 1.3,
      'Lambasingi': 1.2,
      'Gandikota': 1.2,
      'BelumCaves': 1.1,
      'Kakinada': 1.0,
      'Vijayawada': 1.0,
      'Visakhapatnam': 1.2,
      'Other': 1.0
    };
    
    const accommodationMultiplier = {
      'Hotel': 1,
      'Resort': 1.3,
      'Apartment': 1.1,
      'Hostel': 0.7,
      'Boutique': 1.5,
      'Other': 1
    };
    
    const departureDate = new Date(data.departureDate);
    const returnDate = new Date(data.returnDate);
    const numDays = Math.ceil((returnDate - departureDate) / (1000 * 60 * 60 * 24));
    
    const tripBaseCost = basePrice[data.tripType] || 9999;
    const destFactor = destinationMultiplier[data.destination] || 1;
    const accommFactor = accommodationMultiplier[data.accommodation] || 1;
    
    const adultCost = parseInt(data.adults) * tripBaseCost * destFactor * accommFactor;
    const childrenCost = parseInt(data.children) * tripBaseCost * destFactor * accommFactor * 0.7; // 30% discount for children
    
    // Calculate total based on number of days (with min 1 day)
    const totalAmount = (adultCost + childrenCost) * Math.max(1, numDays / 7);
    
    return Math.round(totalAmount).toLocaleString();
  }

  // Generate PDF ticket using JavaScript
  function generatePDF() {
    // Check if jsPDF is available
    if (typeof window.jspdf === 'undefined') {
      console.log('jsPDF is not available. Using alert instead.');
      alert('Your booking ticket would be downloaded as a PDF file here.');
      return;
    }
    
    try {
      const { jsPDF } = window.jspdf;
      const doc = new jsPDF();
      
      // Add title
      doc.setFontSize(22);
      doc.setTextColor(0, 123, 255); // Blue color
      doc.text('Andhra Pradesh Tourism', 105, 20, { align: 'center' });
      doc.text('Booking Confirmation', 105, 30, { align: 'center' });
      
      // Add logo placeholder
      doc.setFillColor(220, 220, 220); // Light gray
      doc.rect(20, 40, 40, 20, 'F');
      doc.setTextColor(100, 100, 100);
      doc.setFontSize(10);
      doc.text('LOGO', 40, 50, { align: 'center' });
      
      // Add line separator
      doc.setDrawColor(0, 123, 255);
      doc.setLineWidth(0.5);
      doc.line(20, 65, 190, 65);
      
      // Add booking details
      const detailsContainer = document.getElementById('booking-details');
      if (detailsContainer) {
        const details = detailsContainer.innerText;
        
        doc.setTextColor(0, 0, 0);
        doc.setFontSize(12);
        
        // Split text into lines
        const lines = details.split('\n');
        let y = 75;
        
        lines.forEach(line => {
          if (line.trim() !== '') {
            // Check if line is a header
            if (line.includes('Booking Details')) {
              doc.setFontSize(16);
              doc.setFont(undefined, 'bold');
              doc.text(line, 20, y);
              doc.setFontSize(12);
              doc.setFont(undefined, 'normal');
              y += 8;
            } else {
              doc.text(line, 20, y);
              y += 7;
            }
          }
        });
        
        // Add footer
        doc.setDrawColor(0, 123, 255);
        doc.setLineWidth(0.5);
        doc.line(20, 250, 190, 250);
        
        doc.setFontSize(10);
        doc.setTextColor(100, 100, 100);
        doc.text('Thank you for choosing Andhra Pradesh Tourism', 105, 260, { align: 'center' });
        doc.text('For any inquiries, please contact us at +91 98765 43210', 105, 265, { align: 'center' });
        doc.text('www.andhratourism.com', 105, 270, { align: 'center' });
        
        // Save the PDF
        doc.save('AP-Tourism-Ticket.pdf');
      }
    } catch (error) {
      console.error('Error generating PDF:', error);
      alert('There was an error generating your PDF ticket. Please try again later.');
    }
  }
}

/**
 * Image Lightbox functionality
 */
function initLightbox() {
  const galleryImages = document.querySelectorAll('.gallery .box img');
  const lightbox = document.getElementById('image-lightbox');
  const lightboxImg = document.querySelector('.lightbox-image');
  const closeLightbox = document.querySelector('.close-lightbox');
  
  if (galleryImages.length === 0 || !lightbox) return;

  // Open lightbox when clicking on an image
  galleryImages.forEach(img => {
    img.addEventListener('click', function() {
      lightboxImg.src = this.src;
      lightboxImg.alt = this.alt;
      lightbox.classList.add('active');
    });
  });

  // Close lightbox
  if (closeLightbox) {
    closeLightbox.addEventListener('click', function() {
      lightbox.classList.remove('active');
    });
  }

  // Close lightbox when clicking outside the image
  lightbox.addEventListener('click', function(e) {
    if (e.target === lightbox) {
      lightbox.classList.remove('active');
    }
  });

  // Close lightbox with escape key
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && lightbox.classList.contains('active')) {
      lightbox.classList.remove('active');
    }
  });
}

/**
 * Gallery Functionality
 */
function initGallery() {
  const gallery = document.querySelector('.gallery');
  const filterButtons = document.querySelectorAll('.filter-btn');
  const lightbox = document.getElementById('gallery-lightbox');
  const lightboxImage = lightbox.querySelector('.lightbox-image');
  const lightboxCaption = lightbox.querySelector('.lightbox-caption');
  const closeLightbox = lightbox.querySelector('.close-lightbox');

  // Filter functionality
  filterButtons.forEach(button => {
      button.addEventListener('click', () => {
          const filter = button.dataset.filter;
          
          // Update active button
          filterButtons.forEach(btn => btn.classList.remove('active'));
          button.classList.add('active');
          
          // Filter gallery items
          document.querySelectorAll('.gallery-item').forEach(item => {
              if (filter === 'all' || item.dataset.category === filter) {
                  item.style.display = 'block';
              } else {
                  item.style.display = 'none';
              }
          });
      });
  });

  // Lightbox functionality
  gallery.addEventListener('click', (e) => {
      const item = e.target.closest('.gallery-item');
      if (item) {
          const img = item.querySelector('img');
          const title = item.querySelector('h3').textContent;
          const desc = item.querySelector('p').textContent;
          
          lightboxImage.src = img.src;
          lightboxImage.alt = img.alt;
          lightboxCaption.querySelector('h3').textContent = title;
          lightboxCaption.querySelector('p').textContent = desc;
          
          lightbox.classList.add('active');
      }
  });

  // Close lightbox
  closeLightbox.addEventListener('click', () => {
      lightbox.classList.remove('active');
  });

  // Close lightbox on outside click
  lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) {
          lightbox.classList.remove('active');
      }
  });
}

/**
 * Scroll to Top Button functionality
 */
function initScrollToTop() {
  const scrollTopBtn = document.getElementById('scroll-top-btn');
  
  if (!scrollTopBtn) return;

  // Show/hide scroll to top button based on scroll position
  window.addEventListener('scroll', function() {
    if (window.scrollY > 500) {
      scrollTopBtn.classList.add('active');
    } else {
      scrollTopBtn.classList.remove('active');
    }
  });

  // Scroll to top when button is clicked
  scrollTopBtn.addEventListener('click', function() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

/**
 * FAQ Accordion functionality
 */
function initFaqAccordion() {
  const faqItems = document.querySelectorAll('.faq-item');
  
  if (faqItems.length === 0) return;

  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    
    if (question) {
      question.addEventListener('click', function() {
        // Close all other items
        faqItems.forEach(otherItem => {
          if (otherItem !== item) {
            otherItem.classList.remove('active');
            const icon = otherItem.querySelector('.faq-toggle i');
            if (icon) {
              icon.className = 'fas fa-plus';
            }
          }
        });
        
        // Toggle current item
        item.classList.toggle('active');
        const icon = item.querySelector('.faq-toggle i');
        
        if (icon) {
          if (item.classList.contains('active')) {
            icon.className = 'fas fa-minus';
          } else {
            icon.className = 'fas fa-plus';
          }
        }
      });
    }
  });
}

/**
 * Contact Form functionality
 */
function initContactForm() {
  const contactForm = document.getElementById('contact-form');
  const contactModal = document.getElementById('contact-modal');
  
  if (!contactForm) return;

  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Simple validation
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;
    
    if (!name || !email || !subject || !message) {
      alert('Please fill in all required fields.');
      return;
    }
    
    // Show success modal (in a real app, you'd send the data to a server)
    if (contactModal) {
      contactModal.classList.add('active');
      
      // Reset form
      contactForm.reset();
      
      // Close modal when clicking on close button
      const closeBtn = contactModal.querySelector('.close-button');
      if (closeBtn) {
        closeBtn.addEventListener('click', function() {
          contactModal.classList.remove('active');
        });
      }
      
      // Close modal when clicking on X
      const closeModal = contactModal.querySelector('.close-modal');
      if (closeModal) {
        closeModal.addEventListener('click', function() {
          contactModal.classList.remove('active');
        });
      }
    }
  });
}
