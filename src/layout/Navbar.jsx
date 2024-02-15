import LightLogo from '../assets/icons/light-logo.svg';
import navIcon from '../assets/icons/nav-icon.svg'
import closeIcon from '../assets/icons/close.svg'
import cartIcon from '../assets/icons/light_cart.svg'
import darkLogo from '../assets/icons/dark-logo.svg';
import lightAcc from '../assets/icons/light_account.svg';
import facebook from '../assets/icons/facebook.svg';
import instagram from '../assets/icons/instagram.svg';
import twitx from '../assets/icons/twitter.svg';

import { useState, useEffect } from 'react';
import { NavLink, Outlet, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [currentHeader, setCurrentHeader] = useState("one");
  const [toggleNav, setToggleNav] = useState(false);
  const location = useLocation();

  const handleNavToggle = () => {
    setToggleNav(!toggleNav);
  };

  useEffect(() => {
    const headers = ["one", "two", "three"];
    let currentIndex = 0;
    let interval;
  
    if (!location.pathname.includes('/Shop') && !location.pathname.includes('/Blog')) {
      interval = setInterval(() => {
        currentIndex = (currentIndex + 1) % headers.length;
        setCurrentHeader(headers[currentIndex]);
      }, 5000);
    }
  
    // Update currentHeader based on location.pathname
    if (location.pathname.includes('/Shop')) {
      setCurrentHeader("shop");
    } else if (location.pathname.includes('/Blog')) {
      setCurrentHeader("blog");
    }
  
    return () => clearInterval(interval);
  }, [location.pathname]);

  return (
    <>
      <header className={`homeHeader ${currentHeader}`}>
        <div className="headerContainer">
          <nav className={`dropNav ${toggleNav ? 'active' : ''}`}>
            <div className="rule">
              <img 
                onClick={handleNavToggle}
                className= "closIcon" 
                src={closeIcon} 
                alt="Close" 
              />
              <ul>
                <li><NavLink onClick={() => {handleNavToggle(); Window.reload()}} to='/'>Home</NavLink></li>
                <li><NavLink onClick={handleNavToggle} to='Shop'>Shop</NavLink></li>
                <li><NavLink onClick={handleNavToggle} to='Blog'>Our Blog</NavLink></li>
                <li><NavLink onClick={handleNavToggle}>Contact us</NavLink></li>
                <li><NavLink onClick={handleNavToggle}>Our academy</NavLink></li>
                <li><NavLink onClick={handleNavToggle}>Planning</NavLink></li>
                <li><NavLink onClick={handleNavToggle}><img src={cartIcon} alt="" /></NavLink></li>
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
          <div className="landContainer rule">
            {currentHeader === "one" && <><p>Add a Touch of Glamour to Your Wedding</p> <button>Shop Now</button></>}
            {currentHeader === "two" && <><p>Your gateway to wedding expertise, creativity and professional connections</p> <button>Shop Now</button></>}
            {currentHeader === "three" && <><p>Creating seamless, unforgettable moments for your special day</p> <button>Shop Now</button></>}
            {currentHeader === 'shop' && <p>Shop</p>}
            {currentHeader === 'blog' && <p>Blog</p>}
          </div>
        </div>
      </header>
      <main className="rule">
        <Outlet/>
      </main>
      <footer className='footer'>
        <div className="footerWrap rule">
          <div className="footerLogo">
            <img src={darkLogo} alt="Logo" />
            <h2>Diamonddreams events</h2>
            <p>
              From stunning gowns to captivating accessories, our selection offers both purchasing and rental options, ensuring every bride finds her perfect match.
            </p>
            <div className="footAdmin">
              <img src={lightAcc} alt="Admin" />
              <p>Admin</p>
            </div>
          </div>
          <hr />
          <div className="quickSocial">
            <ul className="quickLinks">
              <li>Quick Links</li>
              <li>About us</li>
              <li>Testimonials</li>
              <li>FAQs</li>
              <li>Shop</li>
            </ul>
            <ul className="socialLiks">
              <li>Follow us</li>
              <li className='socialIcons'>
                <img src={facebook} alt="Facebook" />
                <p>Facebook</p>
              </li>
              <li className='socialIcons'>
                <img src={instagram} alt="Instagram" />
                <p>Instagram</p>
              </li>
              <li className='socialIcons'>
                <img src={twitx} alt="Twitter" />
                <p>Twitter</p>
              </li>
            </ul>
          </div>
          <p className='copyRight'>Copyright. All Rights Reserved</p>
        </div>
      </footer>
    </>
  );
}
 
export default Navbar;