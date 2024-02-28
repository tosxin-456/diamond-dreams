import { NavLink, Outlet, useLocation, useNavigate } from "react-router-dom";
import back from '../assets/icons/back-arrow.svg'

const OrdersWrapper = () => {
  const history = useNavigate();
  const location = useLocation();

  return (
    <>
      <img src={back} alt="Back" onClick={()=> history('Dashboard')} />
      <nav className="btmNav">
        <h1>All orders</h1>
      </nav>
      <nav className="prodNav">
        <ul className="topNav rule">
          <li>
            <NavLink to='Pending-orders'>Pending <span>(5)</span></NavLink>
          </li>
          <li>
            <NavLink to='Delivered'>Accepted <span></span></NavLink>
          </li>
        </ul>
      </nav>
      <Outlet/>
    </>
  );
}
 
export default OrdersWrapper;