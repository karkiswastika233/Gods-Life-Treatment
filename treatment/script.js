

const hamIcon = document.querySelector('.ham-icon');
const navBar = document.querySelector('.nav-menu')
hamIcon.addEventListener('click', ()=>{
    navBar.classList.toggle("active");

});

// Sidebar state (visual only for now)
document.querySelectorAll('.dept-item').forEach(item => {
  item.addEventListener('click', () => {
    document.querySelectorAll('.dept-item').forEach(i => i.classList.remove('active'));
    item.classList.add('active');

    // Optional: You could swap content based on data-dept here.
    const dept = item.getAttribute('data-dept');
    console.log('Selected department:', dept);
  });
});

<!-- Tabs + Accordion JS -->

    const tabDept = document.getElementById('tab-dept');
    const tabExperts = document.getElementById('tab-experts');
    const secDept = document.getElementById('departments');
    const secExperts = document.getElementById('experts');

    tabDept.addEventListener('click', () => {
      tabDept.classList.add('active'); tabExperts.classList.remove('active');
      secDept.classList.add('show');   secExperts.classList.remove('show');
      window.scrollTo({ top: document.querySelector('.tabs').offsetTop - 10, behavior: 'smooth' });
    });

    tabExperts.addEventListener('click', () => {
      tabExperts.classList.add('active'); tabDept.classList.remove('active');
      secExperts.classList.add('show');   secDept.classList.remove('show');
      window.scrollTo({ top: document.querySelector('.tabs').offsetTop - 10, behavior: 'smooth' });
    });

    // Accordion
    document.querySelectorAll('.acc-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        btn.classList.toggle('active');
        btn.nextElementSibling.classList.toggle('show');
      });
    });

        // Function for main horizontal tabs
        function openTab(evt, tabName) {
            var i, tabContent, tabButtons;

            // Get all elements with class="tab-content" and hide them
            tabContent = document.getElementsByClassName("tab-content");
            for (i = 0; i < tabContent.length; i++) {
                tabContent[i].classList.remove("active");
            }

            // Get all elements with class="tab-button" and remove the "active" class
            tabButtons = document.getElementsByClassName("tab-button");
            for (i = 0; i < tabButtons.length; i++) {
                tabButtons[i].classList.remove("active");
            }

            // Show the current tab, and add an "active" class to the button that opened the tab
            document.getElementById(tabName).classList.add("active");
            evt.currentTarget.classList.add("active");
        }

        // Function for vertical tabs inside Departments
        function openVerticalTab(tabId) {
            // Hide all department contents
            const departmentContents = document.querySelectorAll('.department-content');
            departmentContents.forEach(content => {
                content.classList.remove('active');
            });
            
            // Remove active class from all vertical tabs and set to inactive
            const verticalTabs = document.querySelectorAll('.vertical-tab');
            verticalTabs.forEach(tab => {
                tab.classList.remove('active');
                tab.classList.add('inactive');
            });
            
            // Show the selected department content and set tab to active
            document.getElementById(tabId).classList.add('active');
            event.currentTarget.classList.add('active');
            event.currentTarget.classList.remove('inactive');
            
            // Close all collapsible tabs when switching between departments
            const collapsibleTabs = document.querySelectorAll('.collapsible-tab-header');
            collapsibleTabs.forEach(tab => {
                tab.classList.remove('active');
                tab.nextElementSibling.classList.remove('active');
            });
            
            // Close all treatment dropdowns when switching between departments
            const treatmentDropdowns = document.querySelectorAll('.treatment-dropdown');
            treatmentDropdowns.forEach(dropdown => {
                dropdown.classList.remove('active');
                dropdown.querySelector('.treatment-content').classList.remove('active');
            });
        }

        // Function for collapsible tabs
        function toggleCollapsibleTab(element) {
            // Close all other collapsible tabs
            const allTabHeaders = document.querySelectorAll('.collapsible-tab-header');
            const allTabContents = document.querySelectorAll('.collapsible-tab-content');
            
            allTabHeaders.forEach(header => {
                if (header !== element) {
                    header.classList.remove('active');
                }
            });
            
            allTabContents.forEach(content => {
                if (content !== element.nextElementSibling) {
                    content.classList.remove('active');
                }
            });
            
            // Toggle the clicked tab
            element.classList.toggle('active');
            element.nextElementSibling.classList.toggle('active');
        }

        // Function for treatment dropdowns
        function toggleTreatmentDropdown(dropdownId) {
            const dropdown = document.getElementById(dropdownId);
            const isActive = dropdown.classList.contains('active');
            
            // Close all other treatment dropdowns
            const allDropdowns = document.querySelectorAll('.treatment-dropdown');
            allDropdowns.forEach(d => {
                if (d.id !== dropdownId) {
                    d.classList.remove('active');
                    d.querySelector('.treatment-content').classList.remove('active');
                }
            });
            
            // Toggle the clicked dropdown
            dropdown.classList.toggle('active');
            dropdown.querySelector('.treatment-content').classList.toggle('active');
        }

        // Simple testimonial slider
        let currentTestimonial = 0;
        const testimonials = document.querySelectorAll('.testimonial');
        
        function showTestimonial(index) {
            testimonials.forEach((testimonial, i) => {
                testimonial.style.display = i === index ? 'block' : 'none';
            });
        }
        
        // Initialize first testimonial
        showTestimonial(currentTestimonial);
        
        // Auto-rotate testimonials
        setInterval(() => {
            currentTestimonial = (currentTestimonial + 1) % testimonials.length;
            showTestimonial(currentTestimonial);
        }, 5000);

        // Scroll Animation Functionality
        function isElementInViewport(el) {
            const rect = el.getBoundingClientRect();
            return (
                rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.8 &&
                rect.bottom >= 0
            );
        }

        function handleScrollAnimation() {
            const elements = document.querySelectorAll('.animate-on-scroll, .fade-in-left, .fade-in-right, .scale-in, .stagger-animation');
            
            elements.forEach(element => {
                if (isElementInViewport(element)) {
                    element.classList.add('animated');
                }
            });
        }

        // Mobile menu toggle
        document.getElementById('ham-icon').addEventListener('click', function() {
            const navMenu = document.querySelector('.nav-menu');
            navMenu.classList.toggle('active');
        });

        // Initialize scroll animations
        document.addEventListener('DOMContentLoaded', function() {
            handleScrollAnimation();
            
            // Add scroll event listener
            window.addEventListener('scroll', handleScrollAnimation);
        });
   

