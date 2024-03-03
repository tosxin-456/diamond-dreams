import darkClose from '../../assets/icons/dark-close.svg';
import profPic from '../../assets/images/person1.jpeg';
import {jwtDecode} from 'jwt-decode';
import { TbCameraPlus } from 'react-icons/tb';
import { GrClose } from "react-icons/gr";
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ProfilePage = ({ setProfile }) => {
  const tosinToken = localStorage.getItem("token");
  const token = JSON.parse(tosinToken);

// const decodedToken = jwt.decode(tosinToken);
const decodedToken = jwtDecode(token);
// console.log(decodedToken)
const email = decodedToken.email
const name = decodedToken.name

const history = useNavigate();
const [profilePic, setProfilePic] = useState(null);
const [pic, setPic] = useState(null);
const [isClosed, setIsClosed] = useState(false);
const [isUploading, setIsUploading] = useState(false);

const handleFileChange = (event) => setProfilePic(event.target.files[0]);

const handleExit = () => {
  setIsClosed(true);
}  


useEffect(() => {
  setIsUploading(true);
  const fetchData = async () => {
    try {
      const res = await fetch("https://diamondreams.onrender.com/admin/profile-get", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      if (!res.ok) {
        throw new Error("Failed to fetch profile data");
      }
      const data = await res.json();
      // console.log(data);
      setPic(data.profilePic);
      setIsUploading(false);
    } catch (err) {
      console.error(err);
      setIsUploading(false);
    }
  };
  fetchData();
}, [token]);

  
  

  
  

const handleClick = () => {
  localStorage.removeItem('token');
  history('/');
}

const handleUpload = async () => {
  setIsUploading(true);
  try {
    const formData = new FormData();
    formData.append('image', profilePic);
    const response = await fetch(`https://diamondreams.onrender.com/admin/profile-update`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: formData,
    });
    const data = await response.json();
    if (response.ok) {
      setIsUploading(false);
      setIsClosed(true);
      setPic(URL.createObjectURL(profilePic));
    } else {
      console.log('Image upload failed', data);
      setIsUploading(false);
    }
  } catch (err) {
    console.log('Error uploading image:', err);
    setIsUploading(false);
  }
}


  return (
    <div className='ProfWrapp'>
      <div className="profileWrap">
        <img src={darkClose} className='closIcon' onClick={() => setProfile(false)} alt="" />
        <div className="profCont">
          {profilePic && !isClosed && (
            <div className='av__upload'>
              <div className="sideNav">
                <div className="closeIcon"><GrClose onClick={handleExit} className='closeIcon__icon ' /></div>
                <div className="sideNavProf">
                  <img src={URL.createObjectURL(profilePic)} className='urlPic' alt="Selected" />
                  {!isUploading && <button onClick={handleUpload} >Update</button>}
                  {isUploading && <button>Updating Display pic...</button>}
                </div>
              </div>
            </div>
          )}
          <>
            <div className="firstPicWrap">
              <img src={pic === null ? profPic : pic} alt="Profile" />
              <div className="ndPic">
                <input
                  onChange={handleFileChange}
                  type="file"
                  accept="image/png,/image/jpeg,/image/jpg"
                  id="upload"
                />
                <label htmlFor="upload">{ <TbCameraPlus size={25} className="cam" />}</label>
              </div>
            </div>
            <form>
              <label htmlFor="Name">Name</label>
              <input type="text" disabled id="Name" defaultValue={name} />
              <label htmlFor="pword">Email</label>
              <input type="email" disabled id="pword" defaultValue={email} />
            </form>
            <button onClick={handleClick} className='logOutBtn'>LogOut</button>
          </>
        </div>
      </div>
    </div>
  );
}
 
export default ProfilePage;