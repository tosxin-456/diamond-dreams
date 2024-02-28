import { NavLink, Outlet, useLocation, useNavigate } from "react-router-dom";
import back from '../assets/icons/back-arrow.svg'

const EnrollWrapper = () => {
  const history = useNavigate();
  const location = useLocation();

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
            <NavLink to='Pending'>Pending <span>(5)</span></NavLink>
          </li>
          <li>
            <NavLink to='Accepted'>Accepted <span></span></NavLink>
          </li>
        </ul>
      </nav>
      <Outlet/>
    </>
  );
}
 
export default EnrollWrapper;