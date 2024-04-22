
import React, { useState } from 'react';
import './App.css';

function App() {
  const [formData, setFormData] = useState({
    Fullname: '',
    Dateofbirth: '',
    gender: '',
    email: '',
    phone: '',
    username: '',
    password: '',
    cpassword: ''
  });

  const [errors, setErrors] = useState({
    fullnameError: '',
    dobError: '',
    genderError: '',
    emailError: '',
    phoneError: '',
    usernameError: '',
    passwordError: '',
    cpasswordError: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = validateForm();
    if (isValid) {
      // Submit form data
      console.log(formData);
    }
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = {
      fullnameError: '',
      dobError: '',
      genderError: '',
      emailError: '',
      phoneError: '',
      usernameError: '',
      passwordError: '',
      cpasswordError: ''
    };

    // Fullname
    if (!formData.Fullname.trim()) {
      newErrors.fullnameError = 'Required';
      isValid = false;
    }

    // Date of Birth
    if (!formData.Dateofbirth.trim()) {
      newErrors.dobError = 'Required';
      isValid = false;
    } else if (!/^\d{2}\/\d{2}\/\d{4}$/.test(formData.Dateofbirth.trim())) {
      newErrors.dobError = 'Invalid date format (dd/mm/yyyy)';
      isValid = false;
    }

    // Gender
    if (!formData.gender) {
      newErrors.genderError = 'Required';
      isValid = false;
    }

    // Email
    if (!formData.email.trim()) {
      newErrors.emailError = 'Required';
      isValid = false;
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email.trim())) {
      newErrors.emailError = 'Invalid email address';
      isValid = false;
    }

    // Phone
    if (!formData.phone.trim()) {
      newErrors.phoneError = 'Required';
      isValid = false;
    } else if (/[a-zA-Z]/.test(formData.phone.trim())) {
      newErrors.phoneError = 'Phone number should contain only numbers';
      isValid = false;
    } else if (!/^[6-9]\d{9}$/.test(formData.phone.trim())) {
      newErrors.phoneError = 'Invalid phone number';
      isValid = false;
    }

    // Username
    if (!formData.username.trim()) {
      newErrors.usernameError = 'Required';
      isValid = false;
    } else if (!/^[a-zA-Z0-9]{1,15}$/.test(formData.username.trim())) {
      newErrors.usernameError = 'Username should contain only numbers and alphabets with less than 15 characters';
      isValid = false;
    }

    // Password
    if (!formData.password) {
      newErrors.passwordError = 'Required';
      isValid = false;
    } else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{10,}/.test(formData.password)) {
      newErrors.passwordError = 'Password should contain at least one uppercase, one lowercase, two special characters, and a length of 10 characters';
      isValid = false;
    }

    // Confirm password
    if (!formData.cpassword) {
      newErrors.cpasswordError = 'Required';
      isValid = false;
    } else if (formData.password !== formData.cpassword) {
      newErrors.cpasswordError = 'Passwords do not match';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <h1>Register</h1>

        <div className="input">
          <label htmlFor="Fullname">Fullname</label>
          <input type="text" id="Fullname" name="Fullname" value={formData.Fullname} onChange={handleChange} />
          <div className="error">{errors.fullnameError}</div>
        </div>

        <div className="input">
          <label htmlFor="Dateofbirth">Date of Birth (dd/mm/yyyy)</label>
          <input type="text" id="Dateofbirth" name="Dateofbirth" value={formData.Dateofbirth} onChange={handleChange} />
          <div className="error">{errors.dobError}</div>
        </div>

        <div className="gender">
          <span className="gender-title">Gender: </span>
          <input type="radio" name="gender" value="Male" onChange={handleChange} /> Male
          <input type="radio" name="gender" value="Female" onChange={handleChange} /> Female
          <input type="radio" name="gender" value="Not prefer to say" onChange={handleChange} /> Not prefer to say
          <div className="error">{errors.genderError}</div>
        </div>

        <div className="input">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} />
          <div className="error">{errors.emailError}</div>
        </div>

        <div className="input">
          <label htmlFor="phone">Phone</label>
          <input type="text" id="phone" name="phone" value={formData.phone} onChange={handleChange} />
          <div className="error">{errors.phoneError}</div>
        </div>

        <div className="input">
          <label htmlFor="username">Username</label>
          <input type="text" id="username" name="username" value={formData.username} onChange={handleChange} />
          <div className="error">{errors.usernameError}</div>
        </div>

        <div className="input">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} />
          <div className="error">{errors.passwordError}</div>
        </div>

        <div className="input">
          <label htmlFor="cpassword">Confirm Password</label>
          <input type="password" id="cpassword" name="cpassword" value={formData.cpassword} onChange={handleChange} />
          <div className="error">{errors.cpasswordError}</div>
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
