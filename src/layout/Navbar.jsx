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
import { NavLink, Outlet, useLocation, Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [cartItems, setCartItems] = useState([]);
  const [currentHeader, setCurrentHeader] = useState("one");
  const [toggleNav, setToggleNav] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const location = useLocation();
  const history = useNavigate();
  
  useEffect(() => {
    // Fetch cart items from local storage
    const storedCartItems = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(storedCartItems);
  }, []); // Run this effect only once when component mounts
  
  // console.log(cartItems.length)

  const handleNavToggle = () => {
    setToggleNav(!toggleNav);
  };

  useEffect(() => {
    const headers = ["one", "two", "three"];
    let currentIndex = 0;
    let interval;
  
    if (!location.pathname.includes('/Shop') && !location.pathname.includes('/Blog') && !location.pathname.includes('/Contact') && !location.pathname.includes('/Academy') && !location.pathname.includes('/Planning') && !location.pathname.includes('/Cart'))  {
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
    } else if (location.pathname.includes('/Contact')) {
      setCurrentHeader("contact");
    } else if (location.pathname.includes('/Academy')) {
      setCurrentHeader("academy");
    } else if (location.pathname.includes('/Planning')) {
      setCurrentHeader("planning");
    } else if (location.pathname.includes('/Cart')) {
      setCurrentHeader("cart");
    }
  
    return () => clearInterval(interval);
  }, [location.pathname]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <header className={`homeHeader ${currentHeader}`}>
        <div className="headerContainer">
          {isMobile && (
            <nav className={`dropNav ${toggleNav ? 'active' : ''}`}>
              <div className="rule">
                <img 
                  onClick={handleNavToggle}
                  className= "closIcon" 
                  src={closeIcon} 
                  alt="Close" 
                />
                <ul>
                  <li><NavLink onClick={() => Window.reload()} to='/'>Home</NavLink></li>
                  <li><NavLink onClick={handleNavToggle} to='Shop'>Shop</NavLink></li>
                  <li><NavLink onClick={handleNavToggle} to='Blog'>Our Blog</NavLink></li>
                  <li><NavLink onClick={handleNavToggle} to='Contact'>Contact us</NavLink></li>
                  <li><NavLink onClick={handleNavToggle} to='Academy'>Our academy</NavLink></li>
                  <li><NavLink onClick={handleNavToggle} to='Planning'>Planning</NavLink></li>
                  <li><NavLink onClick={handleNavToggle} to='Cart'>{cartItems.length}<img src={cartIcon} alt="" /></NavLink></li>
                </ul>
              </div>
            </nav>
          )}
          <nav className="navbar rule">
            <ul className='topNav'>
              <li>
                <img src={LightLogo} alt="Logo" />
                <p>Diamonddreams Event</p>
              </li>
              {isMobile && (<li>
                <img 
                  src={navIcon} 
                  alt="Hamburger" 
                  onClick={handleNavToggle}
                />
              </li>)}
            </ul>
            <ul className="secondNav">
              <li>
                <NavLink onClick={() => Window.reload()} to='/'>Home</NavLink>
              </li>
              <li>
                <NavLink onClick={handleNavToggle} to='Shop'>Shop</NavLink>
              </li>
              <li>
                <NavLink onClick={handleNavToggle} to='Blog'>Our Blog</NavLink>
              </li>
              <li>
                <NavLink onClick={handleNavToggle} to='Contact'>Contact us</NavLink>
              </li>
              <li>
                <NavLink onClick={handleNavToggle} to='Academy'>Our academy</NavLink>
              </li>
              <li>
                <NavLink onClick={handleNavToggle} to='Planning'>Planning</NavLink>
              </li>
            </ul>
            <ul className='cartNav'>
              <li><NavLink onClick={handleNavToggle} to='Cart'>{cartItems.length}<img src={cartIcon} alt="" /></NavLink></li>
            </ul>
          </nav>
          <div className="landContainer rule">
            {currentHeader === "one" && <><p>Add a Touch of Glamour to Your Wedding</p> <button>Shop Now</button></>}
            {currentHeader === "two" && <><p>Your gateway to wedding expertise, creativity and professional connections</p> <button>Shop Now</button></>}
            {currentHeader === "three" && <><p>Creating seamless, unforgettable moments for your special day</p> <button>Shop Now</button></>}
            {currentHeader === 'shop' && <p>Shop</p>}
            {currentHeader === 'blog' && <p>Our Blog</p>}
            {currentHeader === 'contact' && <p>Contact us</p>}
            {currentHeader === 'academy' && <p>Our Academy</p>}
            {currentHeader === 'planning' && <p>Planning</p>}
            {currentHeader === 'cart' && <p>Cart</p>}
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
            <div className="footAdmin" onClick={()=>history('Admin')}>
              <img src={lightAcc} alt="Admin" />
              <p>Admin</p>
            </div>
          </div>
          {isMobile&& <hr />}
          {!isMobile && <div className='footLineDiVide'></div>}
          <div className="quickSocial">
            <ul className="quickLinks">
              <li>Quick Links</li>
              <li><a href='/#aboutUs'>About us</a></li>
              <li><a href='/#testimonials'>Testimonials</a></li>
              <li><a href='/#faqs'>FAQs</a></li>
              <li><Link to='Shop'>Shop</Link></li>
            </ul>
            <ul className="socialLiks">
              <li>Follow us</li>
              <li className='socialIcons'>
                <Link to='https://web.facebook.com/diamondreamsevents' target="_blank" className='socialLinkLink'>
                  <img src={facebook} alt="Facebook" />
                  <p>Facebook</p>
                </Link>
              </li>
              <li className='socialIcons'>
                <Link to='' target="_blank" className='socialLinkLink'>
                  <img src={instagram} alt="Instagram" />
                  <p>Instagram</p>
                </Link>
              </li>
              <li className='socialIcons'>
                <Link to='' target="_blank" className='socialLinkLink'>
                  <img src={twitx} alt="Twitter" />
                  <p>Twitter</p>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <p className='copyRight'>Copyright. All Rights Reserved</p>
      </footer>
    </>
  );
}
 
export default Navbar;