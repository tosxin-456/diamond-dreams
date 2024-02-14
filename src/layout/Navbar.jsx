import LightLogo from '../assets/icons/light-logo.svg';
import navIcon from '../assets/icons/nav-icon.svg'
import closeIcon from '../assets/icons/close.svg'
import cartIcon from '../assets/icons/light_cart.svg'
import { useState } from 'react';

const Navbar = () => {
  const [toggleNav, setToggleNav] = useState(false);

  const handleNavToggle = () => {
    setToggleNav(!toggleNav);
  };

  return (
    <>
      <nav className={`dropNav ${toggleNav ? 'active' : ''}`}>
        <div className="rule">
          <img 
            onClick={handleNavToggle}
            className= "closIcon" 
            src={closeIcon} 
            alt="Close" 
          />
          <ul>
            <li>Home</li>
            <li>Shop</li>
            <li>Our Blog</li>
            <li>Contact us</li>
            <li>Our academy</li>
            <li>Planning</li>
            <li><img src={cartIcon} alt="" /></li>
          </ul>
        </div>
      </nav>
      <nav className="navbar rule">
        <ul className='topNav'>
          <li>
            <img src={LightLogo} alt="Logo" />
            <p>Diamonddreams Event</p>
          </li>
          <li>
            <img 
              src={navIcon} 
              alt="Hamburger" 
              onClick={handleNavToggle}
            />
          </li>
        </ul>
      </nav>
    </>
  );
}
 
export default Navbar;