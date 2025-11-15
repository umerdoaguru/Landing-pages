// initialization

const RESPONSIVE_WIDTH = 1024

let headerWhiteBg = false
let isHeaderCollapsed = window.innerWidth < RESPONSIVE_WIDTH
const collapseBtn = document.getElementById("collapse-btn")
const collapseHeaderItems = document.getElementById("collapsed-header-items")
const copyrightText = document.getElementById("copyright-text")
const headerLinks = document.querySelectorAll(".header-links");


copyrightText.textContent = "Copyright © " + new Date().getFullYear() + " DOAGuru InfoSystems";


headerLinks.forEach(link => {
    link.addEventListener("click", () => {
        toggleHeader()
    })
})

function onHeaderClickOutside(e) {

    if (!collapseHeaderItems.contains(e.target)) {
        toggleHeader()
    }

}


function toggleHeader() {
    if (isHeaderCollapsed) {
        // collapseHeaderItems.classList.remove("max-md:tw-opacity-0")
        collapseHeaderItems.classList.add("opacity-100",)
        collapseHeaderItems.style.width = "60vw"
        collapseBtn.classList.remove("bi-list")
        collapseBtn.classList.add("bi-x", "max-lg:tw-fixed")
        isHeaderCollapsed = false

        setTimeout(() => window.addEventListener("click", onHeaderClickOutside), 1)

    } else {
        collapseHeaderItems.classList.remove("opacity-100")
        collapseHeaderItems.style.width = "0vw"
        collapseBtn.classList.remove("bi-x", "max-lg:tw-fixed")
        collapseBtn.classList.add("bi-list")
        isHeaderCollapsed = true
        window.removeEventListener("click", onHeaderClickOutside)

    }
}

function responsive() {
    if (window.innerWidth > RESPONSIVE_WIDTH) {
        collapseHeaderItems.style.width = ""

    } else {
        isHeaderCollapsed = true
    }
}

window.addEventListener("resize", responsive)


/**
 * Animations
 */

gsap.registerPlugin(ScrollTrigger)


gsap.to(".reveal-up", {
    opacity: 0,
    y: "100%",
})

gsap.to("#dashboard", {
    // boxShadow: "0px 15px 25px -5px #7e22ceaa",
    boxShadow: "0px 15px 25px -5px #43b2fb",
    duration: 0.3,
    scrollTrigger: {
        trigger: "#hero-section",
        start: "60% 60%",
        end: "80% 80%",
        // markers: true
    }

})

// straightens the slanting image
gsap.to("#dashboard", {

    scale: 1,
    translateY: 0,
    // translateY: "0%",
    rotateX: "0deg",
    scrollTrigger: {
        trigger: "#hero-section",
        start: window.innerWidth > RESPONSIVE_WIDTH ? "top 95%" : "top 70%",
        end: "bottom bottom",
        scrub: 1,
        // markers: true,
    }

})

const faqAccordion = document.querySelectorAll('.faq-accordion')

faqAccordion.forEach(function (btn) {
    btn.addEventListener('click', function () {
        this.classList.toggle('active')

        // Toggle 'rotate' class to rotate the arrow
        let content = this.nextElementSibling
        
        // content.classList.toggle('!tw-hidden')
        if (content.style.maxHeight === '200px') {
            content.style.maxHeight = '0px'
            content.style.padding = '0px 18px'

        } else {
            content.style.maxHeight = '200px'
            content.style.padding = '20px 18px'
        }
    })
})



// ------------- reveal section animations ---------------

const sections = gsap.utils.toArray("section")

sections.forEach((sec) => {

    const revealUptimeline = gsap.timeline({paused: true, 
                                            scrollTrigger: {
                                                            trigger: sec,
                                                            start: "10% 80%", // top of trigger hits the top of viewport
                                                            end: "20% 90%",
                                                            // markers: true,
                                                            // scrub: 1,
                                                        }})

    revealUptimeline.to(sec.querySelectorAll(".reveal-up"), {
        opacity: 1,
        duration: 0.8,
        y: "0%",
        stagger: 0.2,
    })


})

class TrialPopup {
    constructor() {
        this.popupId = 'trialPopup';
        this.popupShown = false; // Store in memory instead of localStorage
        this.delay = 5000; // 5 seconds
        this.init();
    }

