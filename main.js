const body = document.body;
const navbar = document.getElementById('navbar');
const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');
const themeToggle = document.getElementById('theme-toggle');
const mobileThemeToggle = document.getElementById('mobile-theme-toggle');
const backToTop = document.getElementById('back-to-top');
const contactForm = document.getElementById('contactForm');
const cursorGlow = document.getElementById('cursor-glow');
const currentYearEl = document.getElementById('current-year');

if (currentYearEl) {
    currentYearEl.textContent = new Date().getFullYear();
}

function toggleTheme() {
    if (body.classList.contains('dark')) {
        body.classList.remove('dark');
        localStorage.setItem('theme', 'light');
        themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
        mobileThemeToggle.innerHTML = '<i class="fas fa-moon"></i>';
    } else {
        body.classList.add('dark');
        localStorage.setItem('theme', 'dark');
        themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
        mobileThemeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    }
}

const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
    body.classList.add('dark');
    themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    mobileThemeToggle.innerHTML = '<i class="fas fa-sun"></i>';
}

if (themeToggle) {
    themeToggle.addEventListener('click', toggleTheme);
}

if (mobileThemeToggle) {
    mobileThemeToggle.addEventListener('click', toggleTheme);
}

if (mobileMenuButton) {
    mobileMenuButton.addEventListener('click', () => {
        mobileMenu.classList.toggle('active');
    });
}

const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
mobileNavLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
    });
});

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    if (backToTop) {
        if (window.scrollY > 500) {
            backToTop.classList.add('visible');
        } else {
            backToTop.classList.remove('visible');
        }
    }
    
    animateOnScroll();
});

if (backToTop) {
    backToTop.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

if (cursorGlow && window.innerWidth > 768) {
    document.addEventListener('mousemove', (e) => {
        cursorGlow.style.left = `${e.clientX}px`;
        cursorGlow.style.top = `${e.clientY}px`;
        cursorGlow.style.opacity = '1';
    });
    
    document.addEventListener('mouseleave', () => {
        cursorGlow.style.opacity = '0';
    });
}

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;
        
        console.log('Form submitted:', { name, email, subject, message });
        alert('Thank you for your message! I\'ll get back to you soon.');
       
        contactForm.reset();
    });
}

function animateOnScroll() {
    const revealElements = document.querySelectorAll('.reveal');
    
    revealElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (elementTop < windowHeight - 100) {
            element.classList.add('active');
        }
    });
    
    const skillItems = document.querySelectorAll('.skill-item');
    skillItems.forEach(item => {
        const itemTop = item.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (itemTop < windowHeight - 100) {
            const progress = item.getAttribute('data-progress');
            const progressBar = item.querySelector('.skills-progress');
            
            if (progressBar) {
                progressBar.style.width = `${progress}%`;
            }
        }
    });
    
    const skillCircles = document.querySelectorAll('.skill-circle');
    skillCircles.forEach(circle => {
        const circleTop = circle.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (circleTop < windowHeight - 100) {
            const percent = circle.getAttribute('data-percent');
            const circleProgress = circle.querySelector('.circle-progress');
            
            if (circleProgress) {
                const circumference = 339.3; 
                const offset = circumference - (circumference * percent / 100);
                circleProgress.style.transition = 'stroke-dashoffset 1.5s ease-in-out';
                circleProgress.style.strokeDashoffset = offset;
                
                const color = circle.getAttribute('data-color');
                if (color) {
                    circleProgress.style.stroke = color;
                }
            }
        }
    });
}

const projects = [
    {
        id: 1,
        title: "E-Commerce Management",
        shortDescription: "A comprehensive web platform for managing online stores with inventory tracking and order processing.",
        description: "A complete e-commerce solution with product management, cart functionality, and secure checkout.",
        category: "web",
        icon: "fas fa-shopping-cart",
        iconColor: "text-primary",
        overlayColor: "bg-primary/80",
        tags: ["HTML", "CSS", "JavaScript", "MySQL"],
        demoLink: "#",
        codeLink: "#"
    },
    {
        id: 2,
        title: "Women Safety App",
        shortDescription: "A mobile application with emergency features, location sharing, and SOS alerts for women's safety.",
        description: "A mobile application designed to enhance women's safety with emergency alerts and location tracking.",
        category: "app",
        icon: "fas fa-shield-alt",
        iconColor: "text-secondary",
        overlayColor: "bg-secondary/80",
        tags: ["Java", "Android", "Google Maps API"],
        demoLink: "#",
        codeLink: "#"
    },
    {
        id: 3,
        title: "Blood Bank Management",
        shortDescription: "A web application for blood banks to manage inventory, donors, and recipient requests efficiently.",
        description: "A web-based system for managing blood donation, inventory tracking, and donor/recipient matching.",
        category: "web",
        icon: "fas fa-heartbeat",
        iconColor: "text-red",
        overlayColor: "bg-red/80",
        tags: ["Java", "JSP", "Servlets", "MySQL"],
        demoLink: "#",
        codeLink: "#"
    },
    {
        id: 4,
        title: "Image to Recipe Generation",
        shortDescription: "A framework that uses deep learning to analyze food images and generate corresponding recipes.",
        description: "A deep learning system that generates recipes from food images using computer vision and natural language processing.",
        category: "research",
        icon: "fas fa-utensils",
        iconColor: "text-blue",
        overlayColor: "bg-blue/80",
        tags: ["Python", "TensorFlow", "Computer Vision", "NLP"],
        demoLink: "#",
        researchLink: "#"
    },
    {
        id: 5,
        title: "Plant Biometric Authentication",
        shortDescription: "A lightweight deep CNN approach for identifying and authenticating plants using their unique characteristics.",
        description: "A deep CNN approach to authenticate plants based on their unique biometric features.",
        category: "research",
        icon: "fas fa-leaf",
        iconColor: "text-green",
        overlayColor: "bg-green/80",
        tags: ["Python", "CNN", "Deep Learning", "Computer Vision"],
        demoLink: "#",
        researchLink: "#"
    },
    {
        id: 6,
        title: "Cattle Monitoring System",
        shortDescription: "An IoT solution for tracking and monitoring cattle health, location, and behavior using sensors.",
        description: "An IoT-based system for monitoring cattle health and location using sensors and GPS tracking.",
        category: "app",
        icon: "fas fa-satellite",
        iconColor: "text-yellow",
        overlayColor: "bg-yellow/80",
        tags: ["IoT", "Arduino", "GPS", "Web Dashboard"],
        demoLink: "#",
        researchLink: "#"
    }
];

