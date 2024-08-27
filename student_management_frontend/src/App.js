import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Tabel from './Table';

function App() {
  const [selectedClass, setSelectedClass] = useState('');
  const [classrooms, setClassrooms] = useState([]);
  const [attendanceData, setAttendanceData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchClassrooms();
  }, []);

  const fetchClassrooms = () => {
    axios.get('http://localhost:8000/classrooms')
      .then(response => {
        setClassrooms(response.data);
      }).catch(err => {
        console.error(`Error fetching class list: ${err}`);
      });
  };

  const handleSelectChange = (event) => {
    const selected = event.target.value;
    setSelectedClass(selected);
    if (selected) {
      fetchAttendanceData(selected);
    } else {
      setAttendanceData([]);
    }
  };

  const fetchAttendanceData = (className) => {
    setIsLoading(true);
    axios.get(`http://localhost:8000/attendance/${className}`)
      .then(response => {
        setAttendanceData(response.data);
        setIsLoading(false);
      }).catch(err => {
        console.error(`Error fetching attendance data: ${err}`);
        setIsLoading(false);
      });
  };

  const handleStatusChange = (index) => {
    const newData = [...attendanceData];
    newData[index].status = !newData[index].status;
    setAttendanceData(newData);

    // Update the backend
    axios.post(`http://localhost:8000/update-attendance`, newData[index])
      .then(response => {
        console.log('Attendance updated successfully');
      }).catch(err => {
        console.error(`Error updating attendance: ${err}`);
      });
  };

  return (
    <div>
      <h1>Student Attendance System</h1>
      <select value={selectedClass} onChange={handleSelectChange}>
        <option value="">-Select Class-</option>
        {classrooms.map((classItem, index) => (
          <option key={index} value={classItem.class_name}>{classItem.class_name}</option>
        ))}    
      </select>

      {isLoading && <p>Loading attendance data...</p>}

      {!isLoading && selectedClass && attendanceData.length > 0 && (
        <Tabel data={attendanceData} onStatusChange={handleStatusChange} />
      )}

      {!isLoading && selectedClass && attendanceData.length === 0 && (
        <p>No attendance data available for {selectedClass}.</p>
      )}
    </div>
  );
}

export default App;