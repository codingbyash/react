import React, { useState, useEffect } from 'react';

const Homepage = () => {
  const [officers, setOfficers] = useState([
    { id: 1, name: 'Officer A', department: 'Patrol', rank: 1 },
    { id: 2, name: 'Officer B', department: 'Investigation', rank: 2 },
    { id: 3, name: 'Officer C', department: 'Traffic', rank: 3 },
  ]);

  const departments = ['Patrol', 'Investigation', 'Traffic'];
  const ranks = [1, 2, 3];

  const handleClick = () => {
    alert('Button clicked!');
  };

  const OfficersDet = () => {
    return (
      <div>

        <h2>Officers</h2>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Department</th>
              <th>Rank</th>
            </tr>
          </thead>
          <tbody>
            {officers.map((officer) => (
              <tr key={officer.id}>
                <td>{officer.name}</td>
                <td>{officer.department}</td>
                <td>{officer.rank}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };

  return (
    <div>
      <h1>Question2</h1>
      <h1>Police Station Homepage</h1>
      <OfficersDet />
      <p>Departments: {departments.join(', ')}</p>
      <p>Ranks: {ranks.join(', ')}</p>
      <button onClick={handleClick}>Click me!</button>
    </div>
  );
};

export default Homepage;