const education = [
    {
        degree: "Bachelor of Engineering in Computer Science",
        institution: "Yenepoya Institute of Technology",
        location: "Mangalore",
        years: "2020 - 2024",
        score: "CGPA: 6.83"
    },
    {
        degree: "Pre-University Course (Science)",
        institution: "Dr. N.S.A.M PU College",
        location: "Mangalore",
        years: "2018 - 2020",
        score: "Percentage: 53.5%"
    },
    {
        degree: "Secondary School Leaving Certificate",
        institution: "Cascia High School",
        location: "Mangalore",
        years: "- 2018",
        score: "Percentage: 59.3%"
    }
];

const experience = [
    {
        title: "Java Web Application Developer Intern",
        company: "Agile Tech Pvt Ltd",
        period: "Aug 2023 - Sep 2023",
        project: "Project: Blood Bank Management",
        description: "Developed a comprehensive blood donation management system using Java, JSP, Servlets, and MySQL."
    }
];

const certifications = [
    {
        name: "IITB Spoken Tutorial - Python (2023)",
        description: "Comprehensive training in Python programming"
    },
    {
        name: "IITB Spoken Tutorial - Java (2022)",
        description: "Advanced Java programming techniques"
    },
    {
        name: "IITB Spoken Tutorial - C/C++ (2021)",
        description: "Fundamentals and advanced concepts in C and C++"
    },
    {
        name: "Embedded Systems (2023)",
        description: "Building and programming embedded systems"
    },
    {
        name: "IITB Spoken Tutorial - LaTeX (2024)",
        description: "Document preparation using LaTeX"
    }
];

const languages = [
    {
        name: "English",
        level: "Full Professional Proficiency",
        proficiency: 5
    },
    {
        name: "Kannada",
        level: "Full Professional Proficiency",
        proficiency: 5
    },
    {
        name: "Tamil",
        level: "Limited Working Proficiency",
        proficiency: 3
    },
    {
        name: "Hindi",
        level: "Limited Working Proficiency",
        proficiency: 2
    }
];

const interests = [
    {
        name: "Gaming",
        description: "Strategic and adventure games",
        icon: "fas fa-gamepad"
    },
    {
        name: "Fishing",
        description: "Relaxation and sport fishing",
        icon: "fas fa-fish"
    },
    {
        name: "Riding",
        description: "Exploring new places",
        icon: "fas fa-motorcycle"
    },
    {
        name: "Reading Novels",
        description: "Fiction and technical books",
        icon: "fas fa-book"
    },
    {
        name: "Creative Projects",
        description: "Building innovative solutions",
        icon: "fas fa-lightbulb"
    },
    {
        name: "Video Editing",
        description: "Creating visual content",
        icon: "fas fa-film"
    }
];

function renderProjects(filteredProjects = projects) {
    const projectsGrid = document.querySelector('.projects-grid');
    if (!projectsGrid) return;
    
    projectsGrid.innerHTML = '';
    
    filteredProjects.forEach(project => {
        const overlayColor = project.overlayColor || 'bg-primary/80';
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card reveal';
        projectCard.setAttribute('data-category', project.category);
        
        projectCard.innerHTML = `
            <div class="project-header">
                <div class="project-icon">
                    <i class="${project.icon} ${project.iconColor}"></i>
                    <h3>${project.title}</h3>
                </div>
                <div class="project-overlay ${overlayColor}">
                    <div class="overlay-content">
                        <p>${project.description}</p>
                        <div class="overlay-buttons">
                            ${project.demoLink ? `<a href="${project.demoLink}" class="overlay-btn">View Project</a>` : ''}
                            ${project.codeLink ? `<a href="${project.codeLink}" class="overlay-btn">Code</a>` : ''}
                            ${project.researchLink ? `<a href="${project.researchLink}" class="overlay-btn">Research</a>` : ''}
                        </div>
                    </div>
                </div>
            </div>
            <div class="project-content">
                <h3 class="project-title">${project.title}</h3>
                <p class="project-description">${project.shortDescription}</p>
                <div class="project-tags">
                    ${project.tags.map(tag => `<span class="project-tag">${tag}</span>`).join('')}
                </div>
            </div>
        `;
        
        projectsGrid.appendChild(projectCard);
    });
    
    setTimeout(animateOnScroll, 100);
}

