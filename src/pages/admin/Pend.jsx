import React, { useEffect, useState } from 'react';
import del from '../../assets/icons/material-symbols-light_delete-outline.svg'

const PendingEnrolls = () => {
  const [enrollments, setEnrollments] = useState([]);
  const tosinToken = localStorage.getItem("token");
  const token = JSON.parse(tosinToken);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("https://diamondreams.onrender.com/academy/all", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });
        const data = await res.json();
        console.log(data)
        setEnrollments(data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [token]); // Include token in dependency array

  const upDateData = async (id) => {
    try {
      const response = await fetch(`https://diamondreams.onrender.com/academy/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ accepted: true }), // Move body outside headers
      });
      const data = await response.json();
      if (response.ok) {
        console.log('Form data submitted successfully');
        // Update enrollments after setting the enrollment as accepted
        const updatedEnrollments = enrollments.map(enrollment => {
          if (enrollment._id === id) {
            return { ...enrollment, accepted: true };
          }
          return enrollment;
        });
        setEnrollments(updatedEnrollments);
      } else {
        console.error('Failed to submit form data', data);
      }
    } catch (error) {
      console.error('Error submitting form data:', error);
    }
  };

  const deleteData = async (id) => {
    try {
      const response = await fetch(`https://diamondreams.onrender.com/academy/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await response.json();
      if (response.ok) {
        window.reload()
      } else {
        console.error('Failed to submit form data', data);
      }
    } catch (error) {
      console.error('Error submitting form data:', error);
    }
  };


  // Filter enrollments where accepted is false
  const pendingEnrollments = enrollments.filter(enroll => !enroll.accepted);

  return (
    <>
      {pendingEnrollments.map(enroll => (
        <section className="pendenroll" key={enroll._id}>
          <div className="enrolDetails">
            <p><span>Name: </span>{enroll.name}</p>
            <p><span>Phone number: </span>{enroll.phone}</p>
            <p><span>Expectation: </span>{enroll.expectations}</p>
          </div>
          <button className="pendingButton" onClick={() => upDateData(enroll._id)}>Pending</button>
          <img src={del} alt="" onClick={() => deleteData(enroll._id)} />
        </section>
      ))}
    </>
  );
};

export default PendingEnrolls;
