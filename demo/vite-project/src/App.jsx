// import React, { useState } from 'react';
// import './App.css';
// import EmployeeCard from './Components/EmployeeCard';
// import EmployeeForm from './Components/EmployeeForm';
// import Header from './Components/Header';
// import Nav from './Components/Nav';
// import FilterForm from './Components/FilterForm';

// const initialEmployees = [
//   { name: 'Alice Smith', email: 'alice@example.com', department: 'HR', role: 'Manager' },
//   { name: 'Bob Johnson', email: 'bob@example.com', department: 'IT', role: 'Developer' },
//   { name: 'Charlie Lee', email: 'charlie@example.com', department: 'Finance', role: 'Analyst' },
// ];

// function App() {
//   const [employees, setEmployees] = useState(initialEmployees);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [filterDept, setFilterDept] = useState('');
//   const [showCount, setShowCount] = useState(10);
//   const [formVisible, setFormVisible] = useState(false);
//   const [editIndex, setEditIndex] = useState(null);

//   // 🟡 New filter state and toggle
//   const [filters, setFilters] = useState({ firstName: '', department: '', role: '' });
//   const [showFilter, setShowFilter] = useState(false);

//   const handleDelete = (index) => {
//     const newList = [...employees];
//     newList.splice(index, 1);
//     setEmployees(newList);
//   };

//   const handleEdit = (index) => {
//     setEditIndex(index);
//     setFormVisible(true);
//   };

//   const handleAddOrUpdate = (emp) => {
//     const updatedList = [...employees];
//     if (editIndex !== null) {
//       updatedList[editIndex] = emp;
//     } else {
//       updatedList.push(emp);
//     }
//     setEmployees(updatedList);
//     setFormVisible(false);
//     setEditIndex(null);
//   };

//   // ✅ Filter logic
//   const filteredEmployees = employees
//     .filter((emp) =>
//       emp.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       emp.email.toLowerCase().includes(searchTerm.toLowerCase())
//     )
//     .filter((emp) => (filterDept ? emp.department === filterDept : true))
//     .filter((emp) =>
//       (filters.firstName ? emp.name.toLowerCase().startsWith(filters.firstName.toLowerCase()) : true) &&
//       (filters.department ? emp.department.toLowerCase().includes(filters.department.toLowerCase()) : true) &&
//       (filters.role ? emp.role.toLowerCase().includes(filters.role.toLowerCase()) : true)
//     )
//     .slice(0, showCount);

//   const applyFilters = () => {
//     // Not needed unless you want manual "Apply"
//     console.log('Applied filters:', filters);
//   };

//   const resetFilters = () => {
//     setFilters({ firstName: '', department: '', role: '' });
//   };

//   return (
//     <div className="app">
//       {/* 🔍 Navbar with Search & Toggle Filter */}
//       <Nav
//         setSearchTerm={setSearchTerm}
//         searchTerm={searchTerm}
//         toggleFilter={() => setShowFilter(!showFilter)}
//       />
      

//       {/* 🧩 Filter Section */}
//       {showFilter && (
//         <FilterForm
//           filters={filters}
//           setFilters={setFilters}
//           applyFilters={applyFilters}
//           resetFilters={resetFilters}
//         />
//       )}

//       {/* 📋 Department dropdown and count */}
//       <Header
//         filterDept={filterDept}
//         setFilterDept={setFilterDept}
//         showCount={showCount}
//         setShowCount={setShowCount}
//         onAdd={() => setFormVisible(true)}
//       />

//       {/* 👤 Employee Cards */}
//       <div className="employee-list">
//         {filteredEmployees.map((emp, i) => (
//           <EmployeeCard
//             key={i}
//             data={emp}
//             onEdit={() => handleEdit(i)}
//             onDelete={() => handleDelete(i)}
//           />
//         ))}
//       </div>

//       {/* ✍️ Add or Edit Form */}
//       {formVisible && (
//         <EmployeeForm
//           initialData={editIndex !== null ? employees[editIndex] : null}
//           onSubmit={handleAddOrUpdate}
//           onClose={() => {
//             setFormVisible(false);
//             setEditIndex(null);
//           }}
//         />
//       )}

//       <footer>© 2025 Employee Directory App. All rights reserved.</footer>
//     </div>
//   );
// }

// export default App;

import React, { useState } from 'react';
import './App.css';
import EmployeeCard from './Components/EmployeeCard';
import EmployeeForm from './Components/EmployeeForm';
import Header from './Components/Header';
import Nav from './Components/Nav';
import FilterForm from './Components/FilterForm';

const initialEmployees = [
  { name: 'Alice Smith', email: 'alice@example.com', department: 'HR', role: 'Manager' },
  { name: 'Bob Johnson', email: 'bob@example.com', department: 'IT', role: 'Developer' },
  { name: 'Charlie Lee', email: 'charlie@example.com', department: 'Finance', role: 'Analyst' },
];

function App() {
  const [employees, setEmployees] = useState(initialEmployees);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterDept, setFilterDept] = useState('');
  const [showCount, setShowCount] = useState(10);
  const [formVisible, setFormVisible] = useState(false);
  const [editIndex, setEditIndex] = useState(null);
  const [filters, setFilters] = useState({ firstName: '', department: '', role: '' });
  const [showFilter, setShowFilter] = useState(false);

  const handleDelete = (index) => {
    const updated = [...employees];
    updated.splice(index, 1);
    setEmployees(updated);
  };

  const handleEdit = (index) => {
    setEditIndex(index);
    setFormVisible(true);
  };

  const handleAddOrUpdate = (emp) => {
    const updatedList = [...employees];
    if (editIndex !== null) {
      updatedList[editIndex] = emp;
    } else {
      updatedList.push(emp);
    }
    setEmployees(updatedList);
    setFormVisible(false);
    setEditIndex(null);
  };

  const resetFilters = () => setFilters({ firstName: '', department: '', role: '' });

  const filteredEmployees = employees
    .filter(emp =>
      emp.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      emp.email.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .filter(emp => (filterDept ? emp.department === filterDept : true))
    .filter(emp =>
      (filters.firstName ? emp.name.toLowerCase().startsWith(filters.firstName.toLowerCase()) : true) &&
      (filters.department ? emp.department.toLowerCase().includes(filters.department.toLowerCase()) : true) &&
      (filters.role ? emp.role.toLowerCase().includes(filters.role.toLowerCase()) : true)
    )
    .slice(0, showCount);

  return (
    <div className="app">
      <Nav
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        toggleFilter={() => setShowFilter(!showFilter)}
      />

      <div className="main-content">
        {showFilter && (
          <FilterForm
            filters={filters}
            setFilters={setFilters}
            applyFilters={() => {}}
            resetFilters={resetFilters}
          />
        )}

        <div className="content-right">
          <Header
            filterDept={filterDept}
            setFilterDept={setFilterDept}
            showCount={showCount}
            setShowCount={setShowCount}
            onAdd={() => setFormVisible(true)}
          />

          <div className="employee-list">
            {filteredEmployees.map((emp, i) => (
              <EmployeeCard
                key={i}
                data={emp}
                onEdit={() => handleEdit(i)}
                onDelete={() => handleDelete(i)}
              />
            ))}
          </div>
        </div>
      </div>

      {formVisible && (
        <EmployeeForm
          initialData={editIndex !== null ? employees[editIndex] : null}
          onSubmit={handleAddOrUpdate}
          onClose={() => {
            setFormVisible(false);
            setEditIndex(null);
          }}
        />
      )}

      <footer>© 2025 Employee Directory App. All rights reserved.</footer>
    </div>
  );
}

export default App;

