import minusIcon from '../../assets/icons/minus.svg';
import plusIcon from '../../assets/icons/plus.svg';
import darkClose from '../../assets/icons/dark-close.svg';
import lightCartIcon from '../../assets/icons/light_cart.svg';
import React, { useState, useEffect } from 'react';
import { RingLoader } from 'react-spinners';
import HashLoader from 'react-spinners/HashLoader';

const ShopPopUp = ({ bouquetPopup, accessoryPopup, gownPopup, setAccessoryPopup, setGownPopup, setBouquetPopup, itemId, loading, setLoading }) => {
  const [count, setCount] = useState(0);
  const [shop, setShop] = useState('');
  const tosinToken = localStorage.getItem("token");
  const token = JSON.parse(tosinToken);
  const [error, setError] = useState(null);

  const add = () => setCount(count + 1);
  const subtract = () => setCount(count - 1);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(`https://diamondreams.onrender.com/product/${itemId}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });
        if (!response.ok) {
          throw new Error('Failed to fetch product');
        }
        const productData = await response.json();
        // console.log(productData)
        setShop(productData);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <div style={{width: '10%', marginInline: 'auto'}}><HashLoader/></div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const HandleCloseClick = () => {
    if (gownPopup === true) {
      setGownPopup(false);
    } else if (accessoryPopup === true) {
      setAccessoryPopup(false);
    } else if (bouquetPopup === true) {
      setBouquetPopup(false);
    }
  }


  const addToCart = (itemToAdd) => {
    // Get the current cart items from local storage
    const existingCartItems = JSON.parse(localStorage.getItem("cart")) || [];
    // Add the new item to the existing cart items
    const updatedCartItems = [...existingCartItems, itemToAdd];
    // Save the updated cart items to local storage
    localStorage.setItem("cart", JSON.stringify(updatedCartItems));
    // Optionally, you can display a confirmation message or perform any other action
    window.location.reload();
  };
  
  return (
    <div className="shopPop" key={shop.id}>
      <div className="shopItem" style={{ backgroundImage: `url(${shop.picture})` }} ></div>
      <div className="ItemInfo">
        <img className='closIc' onClick={HandleCloseClick} src={darkClose} alt="Close" />
        <h2>{shop.name}</h2>
        <div className="buyRent">
          <p>Buy</p>
          <p>Rent</p>
        </div>
        <div className="itemPrice">
          <p>Price</p>
          <p>₦ {shop.price}</p>
        </div>
        <div className="itemQuant">
          <p>Quantity</p>
          <div className="itemAddSub">
            <img src={minusIcon} onClick={subtract} alt="Minus" className="minus" />
            {count}
            <img src={plusIcon} onClick={add} alt="Plus" className="plus" />
          </div>
        </div>
        <div className="itemPrice">
          <p>Delivery Fee</p>
          <p>₦ 2,500</p>
        </div>
        <button onClick={() => addToCart(shop)}>
          <img src={lightCartIcon} alt="Cart"  />
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ShopPopUp;
