import LightLogo from '../assets/icons/light-logo.svg';
import navIcon from '../assets/icons/nav-icon.svg'

const Navbar = () => {
  return (
    <>
      <nav className="navbar rule">
        <ul className='topNav'>
          <li>
            <img src={LightLogo} alt="Logo" />
            <p>Diamonddreams Event</p>
          </li>
          <li>
            <img src={navIcon} alt="Hamburger" />
          </li>
        </ul>
      </nav>
    </>
  );
}
 
export default Navbar;