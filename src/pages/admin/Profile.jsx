import darkClose from '../../assets/icons/dark-close.svg';
import profPic from '../../assets/images/person1.jpeg';
import {jwtDecode} from 'jwt-decode';


const ProfilePage = ({ setProfile }) => {
  const tosinToken = localStorage.getItem("token");
  const token = JSON.parse(tosinToken);

// const decodedToken = jwt.decode(tosinToken);
const decodedToken = jwtDecode(token);
console.log(decodedToken)
const email = decodedToken.email
  const name = decodedToken.name
  


  const handleUpload = async() => {
    setIsUploading(true);
    try {
      const formData = new FormData();
      formData.append('image', avatar )
      const response = await fetch(`https://hospital-management-backend.onrender.com/patient/${patient._id}/upload-picture`, {
        method: 'POST',
        body: formData, 
      })
      const data = await response.json();
      if(response.ok){
        setIsUploading(false);
        setIsClosed(true);
        setPic(URL.createObjectURL(avatar));
      }else{
        console.log('Image upload failed',data);
        setIsUploading(false);
      }
    } catch(err){
      console.log('Error uploading image:', err);
      setIsUploading(false);
    }
}
  return (
    <div className='ProfWrapp'>
      <div className="profileWrap">
        <img src={darkClose} className='closIcon' onClick={() => setProfile(false)} alt="" />
        <input
              // onChange={handleFileChange}  
              type="file" 
              accept="image/png,/image/jpeg,/image/jpg" 
              id="upload" 
            />
        <div className="profCont">
          <img src={profPic} alt="Profile" />
          <form>
            <label htmlFor="Name">Name</label>
            <input type="text" disabled id="Name" defaultValue={name} />
            <label htmlFor="pword">Email</label>
            <input type="email" disabled id="pword" defaultValue={email} />
          </form>
        </div>
      </div>
    </div>
  );
}
 
export default ProfilePage;