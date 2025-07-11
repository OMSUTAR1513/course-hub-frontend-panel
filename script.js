
// Course data
const courses = [
    {
        id: 1,
        title: "React & TypeScript Masterclass",
        instructor: "Sarah Johnson",
        price: "$129",
        originalPrice: "$199",
        rating: 4.9,
        students: 3420,
        duration: "42 hours",
        lessons: 156,
        category: "Web Development",
        level: "Advanced",
        image: "🚀"
    },
    {
        id: 2,
        title: "Python for Data Science",
        instructor: "Dr. Michael Chen",
        price: "$99",
        originalPrice: "$149",
        rating: 4.8,
        students: 2850,
        duration: "35 hours",
        lessons: 128,
        category: "Data Science",
        level: "Intermediate",
        image: "🐍"
    },
    {
        id: 3,
        title: "UI/UX Design Fundamentals",
        instructor: "Emma Rodriguez",
        price: "$89",
        originalPrice: "$129",
        rating: 4.9,
        students: 1920,
        duration: "28 hours",
        lessons: 94,
        category: "Design",
        level: "Beginner",
        image: "🎨"
    },
    {
        id: 4,
        title: "Digital Marketing Strategy",
        instructor: "James Wilson",
        price: "$79",
        originalPrice: "$119",
        rating: 4.7,
        students: 4150,
        duration: "24 hours",
        lessons: 68,
        category: "Marketing",
        level: "Intermediate",
        image: "📈"
    },
    {
        id: 5,
        title: "Machine Learning with Python",
        instructor: "Dr. Lisa Park",
        price: "$149",
        originalPrice: "$229",
        rating: 4.8,
        students: 1680,
        duration: "56 hours",
        lessons: 189,
        category: "AI & ML",
        level: "Advanced",
        image: "🤖"
    },
    {
        id: 6,
        title: "Full-Stack JavaScript",
        instructor: "Alex Thompson",
        price: "$139",
        originalPrice: "$199",
        rating: 4.9,
        students: 2940,
        duration: "48 hours",
        lessons: 172,
        category: "Web Development",
        level: "Intermediate",
        image: "💻"
    }
];

// DOM elements
const navItems = document.querySelectorAll('.nav-item');
const tabContents = document.querySelectorAll('.tab-content');
const mobileMenuToggle = document.getElementById('mobileMenuToggle');
const navMenu = document.getElementById('navMenu');
const courseGrid = document.getElementById('courseGrid');
const allCoursesGrid = document.getElementById('allCoursesGrid');

// Navigation functionality
function switchTab(targetTab) {
    // Remove active class from all nav items and tab contents
    navItems.forEach(item => item.classList.remove('active'));
    tabContents.forEach(content => content.classList.remove('active'));
    
    // Add active class to clicked nav item
    const activeNavItem = document.querySelector(`[data-tab="${targetTab}"]`);
    activeNavItem.classList.add('active');
    
    // Show corresponding tab content
    const activeTabContent = document.getElementById(targetTab);
    activeTabContent.classList.add('active');
}

// Add click event listeners to nav items
navItems.forEach(item => {
    item.addEventListener('click', () => {
        const targetTab = item.getAttribute('data-tab');
        switchTab(targetTab);
    });
});

// Mobile menu toggle
mobileMenuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Create course card HTML
function createCourseCard(course) {
    const stars = '★'.repeat(Math.floor(course.rating)) + '☆'.repeat(5 - Math.floor(course.rating));
    
    return `
        <div class="course-item">
            <div class="course-image">
                ${course.image}
            </div>
            <div class="course-content">
                <div class="course-badges">
                    <span class="badge badge-category">${course.category}</span>
                    <span class="badge badge-level">${course.level}</span>
                </div>
                
                <h3 class="course-title">${course.title}</h3>
                <p class="course-instructor">by ${course.instructor}</p>
                
                <div class="course-meta">
                    <div class="course-meta-item course-rating">
                        <span class="star">★</span>
                        <span>${course.rating}</span>
                    </div>
                    <div class="course-meta-item">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                            <circle cx="9" cy="7" r="4"/>
                            <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                            <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                        </svg>
                        <span>${course.students.toLocaleString()}</span>
                    </div>
                    <div class="course-meta-item">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <circle cx="12" cy="12" r="10"/>
                            <polyline points="12,6 12,12 16,14"/>
                        </svg>
                        <span>${course.duration}</span>
                    </div>
                </div>
                
                <div class="course-meta">
                    <div class="course-meta-item">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
                            <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
                        </svg>
                        <span>${course.lessons} lessons</span>
                    </div>
                </div>
                
                <div class="course-price">
                    <div class="price-container">
                        <span class="current-price">${course.price}</span>
                        <span class="original-price">${course.originalPrice}</span>
                    </div>
                    <button class="btn btn-primary">Enroll Now</button>
                </div>
            </div>
        </div>
    `;
}

// Populate course grids
function populateCourseGrid(container, coursesToShow) {
    if (container) {
        container.innerHTML = coursesToShow.map(course => createCourseCard(course)).join('');
    }
}

// Initialize the application
function init() {
    // Show featured courses (first 3) on home page
    populateCourseGrid(courseGrid, courses.slice(0, 3));
    
    // Show all courses on courses page
    populateCourseGrid(allCoursesGrid, courses);
    
    // Add smooth scrolling to internal links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Add click handlers to enrollment buttons
    document.addEventListener('click', function(e) {
        if (e.target.textContent === 'Enroll Now') {
            e.preventDefault();
            alert('Enrollment functionality would be implemented here!');
        }
    });
    
    // Add click handlers to other action buttons
    document.addEventListener('click', function(e) {
        if (e.target.textContent === 'Start Learning Today' || 
            e.target.textContent === 'Browse Courses' ||
            e.target.textContent === 'View All Courses') {
            e.preventDefault();
            
            if (e.target.textContent === 'Browse Courses' || 
                e.target.textContent === 'View All Courses') {
                switchTab('courses');
            } else {
                switchTab('courses');
            }
        }
    });
}

// Utility functions
function formatNumber(num) {
    return num.toLocaleString();
}

function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Add window resize handler for responsive behavior
window.addEventListener('resize', debounce(() => {
    // Handle any responsive adjustments here
    if (window.innerWidth > 768) {
        navMenu.classList.remove('active');
    }
}, 250));

// Initialize the app when DOM is loaded
document.addEventListener('DOMContentLoaded', init);

// Add loading animation for buttons
document.addEventListener('click', function(e) {
    if (e.target.classList.contains('btn') && e.target.textContent.includes('Enroll')) {
        const originalText = e.target.textContent;
        e.target.textContent = 'Processing...';
        e.target.disabled = true;
        
        setTimeout(() => {
            e.target.textContent = originalText;
            e.target.disabled = false;
        }, 2000);
    }
});

// Simple analytics tracking (placeholder)
function trackEvent(eventName, eventData = {}) {
    console.log('Event tracked:', eventName, eventData);
    // In a real application, you would send this data to your analytics service
}

// Track navigation events
navItems.forEach(item => {
    item.addEventListener('click', () => {
        trackEvent('navigation_click', {
            tab: item.getAttribute('data-tab'),
            timestamp: new Date().toISOString()
        });
    });
});

// Export functions for potential use in other scripts
window.CourseHub = {
    switchTab,
    courses,
    trackEvent
};
