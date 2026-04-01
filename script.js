// Smooth scrolling
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
    });
});

// Form validation
document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();

    let name = document.getElementById('name').value.trim();
    let email = document.getElementById('email').value.trim();
    let message = document.getElementById('message').value.trim();
    let msg = document.getElementById('formMsg');

    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if (name === '' || email === '' || message === '') {
        msg.textContent = 'All fields are required!';
        msg.style.color = 'red';
    } else if (!email.match(emailPattern)) {
        msg.textContent = 'Invalid email format!';
        msg.style.color = 'red';
    } else {
        msg.textContent = 'Form submitted successfully!';
        msg.style.color = 'green';
    }
});