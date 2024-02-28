import React, { useState, useEffect } from 'react';

const PendingEnrolls = () => {
  const [enrollments, setEnrollments] = useState([]);
  const token = localStorage.getItem('token');
  console.log(token)
  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem('token');
      try {
        const response = await fetch('https://diamondreams.onrender.com/academy/all', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
          }
        });
  
        if (response.ok) {
          const data = await response.json();
          console.log(data);
          setEnrollments(data);
        } else {
          console.error('Failed to fetch data:', response.statusText);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
  
    fetchData();
  }, []);
  

  return (
    <>
      {enrollments.map(enroll => (
        <section className="pendenroll" key={enroll.id}>
          <div className="enrolDetails">
            <p><span>Name: </span>{enroll.name}</p>
            <p><span>Phone number: </span>{enroll.phoneNumber}</p>
            <p><span>Expectation: </span>{enroll.expectation}</p>
          </div>
          <button className="pendingButton">Pending</button>
        </section>
      ))}
    </>
  );
}



export default PendingEnrolls;
