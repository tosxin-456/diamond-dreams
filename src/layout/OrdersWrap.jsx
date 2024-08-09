import { NavLink, Outlet, useLocation, useNavigate } from "react-router-dom";
import back from '../assets/icons/back-arrow.svg'
import { useEffect, useState } from "react";

const OrdersWrapper = () => {
  const history = useNavigate();
  const location = useLocation();
  const [order, setOrder] = useState([]);
  const tosinToken = localStorage.getItem("token");
  const token = JSON.parse(tosinToken);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("https://diamondreams.onrender.com/shop/all", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });
        const data = await res.json();
        // console.log(data)
        setOrder(data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [token]); 

  const deliveredOrder = order.filter(enroll => enroll.delivered).length
  const pendingOrder = order.filter(enroll => !enroll.delivered).length

  return (
    <>
      <img src={back} alt="Back" onClick={()=> history('Dashboard')} />
      <nav className="btmNav">
        <h1>All orders</h1>
      </nav>
      <nav className="prodNav">
        <ul className="topNav rule">
          <li>
            <NavLink to='Pending-orders'>Pending <span>({pendingOrder})</span></NavLink>
          </li>
          <li>
            <NavLink to='Delivered'>Accepted <span>({deliveredOrder})</span></NavLink>
          </li>
        </ul>
      </nav>
      <Outlet/>
    </>
  );
}
 
export default OrdersWrapper;