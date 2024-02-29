import { useEffect, useState } from "react";

const AcceptedEnroll = () => {
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
        </section>
      ))}
    </>
  );
}
 
export default AcceptedEnroll;