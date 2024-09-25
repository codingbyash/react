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
   
   const filtered = merged.filter(r => r.rating >= 4);
   
   const updated = filtered.map(r => ({ ...r, numReviews: r.numReviews + 50 }));
   
   const italian = updated.find(r => r.cuisine === 'Italian');
   
   const allAbove100 = updated.every(r => r.numReviews >= 100);
   
   const restaurantDataDiv = document.getElementById('restaurant-data');
   
   let html = '';
   updated.forEach(r => {
     html += `
       <h3>${r.name}</h3>
       <p>Cuisine: ${r.cuisine}</p>
       <p>Rating: ${r.rating}</p>
       <p>Reviews: ${r.numReviews}</p>
       <hr>
     `;
   });
   
   if (italian) {
     html += `
       <h2>Italian Restaurant</h2>
       <p>Name: ${italian.name}</p>
       <p>Cuisine: ${italian.cuisine}</p>
       <p>Rating: ${italian.rating}</p>
       <p>Reviews: ${italian.numReviews}</p>
     `;
   } else {
     html += '<p>No Italian restaurant found.</p>';
   }
   
   html += `
     <p>All reviews above 100: ${allAbove100 ? 'Yes' : 'No'}</p>
   `;
   
   restaurantDataDiv.innerHTML = html;