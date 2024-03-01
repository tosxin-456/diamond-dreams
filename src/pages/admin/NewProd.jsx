import { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import back from '../../assets/icons/back-arrow.svg'
import tickIcon from '../../assets/icons/tick.svg'

const NewProduct = () => {
  const history = useNavigate();
  // ENDPOINTS
  const [name, setName] = useState('');
  const [collectionType, setCollectionType] = useState('');
  const [quantity, setQuantity] = useState(0);
  const [price, setPrice] = useState(0);
  const [picture, setPicture] = useState(null);

  const [errorMssg, setErrMssg] = useState('');
  const [selectedImage, setSelectedImage] = useState(false);
  const handleImgChange = (e) => setPicture(e.target.files[0])
  const tosinToken = localStorage.getItem("token");
  const token = JSON.parse(tosinToken);

  useEffect(() => {
      if (picture) {
        setSelectedImage(true)
      }
      console.log(picture);
    }, [picture])

    const handleUpload = async () => {
      try {
        const formData = new FormData();
        formData.append('picture', picture);
        formData.append('name', name);
        formData.append('quantity', quantity);
        formData.append('collectionType', collectionType);
        formData.append('price', price);
    
        const response = await fetch(`https://diamondreams.onrender.com/product`, {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${token}`,
          },
          body: formData,
        });
    
        const data = await response.json();
        if (response.ok) {
          console.log('Image uploaded successfully!', data);
          setErrMssg(data);
          window.location.reload()
        } else {
          console.log('Image upload failed', data);
          setErrMssg(data);
        }
      } catch (err) {
        console.log('Error uploading image:', err);
      }
    };
    

  return (
    <div className='NewProd'>
      <div className="">
        <img src={back} alt="Back" onClick={()=> history('../Dashboard')} />
        <h2>New Product   <span>Gown</span></h2>
        <form action="">
          <input 
            type="text" 
            placeholder='Name of product' 
            value={name}
            onChange={(e)=>setName(e.target.value)}
          />
          <input 
            type="text" 
            placeholder='Collection Type' 
            value={collectionType}
            onChange={(e)=>setCollectionType(e.target.value)}
          />
          <input 
            type="number" 
            placeholder='Quantity' 
            value={quantity}
            onChange={(e)=>setQuantity(e.target.value)}
          />
          <input 
            type="number" 
            placeholder='Price' 
            value={price}
            onChange={(e)=>setPrice(e.target.value)}
          />
          {!selectedImage && <label htmlFor="selFile" id="">
            Upload photo
          </label>}
          {selectedImage && <button><img src={tickIcon} alt="Tick" /> Photo Attached!!!</button>}
          <input 
            type="file"
            accept="image/png,/image/jpeg,/image/jpg"
            onChange={handleImgChange} 
            id="selFile" 
          />
          <p id='errorMessage'>{errorMssg.message}</p>
        </form>
      </div>
      {!selectedImage && <button disabled style={{cursor: 'not-allowed'}} className='lastBtn'>Done</button>}
      {selectedImage && <button onClick={handleUpload} style={{opacity: '1'}} className='lastBtn'>Done</button>}
    </div>
  );
}
 
export default NewProduct;