import React, { useState } from "react";

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    userId: "",
    password: "",
    name: "",
    address: "",
    country: "",
    zipCode: "",
    email: "",
    sex: "",
    language: [],
    about: "",
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    let newErrors = {};

    // Validate User ID
    if (!formData.userId) {
      newErrors.userId = "Required and must be of length 5 to 12.";
    } else if (formData.userId.length < 5 || formData.userId.length > 12) {
      newErrors.userId = "User ID must be between 5 and 12 characters.";
    }

    // Validate Password
    if (!formData.password) {
      newErrors.password = "Required and must be of length 7 to 12.";
    } else if (formData.password.length < 7 || formData.password.length > 12) {
      newErrors.password = "Password must be between 7 and 12 characters.";
    }

    // Validate Name
    if (!formData.name) {
      newErrors.name = "Required and must contain alphabets only.";
    } else if (!/^[A-Za-z]+$/.test(formData.name)) {
      newErrors.name = "Name must contain alphabets only.";
    }

    // Validate Country
    if (!formData.country) {
      newErrors.country = "Required. Must select a country.";
    }

    // Validate ZIP Code
    if (!formData.zipCode) {
      newErrors.zipCode = "Required. Must be numeric.";
    } else if (!/^\d+$/.test(formData.zipCode)) {
      newErrors.zipCode = "ZIP Code must be numeric.";
    }

    // Validate Email
    if (!formData.email) {
      newErrors.email = "Required. Must be a valid email.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Email must be valid.";
    }

    // Validate Sex
    if (!formData.sex) {
      newErrors.sex = "Required.";
    }

    // Validate Language
    if (formData.language.length === 0) {
      newErrors.language = "Required.";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0; // Return true if no errors
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setFormData({
        ...formData,
        language: checked
          ? [...formData.language, value]
          : formData.language.filter((lang) => lang !== value),
      });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert("Form submitted successfully!");
      console.log(formData);
    }
  };

  const formStyle = {
    width: "300px",
    margin: "0 auto",
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    backgroundColor: "#f9f9f9",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
  };

  const labelStyle = {
    display: "block",
    marginBottom: "6px",
    fontWeight: "bold",
  };

  const inputStyle = {
    width: "100%",
    padding: "8px",
    marginBottom: "10px",
    borderRadius: "4px",
    border: "1px solid #ccc",
  };

  const errorStyle = {
    color: "red",
    fontSize: "12px",
    marginBottom: "10px",
  };

  const buttonStyle = {
    width: "100%",
    padding: "10px",
    backgroundColor: "#28a745",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  };

  const checkboxStyle = {
    marginRight: "10px",
  };

  const radioStyle = {
    marginRight: "10px",
  };

  return (
    <form onSubmit={handleSubmit} style={formStyle}>
      <h2 style={{ textAlign: "center" }}>Registration Form</h2>

      {/* User ID */}
      <div>
        <label style={labelStyle}>User id:</label>
        <input
          type="text"
          name="userId"
          value={formData.userId}
          onChange={handleChange}
          style={inputStyle}
        />
        {errors.userId && <span style={errorStyle}>{errors.userId}</span>}
      </div>

      {/* Password */}
      <div>
        <label style={labelStyle}>Password:</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          style={inputStyle}
        />
        {errors.password && <span style={errorStyle}>{errors.password}</span>}
      </div>

      {/* Name */}
      <div>
        <label style={labelStyle}>Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          style={inputStyle}
        />
        {errors.name && <span style={errorStyle}>{errors.name}</span>}
      </div>

      {/* Address */}
      <div>
        <label style={labelStyle}>Address (Optional):</label>
        <input
          type="text"
          name="address"
          value={formData.address}
          onChange={handleChange}
          style={inputStyle}
        />
      </div>

      {/* Country */}
      <div>
        <label style={labelStyle}>Country:</label>
        <select
          name="country"
          value={formData.country}
          onChange={handleChange}
          style={inputStyle}
        >
          <option value="">(Please select a country)</option>
          <option value="USA">USA</option>
          <option value="Canada">Canada</option>
          <option value="UK">UK</option>
        </select>
        {errors.country && <span style={errorStyle}>{errors.country}</span>}
      </div>

      {/* ZIP Code */}
      <div>
        <label style={labelStyle}>ZIP Code:</label>
        <input
          type="text"
          name="zipCode"
          value={formData.zipCode}
          onChange={handleChange}
          style={inputStyle}
        />
        {errors.zipCode && <span style={errorStyle}>{errors.zipCode}</span>}
      </div>

      {/* Email */}
      <div>
        <label style={labelStyle}>Email:</label>
        <input
          type="text"
          name="email"
          value={formData.email}
          onChange={handleChange}
          style={inputStyle}
        />
        {errors.email && <span style={errorStyle}>{errors.email}</span>}
      </div>

      {/* Sex */}
      <div>
        <label style={labelStyle}>Sex:</label>
        <input
          type="radio"
          name="sex"
          value="Male"
          onChange={handleChange}
          style={radioStyle}
        />{" "}
        Male
        <input
          type="radio"
          name="sex"
          value="Female"
          onChange={handleChange}
          style={radioStyle}
        />{" "}
        Female
        {errors.sex && <span style={errorStyle}>{errors.sex}</span>}
      </div>

      {/* Language */}
      <div>
        <label style={labelStyle}>Language:</label>
        <input
          type="checkbox"
          name="language"
          value="English"
          onChange={handleChange}
          style={checkboxStyle}
        />{" "}
        English
        <input
          type="checkbox"
          name="language"
          value="Non English"
          onChange={handleChange}
          style={checkboxStyle}
        />{" "}
        Non English
        {errors.language && <span style={errorStyle}>{errors.language}</span>}
      </div>

      {/* About */}
      <div>
        <label style={labelStyle}>About (Optional):</label>
        <textarea
          name="about"
          value={formData.about}
          onChange={handleChange}
          style={{ ...inputStyle, height: "80px" }}
        />
      </div>

      {/* Submit Button */}
      <div>
        <button type="submit" style={buttonStyle}>
          Submit
        </button>
      </div>
    </form>
  );
};

export default RegistrationForm;
