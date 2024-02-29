import minusIcon from '../../assets/icons/minus.svg';
import plusIcon from '../../assets/icons/plus.svg';
import darkClose from '../../assets/icons/dark-close.svg';
import lightCartIcon from '../../assets/icons/light_cart.svg';
import React, { useState, useEffect } from 'react';

const ShopPopUp = ({ setPopUp, itemId }) => {
  const [count, setCount] = useState(0);
  const [shop, setShop] = useState('');
  const tosinToken = localStorage.getItem("token");
  const token = JSON.parse(tosinToken);
  const [loading, setLoading] = useState(true);
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
        console.log(productData)
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
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="shopPop" key={shop.id}>
      <div className="shopItem" style={{ backgroundImage: `url(${shop.picture})` }} ></div>
      <div className="ItemInfo">
        <img className='closIc' onClick={() => setPopUp(false)} src={darkClose} alt="Close" />
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
        <button>
          <img src={lightCartIcon} alt="Cart" />
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ShopPopUp;