const filterButtons = document.querySelectorAll('.filter-btn');
filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        const filterValue = button.getAttribute('data-filter');
        
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        
        const filteredProjects = filterValue === 'all' 
            ? projects 
            : projects.filter(project => project.category === filterValue);
        
        renderProjects(filteredProjects);
    });
});

function renderResume() {
    // Target education container specifically
    const educationContainer = document.getElementById('education-container');
    if (educationContainer) {
        education.forEach(item => {
            const educationItem = document.createElement('div');
            educationItem.className = 'resume-item';
            educationItem.innerHTML = `
                <span class="resume-date">${item.years}</span>
                <h4>${item.degree}</h4>
                <p class="institution">${item.institution}, ${item.location}</p>
                <p>${item.score}</p>
            `;
            educationContainer.appendChild(educationItem);
        });
    }
    
    // Target experience container specifically
    const experienceContainer = document.getElementById('experience-container');
    if (experienceContainer) {
        experience.forEach(item => {
            const experienceItem = document.createElement('div');
            experienceItem.className = 'resume-ex-item';
            experienceItem.innerHTML = `
                <span class="resume-period">${item.period}</span>
                <h4>${item.title}</h4>
                <p class="institution">${item.company}</p>
                <p>${item.project}</p>
                <p>${item.description}</p>
            `;
            experienceContainer.appendChild(experienceItem);
        });
    }

    
    const certificationsContainer = document.querySelector('.certifications-list');
    if (certificationsContainer) {
        certifications.forEach(cert => {
            const certItem = document.createElement('div');
            certItem.className = 'certification-item';
            certItem.innerHTML = `
                <p class="cert-name">${cert.name}</p>
                <p class="cert-desc">${cert.description}</p>
            `;
            certificationsContainer.appendChild(certItem);
        });
    }
    
    const languagesContainer = document.querySelector('.languages-grid');
    if (languagesContainer) {
        languages.forEach(lang => {
            const langItem = document.createElement('div');
            langItem.className = 'language-item';
            
            let proficiencyDots = '';
            for (let i = 1; i <= 5; i++) {
                proficiencyDots += `<span class="prof-dot ${i <= lang.proficiency ? 'active' : ''}"></span>`;
            }
            
            langItem.innerHTML = `
                <p class="language-name">${lang.name}</p>
                <p class="language-level">${lang.level}</p>
                <div class="language-proficiency">
                    ${proficiencyDots}
                </div>
            `;
            languagesContainer.appendChild(langItem);
        });
    }
    
    const interestsContainer = document.querySelector('.interests-grid');
    if (interestsContainer) {
        interests.forEach(interest => {
            const interestItem = document.createElement('div');
            interestItem.className = 'interest-item';
            interestItem.innerHTML = `
                <div class="interest-icon">
                    <i class="${interest.icon}"></i>
                </div>
                <div class="interest-content">
                    <h4>${interest.name}</h4>
                    <p>${interest.description}</p>
                </div>
            `;
            interestsContainer.appendChild(interestItem);
        });
    }
}

function createParticles() {
    const container = document.getElementById('particles-container');
    if (!container) return;
    
    container.innerHTML = '';
    
    const particleCount = 30;
    const colors = ['#8b5cf6', '#10b981', '#3b82f6', '#f59e0b'];
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        const size = Math.random() * 10 + 5;
        const posX = Math.random() * 100;
        const posY = Math.random() * 100;
        const color = colors[Math.floor(Math.random() * colors.length)];
        const duration = Math.random() * 20 + 10;
        const delay = Math.random() * 5;
        
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.backgroundColor = color;
        particle.style.left = `${posX}%`;
        particle.style.top = `${posY}%`;
        particle.style.opacity = '0.3';
        particle.style.position = 'absolute';
        particle.style.borderRadius = '50%';
        particle.style.animation = `float ${duration}s ${delay}s ease-in-out infinite alternate`;
        
        container.appendChild(particle);
    }
}

function addParticleAnimation() {
    const styleSheet = document.createElement('style');
    styleSheet.innerHTML = `
        @keyframes float {
            0% { transform: translate(0, 0); }
            100% { transform: translate(${Math.random() * 30 - 15}px, ${Math.random() * 30 - 15}px); }
        }
    `;
    document.head.appendChild(styleSheet);
}

document.addEventListener('DOMContentLoaded', 
    function() {

    setTimeout(animateOnScroll, 100);
    
    renderProjects();
    
    renderResume();
    
    createParticles();
    addParticleAnimation();
});
