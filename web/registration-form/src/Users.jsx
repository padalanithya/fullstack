import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "./user.css";

import { Link } from 'react-router-dom';

function Users() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  
  useEffect(() => {
    axios.post('http://localhost:5000/user/getAllUsers') 
      .then((response) => {
        setUsers(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setError('Error fetching users');
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="loading">Loading...</div>;
  if (error) return <div className="error">{error}</div>;

  return (
    
    <div className="user-list">
       
      <h2>Users</h2>
      {/* Table to display users */}
      <table className="user-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Contact</th>
            <th>Gender</th>
            <th>Selected Option</th>
            <th>Subjects</th>
            <th>About</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.firstName}</td>
              <td>{user.lastName}</td>
              <td>{user.email}</td>
              <td>{user.contact}</td>
              <td>{user.gender}</td>
              <td>{user.selectedOption}</td>
              <td>
                user.subjects ? (
                  ${user.subjects.english ? 'English, ' : ''}${user.subjects.maths ? 'Maths, ' : ''}${user.subjects.physics ? 'Physics' : ''}
                ) : (
                  'No subjects selected'
                )
            
              </td>
              <td>{user.about}</td>
            </tr>
           
          ))}
          
        </tbody>
      </table>
       
      <button style={{ backgroundColor: 'blueviolet', color: 'white', padding: '10px 20px', border: 'none', borderRadius: '8px' }}>
  Getdata
</button>

    </div>
  );
}

export default Users;