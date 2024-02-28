import LightLogo from '../assets/icons/light-logo.svg';
import darkLogo from '../assets/icons/dark-logo.svg';
import lightAcc from '../assets/icons/light_account.svg';
import facebook from '../assets/icons/facebook.svg';
import instagram from '../assets/icons/instagram.svg';
import twitx from '../assets/icons/twitter.svg';
import profIcon from '../assets/icons/profile.svg';

import { useState, useEffect } from 'react';
import { NavLink, Outlet, useLocation, Link } from 'react-router-dom';

const AdminWrapper = () => {
  const [isMobile, setIsMobile] = useState(false);
  const location = useLocation();

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
    <header className="adminHeader">
      <nav className="rule">
        <ul className='topNav'>
          <li>
            <img src={LightLogo} alt="Logo" />
            <p>Diamonddreams Event</p>
          </li>
          {isMobile && (<li>
            <img 
              src={profIcon} 
              className='profImg'
              alt="Profile" 
              // onClick={handleNavToggle}
            />
          </li>)}
        </ul>
      </nav>
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
 
export default AdminWrapper;