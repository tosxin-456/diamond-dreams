import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import back from '../../assets/icons/back-arrow.svg'
import tickIcon from '../../assets/icons/tick.svg'

const CreateBlog = () => {
  const [selectedImage, setSelectedImage] = useState(false);
  const history = useNavigate();
  
  const handlePicUpdate = (e)=> {
    const file = e.target.files[0];
    if (file) {
      setSelectedImage(true)
    }
  }

  return (
    <div className='BlogCreateWrapper'>
      <img src={back} alt="Back" onClick={()=> history('../Dashboard')} />
      <div className="createBlogWrap">
        <h2>New Blog Post</h2>
        <form action="">
          <input 
            type="text" 
            placeholder='Blog Title'
          />
          <textarea name="" id="" placeholder='Add blog body...' cols="30" rows="10"></textarea>
          {!selectedImage && <label htmlFor="selFile" id="">
            Upload photo
          </label>}
          {selectedImage && <button><img src={tickIcon} alt="Tick" /> Photo Attached!!!</button>}
          <input 
            type="file"
            accept="image/png,/image/jpeg,/image/jpg"
            onChange={handlePicUpdate} 
            id="selFile" 
          />
          {/* <p id='errorMessage'>{errorMssg.message}</p> */}
        </form>
        {!selectedImage && <button disabled style={{cursor: 'not-allowed'}} className='lastBtn'>Post</button>}
        {selectedImage && <button onClick style={{opacity: '1'}} className='lastBtn'>Post</button>}
      </div>
    </div>
  );
}
 
export default CreateBlog;