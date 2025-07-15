








import React, { useState, useEffect } from 'react';
import '../Style/EmployeeForm.css';

 function EmployeeForm({ initialData, onSubmit, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    department: '',
    role: '',
  });

  useEffect(() => {
    if (initialData) {
      setFormData(initialData);
    }
  }, [initialData]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

const validateEmail = (email) => {
  const strictEmailRegex = /^[a-zA-Z0-9](\.?[a-zA-Z0-9_-]+)*@[a-zA-Z0-9-]+\.[a-zA-Z]{2,}$/;
  return strictEmailRegex.test(email);
};
  const handleSubmit = () => {
    const { name, email, department, role } = formData;

    if (!name || !email || !department || !role) {
      alert("Please fill all fields.");
      return;
    }

    if (!validateEmail(email)) {
      alert("Invalid email format.");
      return;
    }

    onSubmit(formData);
  };

  return (
    <div className="modal-overlay">
      <div className="employee-form">
        <h2>{initialData ? "Edit Employee" : "Add Employee"}</h2>
        <input
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Name"
        />
        <input
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
        />
        <input
          name="department"
          value={formData.department}
          onChange={handleChange}
          placeholder="Department"
        />
        <input
          name="role"
          value={formData.role}
          onChange={handleChange}
          placeholder="Role"
        />
        <div className="form-buttons">
          <button className="submit-btn" onClick={handleSubmit}>
            {initialData ? "Update" : "Add"}
          </button>
          <button className="cancel-btn" onClick={onClose}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default  EmployeeForm;

