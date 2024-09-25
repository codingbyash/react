import React from 'react';

const RestaurantData = () => {
  const r1 = [
    { name: 'R1', cuisine: 'Italian', rating: 4.5, numReviews: 200 },
    { name: 'R2', cuisine: 'Mexican', rating: 3.8, numReviews: 150 },
    // ...
  ];

  const r2 = [
    { name: 'R3', cuisine: 'Indian', rating: 4.2, numReviews: 180 },
    { name: 'R4', cuisine: 'Chinese', rating: 3.5, numReviews: 120 },
    // ...
  ];

  const merged = [...r1, ...r2];

  const filtered = merged.filter((r) => r.rating >= 4);     

  const updated = filtered.map((r) => ({ ...r, numReviews: r.numReviews + 50 }));

  const italian = updated.find((r) => r.cuisine === 'Italian');

  const allAbove100 = updated.every((r) => r.numReviews >= 100);

  return (
    <div>
     <h1>QUESTION 1</h1>
      <h1>Restaurant Data</h1>
      <table>
        <tr>
          <th>Name</th>
          <th>Cuisine</th>
          <th>Rating</th>
          <th>Reviews</th>
        </tr>
        {updated.map((r) => (
          <tr key={r.name}>
            <td>{r.name}</td>
            <td>{r.cuisine}</td>
            <td>{r.rating}</td>
            <td>{r.numReviews}</td>
          </tr>
        ))}
      </table>
      {italian ? (
        <div>
          <h2>Italian Restaurant</h2>
          <table>
            <tr>
              <th>Name</th>
              <th>Cuisine</th>
              <th>Rating</th>
              <th>Reviews</th>
            </tr>
            <tr>
              <td>{italian.name}</td>
              <td>{italian.cuisine}</td>
              <td>{italian.rating}</td>
              <td>{italian.numReviews}</td>
            </tr>
          </table>
        </div>
      ) : (
        <p>No Italian restaurant found.</p>
      )}
      <p>All reviews above 100: {allAbove100 ? 'Yes' : 'No'}</p>
    </div>
  );
};

export default RestaurantData;