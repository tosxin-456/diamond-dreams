import { NavLink, Outlet, useLocation, useNavigate } from "react-router-dom";
import back from '../assets/icons/back-arrow.svg'
import { useEffect, useState } from "react";


const EnrollWrapper = () => {
  const history = useNavigate();
  const location = useLocation();
  const tosinToken = localStorage.getItem("token");
  const token = JSON.parse(tosinToken);
  const [enrollments, setEnrollments] = useState([]);

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
        setEnrollments(data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [token]); 
  
  const pendingCount = enrollments.filter(enroll => !enroll.accepted).length;
  const acceptedCount = enrollments.filter(enroll => enroll.accepted).length

  return (
    <>
      <img src={back} alt="Back" onClick={()=> history('Dashboard')} />
      <nav className="btmNav">
        <h1>All enrollments</h1>
        {location.pathname.includes('Pending') &&<button>Accept all</button>}
      </nav>
      <nav className="prodNav">
        <ul className="topNav rule">
          <li>
            <NavLink to='Pending'>Pending <span>({pendingCount})</span></NavLink>
          </li>
          <li>
            <NavLink to='Accepted'>Accepted <span>({acceptedCount})</span></NavLink>
          </li>
        </ul>
      </nav>
      <Outlet/>
    </>
  );
}
 
export default EnrollWrapper;