import React from 'react';

const Tabel = ({ data, onStatusChange }) => {
  return (
    <div>
      <h2>Attendance Table</h2>
      <table border={1} cellPadding={5} cellSpacing={0} width={'80%'}>
        <thead>
          <tr>
            <th>Attendance date</th>
            <th>Roll no</th>
            <th>Class</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              <td>{row.attendance_date}</td>
              <td>{row.roll_no}</td>
              <td>{row.class_name}</td>
              <td>
                <input 
                  type="checkbox" 
                  checked={row.status}
                  onChange={() => onStatusChange(index)}
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