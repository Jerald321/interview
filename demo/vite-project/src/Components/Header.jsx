
import "../Style/Header.css"

export default function Header({   filterDept, setFilterDept, showCount, setShowCount, onAdd }) {
  return (
    <div className="header">
      
      <div className="controls">
        
        <div>
          <select value={filterDept} onChange={(e) => setFilterDept(e.target.value)}>
          <option value="">--Select--</option>
          <option value="HR">HR</option>
          <option value="IT">IT</option>
          <option value="Finance">Finance</option>
        </select>
        <select value={showCount} onChange={(e) => setShowCount(Number(e.target.value))}>
          <option value={5}>5</option>
          <option value={10}>10</option>
          <option value={20}>20</option>
        </select>

         </div>


        <div className="btn-header">
               <button onClick={onAdd}>Add Employee</button>
        </div>
       
      </div>
    </div>
  );
}