    init() {
        // Wait for DOM to be ready
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => this.checkAndShow());
        } else {
            this.checkAndShow();
        }
        
        this.setupEventListeners();
    }

    checkAndShow() {
        // Check if popup has been shown before (in current session)
        if (!this.popupShown) {
            setTimeout(() => {
                this.show();
            }, this.delay);
        }
    }

    show() {
        // Don't show if already visible or already shown
        if (document.getElementById(this.popupId) || this.popupShown) {
            return;
        }
        
        // Create popup HTML
        const popupHTML = this.createPopupHTML();
        
        // Add popup to body
        document.body.insertAdjacentHTML('beforeend', popupHTML);
        
        // Add CSS styles
        this.addStyles();
        
        // Animate popup in
        setTimeout(() => {
            const popup = document.getElementById(this.popupId);
            if (popup) {
                popup.classList.add('show');
            }
        }, 100);
    }

    createPopupHTML() {
        return `
            <div id="${this.popupId}" class="popup-overlay">
                <div class="popup-container">
                    <button class="popup-close" onclick="trialPopup.close()" aria-label="Close popup">&times;</button>
                    <div class="popup-content">
                        <h2>🚀 Start Your 14-Day Free Trial</h2>
                        <p>Experience the power of our CRM solution with full access to all features.</p>
                        <ul>
                            <li>✓ Super Admin, Admin and Employee Management</li>
                            <li>✓ Lead Management</li>
                            <li>✓ Reporting and Analytics</li>
                            <li>✓ Mobile Friendly</li>
                            <li>✓ Data Export</li>
                            <li>✓ Reporting and Analytics</li>
                        </ul>
                        <div class="popup-buttons">
                            <button class="btn-trial" onclick="trialPopup.startTrial()">
                                Start Free Trial
                            </button>
                            <button class="btn-contact" onclick="trialPopup.navigateToContact()">
                                Contact Us
                            </button>
                        </div>
                    
                    </div>
                </div>
            </div>
        `;
    }

    addStyles() {
        // Check if styles already added
        if (document.getElementById('popup-styles')) return;
        
        const styles = `
            <style id="popup-styles">
            .popup-overlay {
                position: fixed;
                top: 0;
                left: 0;
                width: 100vw;
                height: 100vh;
                background: rgba(0, 0, 0, 0.85);
                display: flex;
                justify-content: center;
                align-items: center;
                z-index: 9999;
                opacity: 0;
                transition: opacity 0.3s ease;
                backdrop-filter: blur(4px);
            }
            
            .popup-overlay.show {
                opacity: 1;
            }
            
            .popup-container {
                background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%);
                border: 1px solid #4CACFC;
                border-radius: 16px;
                padding: 35px;
                max-width: 480px;
                width: 90%;
                position: relative;
                transform: scale(0.7) translateY(50px);
                transition: all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
                box-shadow: 0 20px 40px rgba(76, 172, 252, 0.1);
            }
            
            .popup-overlay.show .popup-container {
                transform: scale(1) translateY(0);
            }
            
            .popup-close {
                position: absolute;
                top: 15px;
                right: 20px;
                background: none;
                border: none;
                color: #999;
                font-size: 28px;
                cursor: pointer;
                transition: color 0.2s ease;
                width: 30px;
                height: 30px;
                display: flex;
                align-items: center;
                justify-content: center;
            }
            
            .popup-close:hover {
                color: #4CACFC;
            }
            
            .popup-content h2 {
                color: #4CACFC;
                margin-bottom: 15px;
                text-align: center;
                font-size: 24px;
                font-weight: 600;
            }
            
            .popup-content p {
                color: #ccc;
                text-align: center;
                margin-bottom: 20px;
                line-height: 1.5;
            }
            
            .popup-content ul {
                color: #e0e0e0;
                margin-bottom: 25px;
                padding-left: 0;
                list-style: none;
            }
            
            .popup-content li {
                margin-bottom: 10px;
                padding-left: 0;
                display: flex;
                align-items: center;
                font-size: 14px;
            }
            
            .popup-buttons {
                display: flex;
                gap: 15px;
                justify-content: center;
                flex-wrap: wrap;
                margin-bottom: 15px;
            }
            
            .btn-trial, .btn-contact {
                padding: 14px 28px;
                border: none;
                border-radius: 8px;
                cursor: pointer;
                font-weight: 600;
                font-size: 14px;
                transition: all 0.3s ease;
                text-decoration: none;
                display: inline-block;
            }
            
            .btn-trial {
                background: linear-gradient(135deg, #4CACFC 0%, #3b9ae1 100%);
                color: #000;
                box-shadow: 0 4px 15px rgba(76, 172, 252, 0.3);
            }
            
            .btn-contact {
                background: transparent;
                color: #4CACFC;
                border: 2px solid #4CACFC;
            }
            
            .btn-trial:hover {
                transform: translateY(-2px);
                box-shadow: 0 6px 20px rgba(76, 172, 252, 0.4);
            }
            
            .btn-contact:hover {
                background: #4CACFC;
                color: #000;
                transform: translateY(-2px);
            }
            
            .popup-note {
                font-size: 12px;
                color: #888;
                text-align: center;
                margin-bottom: 0;
            }
            
            @media (max-width: 520px) {
                .popup-container {
                    padding: 25px 20px;
                    margin: 20px;
                }
                
                .popup-content h2 {
                    font-size: 20px;
                }
                
                .popup-buttons {
                    flex-direction: column;
                }
                
                .btn-trial, .btn-contact {
                    width: 100%;
                    padding: 16px;
                }
            }
            </style>
        `;
        
        document.head.insertAdjacentHTML('beforeend', styles);
    }

    close() {
        const popup = document.getElementById(this.popupId);
        if (popup) {
            popup.classList.remove('show');
            setTimeout(() => {
                popup.remove();
            }, 300);
            
            // Mark popup as shown so it won't appear again (in current session)
            this.popupShown = true;
        }
    }

    startTrial() {
        // Close popup first
        this.close();
        
        // You can redirect to trial signup page or contact form
        this.navigateToContact();
        
        // Alternative: Redirect to specific trial page
        // window.open('/trial-signup', '_blank');
        // Or: window.location.href = '/trial-signup';
    }

    navigateToContact() {
        // Close popup
        this.close();
        
        // Scroll to contact section
        const contactSection = document.getElementById('contact-section');
        if (contactSection) {
            contactSection.scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
            });
            
            // Optional: Focus on first input field
            setTimeout(() => {
                const firstInput = contactSection.querySelector('input');
                if (firstInput) {
                    firstInput.focus();
                }
            }, 800);
        } else {
            // Fallback: redirect to contact page if no contact section found
            console.warn('Contact section not found. Consider redirecting to contact page.');
            // window.location.href = '/contact';
        }
    }

    setupEventListeners() {
        // Close popup when clicking outside
        document.addEventListener('click', (e) => {
            const popup = document.getElementById(this.popupId);
            if (popup && e.target === popup) {
                this.close();
            }
        });

        // Close popup with Escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                const popup = document.getElementById(this.popupId);
                if (popup) {
                    this.close();
                }
            }
        });
    }

    // Method to reset popup (for testing purposes)
    reset() {
        this.popupShown = false;
        const existingPopup = document.getElementById(this.popupId);
        if (existingPopup) {
            existingPopup.remove();
        }
        console.log('Popup reset - will show again on next trigger');
    }

    // Method to manually trigger popup (useful for testing)
    trigger() {
        this.popupShown = false;
        this.show();
    }
}

