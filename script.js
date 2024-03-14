document.addEventListener('DOMContentLoaded', function() {
    const loginFormContainer = document.getElementById('loginFormContainer');
    const registerFormContainer = document.getElementById('registerFormContainer');
    const registerLink = document.getElementById('registerLink');
    const loginLink = document.getElementById('loginLink');

    registerLink.addEventListener('click', function(e) {
        e.preventDefault();
        loginFormContainer.style.display = 'none';
        registerFormContainer.style.display = 'block';
    });

    loginLink.addEventListener('click', function(e) {
        e.preventDefault();
        registerFormContainer.style.display = 'none';
        loginFormContainer.style.display = 'block';
    });

    const loginForm = document.getElementById('loginForm');
    const registrationForm = document.getElementById('registrationForm');

    registrationForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const newUsername = document.getElementById('newUsername').value;
        const newEmail = document.getElementById('newEmail').value;
        const newPassword = document.getElementById('newPassword').value;

        // Email validation
        if (!newEmail.includes('@') || !newEmail.includes('.com')) {
            alert('Please enter a valid email address. It should have "@" and ".com"');
            return;
        }

        // Password validation
        if (newPassword.length < 8 || /^\d+$/.test(newPassword) || !(/[a-z]/.test(newPassword) && /[A-Z]/.test(newPassword))) {
            alert('• Password must be at least 8 characters long \n• Consist of a combination of uppercase and lowercase characters \n• Contain at least one non-numeric character.');
            return;
        }

        // Store the registered user data in local storage
        const userData = {
            username: newUsername,
            email: newEmail,
            password: newPassword
        };

        // Store the data in local storage under a unique key
        localStorage.setItem('userData', JSON.stringify(userData));

        alert(`MAY ACCOUNT KANA POTANGINAMO!`);
    });

    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const identifier = document.getElementById('identifier').value;
        const password = document.getElementById('password').value;

        // Retrieve user data from local storage
        const storedUserData = localStorage.getItem('userData');

        if (storedUserData) {
            const userData = JSON.parse(storedUserData);
            // Check if the entered identifier (username or email) and password match the stored data
            if ((userData.username === identifier || userData.email === identifier) && userData.password === password) {
                alert(`NICE ONE BOBO!`);
                window.location.href = "http://www.pornhub.com";
            } else {
                alert(`REGISTER KA MUNA BURAT!`);
            }
        } else {
            alert(`No user registered. Please register first.`);
        }
    });
});