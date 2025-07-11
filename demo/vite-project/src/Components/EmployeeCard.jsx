import React from 'react';
import '../Style/EmployeeCard.css'; // Import your CSS file

export default function EmployeeCard({ data, onEdit, onDelete }) {
  return (
    <div className="employee-card">
      <h3>{data.name}</h3>
      <p><strong>Email:</strong> {data.email}</p>
      <p><strong>Department:</strong> {data.department}</p>
      <p><strong>Role:</strong> {data.role}</p>
      <div className="card-buttons">
        <button className="edit-btn" onClick={onEdit}>Edit</button>
        <button className="delete-btn" onClick={onDelete}>Delete</button>
      </div>
    </div>
  );
}
