import React from 'react';

const Tabel = ({ data, onStatusChange }) => {
  return (
    <div>
      <h2>Attendance Table</h2>
      <table border={1} cellPadding={5} cellSpacing={0} width={'80%'}>
        <thead>
          <tr>
            <th>Attendance Date</th>
            <th>Student Name</th>
            <th>Roll No</th>
            <th>Class</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              <td>{row["attendances.attendance_date"]}</td>
              <td>{row.student_name}</td>
              <td>{row.roll_no}</td>
              <td>{row.class_name}</td>
              <td>
                <input 
                  type="checkbox" 
                  checked={row.attendance_status === 1} // Assuming status is represented as 1 or 0
                  onChange={() => onStatusChange(index, row.attendance_status === 1 ? 0 :1)} // Toggle the status on change
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Tabel;
