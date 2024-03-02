import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import back from '../../assets/icons/back-arrow.svg'
import tickIcon from '../../assets/icons/tick.svg'

const CreateBlog = () => {
  const [selectedImage, setSelectedImage] = useState(false);
  const [title, setTitle] = useState('')
  const [image, setImage] = useState('')
  const [body, setBody] = useState('')
  const [errorMssg, setErrMssg] = useState('');

  const history = useNavigate();
  const tosinToken = localStorage.getItem("token");
  const token = JSON.parse(tosinToken);

  const handlePicUpdate = (e)=> {
    const file = e.target.files[0];
    if (file) {
      setSelectedImage(true)
      setImage(file)
      // console.log(file)
    }
  }


  const handleUpload = async () => {
    try {
      const formData = new FormData();
      formData.append('images', image);
      formData.append('title', title);
      formData.append('body', body);
  
      const response = await fetch(`https://diamondreams.onrender.com/admin/create-blog`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      });
  
      const data = await response.json();
      if (response.ok) {
        console.log('blog uploaded successfully!', data);
        setErrMssg(data);
        window.location.reload()
      } else {
        console.log('blog upload failed', data);
        setErrMssg(data);
      }
    } catch (err) {
      console.log('Error uploading blog:', err);
    }
  };

  return (
    <div className='BlogCreateWrapper'>
      <img src={back} alt="Back" onClick={()=> history('../Blog-options')} />
      <div className="createBlogWrap">
        <h2>New Blog Post</h2>
        <form action="">
          <input 
            type="text" 
            placeholder='Blog Title'
            value={title} 
            onChange={(e)=>setTitle(e.target.value)}
          />
          <textarea name="" id="" placeholder='Add blog body...' cols="30" rows="10"      value={body} 
          onChange={(e)=>setBody(e.target.value)}></textarea>
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
          <p id='errorMessage'>{errorMssg}</p>
        </form>
        {!selectedImage && <button disabled style={{cursor: 'not-allowed'}} className='lastBtn'>Post</button>}
        {selectedImage && <button onClick={handleUpload} style={{opacity: '1'}} className='lastBtn'>Post</button>}
      </div>
    </div>
  );
}
 
export default CreateBlog;