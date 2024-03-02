import { useEffect, useState } from "react";
import del from '../../assets/icons/material-symbols-light_delete-outline.svg'



const AcceptedEnroll = () => {
  const [enrollments, setEnrollments] = useState([]);
  const tosinToken = localStorage.getItem("token");
  const token = JSON.parse(tosinToken);

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
  }, [token]); 
  return (
    <>
    {enrollments.filter(enroll => enroll.accepted).map(enroll => (
        <section className="pendenroll" key={enroll._id}>
          <div className="enrolDetails">
            <p><span>Name: </span>{enroll.name}</p>
            <p><span>Phone number: </span>{enroll.phone}</p>
            <p><span>Expectation: </span>{enroll.expectations}</p>
          </div>
        <button className="pendingButton" onClick={() => upDateData(enroll._id)}>Acepted</button>
        <img src={del} alt="" onClick={() => deleteData(enroll._id)} />
        </section>
      ))}
    </>
  );
}
 
export default AcceptedEnroll;