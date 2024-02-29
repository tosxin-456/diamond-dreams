import darkClose from '../../assets/icons/dark-close.svg';
import profPic from '../../assets/images/person1.jpeg';

const ProfilePage = ({setProfile}) => {
  return (
    <div className='ProfWrapp'>
      <div className="profileWrap">
        <img src={darkClose} className='closIcon' onClick={()=> setProfile(false)} alt="" />
        <div className="profCont">
          <img src={profPic} alt="Profile" />
          <form>
            <label htmlFor="Name">Name</label>
            <input type="text" disabled id="Name" />
            <label htmlFor="pword">Password</label>
            <input type="password" disabled id="pword" />
          </form>
        </div>
      </div>
    </div>
  );
}
 
export default ProfilePage;