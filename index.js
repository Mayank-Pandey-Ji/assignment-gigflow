document.getElementById('workerForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Reset all error messages
    document.querySelectorAll('.error').forEach(error => {
        error.style.display = 'none';
    });
    
    let isValid = true;
    
    // Validate name
    const name = document.getElementById('name').value.trim();
    if (name === '') {
        document.getElementById('nameError').style.display = 'block';
        isValid = false;
    }
    
    // Validate email
    const email = document.getElementById('email').value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        document.getElementById('emailError').style.display = 'block';
        isValid = false;
    }
    
    // Validate skill category
    const skillCategory = document.getElementById('skillCategory').value;
    if (skillCategory === '') {
        document.getElementById('skillError').style.display = 'block';
        isValid = false;
    }
    
    // Validate portfolio URL
    const portfolio = document.getElementById('portfolio').value.trim();
    if (portfolio !== '') {
        const urlRegex = /^(http|https):\/\/[^ "]+$/;
        if (!urlRegex.test(portfolio)) {
            document.getElementById('portfolioError').style.display = 'block';
            isValid = false;
        }
    }
    
    // If form is valid, show thank you message
    if (isValid) {
        document.getElementById('signup-form').style.display = 'none';
        document.getElementById('thank-you-message').style.display = 'block';
        
        // In a real application, you would submit the form data to a server here
        console.log('Form submitted with values:', {
            name,
            email,
            skillCategory,
            portfolio
        });
    }
});