// Initialize popup when script loads
let trialPopup;

// Wait for DOM or initialize immediately if ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        trialPopup = new TrialPopup();
    });
} else {
    trialPopup = new TrialPopup();
}

// Make utility functions available globally for testing/debugging
window.resetTrialPopup = () => {
    if (trialPopup) {
        trialPopup.reset();
    }
};

window.showTrialPopup = () => {
    if (trialPopup) {
        trialPopup.trigger();
    }
};

// ========================================
// CONTACT FORM API INTEGRATION - Add this to your index.js
// ========================================

// Contact Form Handler
class ContactFormHandler {
    constructor() {
        this.apiUrl = 'https://doaguru.com/api/auth/contactCrm';
        this.form = null;
        this.submitButton = null;
        this.init();
    }

    init() {
        // Wait for DOM to be ready
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => this.setupForm());
        } else {
            this.setupForm();
        }
    }

    setupForm() {
        this.form = document.getElementById('contactForm');
        this.submitButton = this.form?.querySelector('.submit-button');
        
        if (this.form) {
            this.form.addEventListener('submit', (e) => this.handleSubmit(e));
        }
    }

    async handleSubmit(event) {
        event.preventDefault();
        
        // Get form data
        const formData = new FormData(this.form);
        
        // Prepare data object according to API format
        const data = {
            name: formData.get('name'),
            company: formData.get('company'),
            phone_no: formData.get('phone_no'), // Note: your HTML uses 'mobile' but API expects 'phone_no'
            email_id: formData.get('email'),  // Note: API expects 'email_id' not 'email'
            message: formData.get('message'),
            subject: formData.get('subject')
        };

        // Validate required fields
        if (!data.name || !data.email_id || !data.phone_no || !data.message || !data.subject) {
            this.showMessage('Please fill in all required fields.', 'error');
            return;
        }

        // Show loading state
        this.setLoadingState(true);

        try {
            const response = await fetch(this.apiUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data)
            });

            const result = await response.json();

            if (response.ok) {
                // Success
                this.showMessage('Thank you! Your message has been sent successfully.', 'success');
                this.form.reset();
            } else {
                // API returned an error
                this.showMessage(result.message || 'Something went wrong. Please try again.', 'error');
            }
        } catch (error) {
            console.error('Contact form error:', error);
            this.showMessage('Network error. Please check your connection and try again.', 'error');
        } finally {
            this.setLoadingState(false);
        }
    }

    setLoadingState(isLoading) {
        if (this.submitButton) {
            if (isLoading) {
                this.submitButton.disabled = true;
                this.submitButton.innerHTML = `
                    <span class="loading-spinner"></span>
                    Sending...
                `;
            } else {
                this.submitButton.disabled = false;
                this.submitButton.innerHTML = 'Send Message';
            }
        }
    }

    showMessage(text, type) {
        // Remove existing message
        const existingMessage = document.querySelector('.form-message');
        if (existingMessage) {
            existingMessage.remove();
        }

        // Create new message
        const messageDiv = document.createElement('div');
        messageDiv.className = `form-message ${type}`;
        messageDiv.textContent = text;

        // Insert message before submit button
        const submitDiv = this.form.querySelector('.form-submit');
        submitDiv.parentNode.insertBefore(messageDiv, submitDiv);

        // Add styles for message
        this.addMessageStyles();

        // Auto-hide success messages after 5 seconds
        if (type === 'success') {
            setTimeout(() => {
                if (messageDiv.parentNode) {
                    messageDiv.remove();
                }
            }, 5000);
        }
    }

    addMessageStyles() {
        // Check if styles already added
        if (document.getElementById('form-message-styles')) return;
        
        const styles = `
            <style id="form-message-styles">
            .form-message {
                padding: 12px 16px;
                border-radius: 6px;
                margin-bottom: 20px;
                font-size: 14px;
                font-weight: 500;
                text-align: center;
                animation: slideDown 0.3s ease-out;
            }
            
            .form-message.success {
                background-color: #d4edda;
                color: #155724;
                border: 1px solid #c3e6cb;
            }
            
            .form-message.error {
                background-color: #f8d7da;
                color: #721c24;
                border: 1px solid #f5c6cb;
            }
            
            .submit-button:disabled {
                opacity: 0.7;
                cursor: not-allowed;
            }
            
            .loading-spinner {
                display: inline-block;
                width: 16px;
                height: 16px;
                border: 2px solid #ffffff;
                border-radius: 50%;
                border-top-color: transparent;
                animation: spin 1s linear infinite;
                margin-right: 8px;
            }
            
            @keyframes spin {
                to {
                    transform: rotate(360deg);
                }
            }
            
            @keyframes slideDown {
                from {
                    opacity: 0;
                    transform: translateY(-10px);
                }
                to {
                    opacity: 1;
                    transform: translateY(0);
                }
            }
            
            /* Dark theme styles for messages */
            @media (prefers-color-scheme: dark) {
                .form-message.success {
                    background-color: rgba(40, 167, 69, 0.15);
                    color: #90ee90;
                    border-color: rgba(40, 167, 69, 0.3);
                }
                
                .form-message.error {
                    background-color: rgba(220, 53, 69, 0.15);
                    color: #ff6b6b;
                    border-color: rgba(220, 53, 69, 0.3);
                }
            }
            </style>
        `;
        
        document.head.insertAdjacentHTML('beforeend', styles);
    }
}

// Initialize contact form handler
const contactFormHandler = new ContactFormHandler();
