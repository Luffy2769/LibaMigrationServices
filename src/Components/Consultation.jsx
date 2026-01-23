import React from "react";
import { useState } from "react";
export default function Consultation() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    inquiryType: "",
    description: "",
  });

  const consultationForm = async (e) => {
    e.preventDefault();
    // Handle form submission
    try {
      const response = await fetch("http://localhost:8000/api/consultationForm/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const result = await response.json();
      if (result.status === "success") {
        alert("Form submitted successfully!");
        setFormData({
          name: "",
          email: "",
          phone: "",
          inquiryType: "",
          description: "",
        });
      }
    } catch (error) {
      alert("Error submitting form");
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="form-box p-4 bg-white rounded shadow mt-4">
      <h1>Connect with our experts by filling the form below!</h1>
      <form action="" onSubmit={consultationForm}>
        <input
          type="text"
          className="form-control mb-3 formElement"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          className="form-control mb-3 formElement"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="tel"
          className="form-control mb-3 formElement"
          name="phone"
          placeholder="Phone"
          value={formData.phone}
          onChange={handleChange}
          required
        />
        <select
          className="form-select mb-3 formElement"
          name="inquiryType"
          value={formData.inquiryType}
          onChange={handleChange}
          required
        >
          <option value="">Select Service</option>
          <option value="Immigration">Immigration</option>
          <option value="Work abroad">Work abroad</option>
          <option value="Study Overseas">Study Overseas</option>
          <option value="Visa services">Visa services</option>
          <option value="Permanent Residency">Permanent Residency</option>
          <option value="IELTS Coachings">IELTS Coachings</option>
        </select>
        <textarea
          className="form-control mb-3 formElement"
          name="description"
          placeholder="Provide context..."
          value={formData.description}
          onChange={handleChange}
          rows="4"
          required
        />
        <button type="submit" className="lmbtn w-100">
                    Submit
                  </button>
      </form>   
    </div>
  );
}
