import { NavLink, Outlet, useLocation, useNavigate } from "react-router-dom";
import back from '../assets/icons/back-arrow.svg'
import plusIcon from '../assets/icons/lightPlus.svg'

const ProductWrapper = () => {
  const history = useNavigate();
  const location = useLocation();

  return (
    <>
      <img src={back} alt="Back" onClick={()=> history('Dashboard')} />
      <nav className="btmNav">
        <h1>All products</h1>
        {location.pathname.includes('Gown') &&<button><img src={plusIcon} alt="Plus" /> New gown</button>}
        {location.pathname.includes('Accessory') &&<button><img src={plusIcon} alt="Plus" /> New accessory</button>}
        {location.pathname.includes('Bouquet') &&<button><img src={plusIcon} alt="Plus" /> New bouquet</button>}
      </nav>
      <nav className="prodNav">
        <ul className="topNav rule">
          <li>
            <NavLink to='Gowns'>Gowns <span>(5)</span></NavLink>
          </li>
          <li>
            <NavLink to='Accessory'>Accessories <span></span></NavLink>
          </li>
          <li>
            <NavLink to='Bouquet'>Bouquets <span></span></NavLink>
          </li>
        </ul>
      </nav>
      <Outlet/>
    </>
  );
}
 
export default ProductWrapper;