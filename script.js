// DOM Elements
const connectBtn = document.getElementById('connectBtn');
const downloadBtn = document.getElementById('downloadBtn');
const modalOverlay = document.getElementById('modalOverlay');
const closeBtn = document.getElementById('closeBtn');
const profileImg = document.getElementById('profile-img');

// Modal functionality
connectBtn.addEventListener('click', () => {
    modalOverlay.classList.add('active');
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
});

closeBtn.addEventListener('click', closeModal);
modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) {
        closeModal();
    }
});

function closeModal() {
    modalOverlay.classList.remove('active');
    document.body.style.overflow = 'auto'; // Restore scrolling
}

// Close modal with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalOverlay.classList.contains('active')) {
        closeModal();
    }
});

// Download resume functionality
downloadBtn.addEventListener('click', () => {
    try {
        // Create a temporary download link
        const link = document.createElement('a');
        link.href = './asad latest.pdf'; // Use relative path to the resume file
        link.download = 'Asad_Resume.pdf';
        link.target = '_blank'; // Open in new tab as backup
        
        // Add link to document and click it
        document.body.appendChild(link);
        link.click();
        
        // Remove the link after download starts
        setTimeout(() => {
            if (document.body.contains(link)) {
                document.body.removeChild(link);
            }
        }, 100);
        
        // Show success notification
        showNotification('📄 Resume download started!');
        
        console.log('Resume download attempted: ./asad latest.pdf.pdf');
        
    } catch (error) {
        console.error('Download error:', error);
        showNotification('❌ Download failed. Please try again or contact me directly.');
    }
});

// Notification system
function showNotification(message) {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas fa-info-circle"></i>
            <span>${message}</span>
        </div>
    `;
    
    // Add notification styles
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: rgba(255, 255, 255, 0.15);
        backdrop-filter: blur(20px);
        border: 1px solid rgba(255, 255, 255, 0.2);
        border-radius: 12px;
        padding: 1rem 1.5rem;
        color: white;
        font-weight: 500;
        z-index: 10000;
        transform: translateX(100%);
        transition: transform 0.3s ease;
        max-width: 350px;
        box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
    `;
    
    notification.querySelector('.notification-content').style.cssText = `
        display: flex;
        align-items: center;
        gap: 0.8rem;
    `;
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Auto remove after 4 seconds
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, 4000);
}

// Add click handlers to social buttons for analytics/tracking
document.querySelectorAll('.social-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        const platform = btn.classList[1]; // Gets the platform class (linkedin, github, etc.)
        
        // Add a subtle click effect
        btn.style.transform = 'scale(0.95)';
        setTimeout(() => {
            btn.style.transform = '';
        }, 150);
        
        // You can add analytics tracking here
        console.log(`Social link clicked: ${platform}`);
    });
});

// Profile picture interaction
profileImg.addEventListener('click', () => {
    // Add a fun easter egg - change profile picture temporarily
    const originalSrc = profileImg.src;
    profileImg.style.transform = 'rotate(360deg)';
    
    setTimeout(() => {
        profileImg.style.transform = '';
    }, 600);
});

// Add smooth scrolling effect for better UX (if page grows)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Add loading animation for page load
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

// Add subtle parallax effect to particles
let mouseX = 0;
let mouseY = 0;

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    
    // Update particles position based on mouse movement
    const particles = document.querySelectorAll('.particle');
    particles.forEach((particle, index) => {
        const speed = (index + 1) * 0.02;
        const x = (mouseX * speed);
        const y = (mouseY * speed);
        
        particle.style.transform = `translate(${x}px, ${y}px)`;
    });
});

// Add intersection observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animationPlayState = 'running';
        }
    });
}, observerOptions);

// Observe elements for animation
document.querySelectorAll('.profile-section, .greeting, .buttons-section').forEach(el => {
    observer.observe(el);
});

// Add custom context menu for profile (optional enhancement)
profileImg.addEventListener('contextmenu', (e) => {
    e.preventDefault();
    showNotification('👋 Thanks for checking out my profile!');
});

// Add keyboard navigation for modal
document.addEventListener('keydown', (e) => {
    if (!modalOverlay.classList.contains('active')) return;
    
    const socialBtns = document.querySelectorAll('.social-btn');
    const focusedElement = document.activeElement;
    const currentIndex = Array.from(socialBtns).indexOf(focusedElement);
    
    switch(e.key) {
        case 'ArrowDown':
        case 'ArrowRight':
            e.preventDefault();
            const nextIndex = (currentIndex + 1) % socialBtns.length;
            socialBtns[nextIndex].focus();
            break;
        case 'ArrowUp':
        case 'ArrowLeft':
            e.preventDefault();
            const prevIndex = (currentIndex - 1 + socialBtns.length) % socialBtns.length;
            socialBtns[prevIndex].focus();
            break;
        case 'Enter':
            if (focusedElement.classList.contains('social-btn')) {
                focusedElement.click();
            }
            break;
    }
});

// Initialize focus on first social button when modal opens
connectBtn.addEventListener('click', () => {
    setTimeout(() => {
        const firstSocialBtn = document.querySelector('.social-btn');
        if (firstSocialBtn) {
            firstSocialBtn.focus();
        }
    }, 100);
});

console.log('🚀 Connect With Me page loaded successfully!');
console.log('💡 Tip: Right-click the profile picture for a surprise!');
