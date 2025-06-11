document.addEventListener('DOMContentLoaded', () => {
    const roleButtons = document.querySelectorAll('.role-btn');
    const forms = document.querySelectorAll('.signin-form');
    
    // Simple credentials for demo purposes
    const credentials = {
        student: { email: "student@school.edu", password: "student123" },
        chief: { email: "chef@frymetothemoon.com", password: "chef123" },
        cashier: { email: "cashier@frymetothemoon.com", password: "cashier123" }
    };
    
    // Role selection functionality
    roleButtons.forEach(button => {
        button.addEventListener('click', () => {
            const role = button.getAttribute('data-role');
            
            // Update active state of buttons
            roleButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            
            // Show the corresponding form
            forms.forEach(form => form.classList.remove('active'));
            document.getElementById(`${role}-form`).classList.add('active');
        });
    });
    
    // Form submission handling
    forms.forEach(form => {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const role = form.id.split('-')[0];
            const emailInput = document.getElementById(`${role}-email`);
            const passwordInput = document.getElementById(`${role}-password`);
            
            if (emailInput.value === credentials[role].email && 
                passwordInput.value === credentials[role].password) {
                alert(`Successfully logged in as ${role}! Redirecting...`);
                window.location.href = '../index.html';
            } else {
                alert('Invalid credentials. Please try again.');
            }
        });
    });
    
    // Activate the first role button by default
    if (roleButtons.length > 0) {
        roleButtons[0].click();
    }
});