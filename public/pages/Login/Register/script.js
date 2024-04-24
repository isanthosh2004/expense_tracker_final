function validateForm() {
    // Reset errors
    var errors = document.querySelectorAll('.error');
    errors.forEach(function (error) {
        error.style.display = 'none';
    });

    var isValid = true;

    // Fullname 
    var fullname = document.getElementById('Fullname').value.trim();
    if (!fullname) {
        alert('Fullname is required');
        isValid = false;
    } else if (!/^[a-zA-Z\s]*$/.test(fullname)) {
        alert('Fullname should contain only alphabets and spaces');
        isValid = false;
    }

    // Date of Birth 
    var dob = document.getElementById('Dateofbirth').value.trim();
    if (!dob) {
        alert('Date of Birth is required');
        isValid = false;
    } else if (!/^\d{2}\/\d{2}\/\d{4}$/.test(dob)) {
        alert('Invalid date format for Date of Birth (dd/mm/yyyy)');
        isValid = false;
    }

    // Gender 
    var gender = document.querySelector('input[name="gender"]:checked');
    if (!gender) {
        alert('Gender is required');
        isValid = false;
    }

    // Email 
    var email = document.getElementById('email').value.trim();
    if (!email) {
        alert('Email is required');
        isValid = false;
    } else if (email.length > 50) {
        alert('Email should not exceed 50 characters');
        isValid = false;
    } else if (!/^\S+@\S+\.\S+$/.test(email)) {
        alert('Invalid email address');
        isValid = false;
    }

    // Phone 
    var phone = document.getElementById('phone').value.trim();
    if (!phone) {
        alert('Phone number is required');
        isValid = false;
    } else if (/[a-zA-Z]/.test(phone)) {
        alert('Phone number should contain only numbers');
        isValid = false;
    } 
    else if (!/^[6-9]\d{9}$/.test(phone)) {
        alert('Invalid phone number');
        isValid = false;
    } 

    // Username 
    var username = document.getElementById('username').value.trim();
    if (!username) {
        alert('Username is required');
        isValid = false;
    } else if (!/^[a-zA-Z0-9]{1,15}$/.test(username)) {
        alert('username should contain only numbers and alphabets with less than 15 charecters');
        isValid = false;
    }

    // Password 
    var password = document.getElementById('password').value;
    if (!password) {
        alert('Password is required');
        isValid = false;
    } else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{10,}/.test(password)) {
        alert('password should atleast contain one uppercase , one lowercase,two special characters and length of 10 characters');
        isValid = false;
    }

    // Confirm password 
    var cpassword = document.getElementById('cpassword').value;
    if (!cpassword) {
        alert('Confirm Password is required');
        isValid = false;
    } else if (password !== cpassword) {
        alert('Passwords do not match');
        isValid = false;
    }

    return isValid;
}