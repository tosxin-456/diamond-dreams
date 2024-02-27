import minusIcon from '../../assets/icons/minus.svg';
import plusIcon from '../../assets/icons/plus.svg';
import darkClose from '../../assets/icons/dark-close.svg';
import lightCartIcon from '../../assets/icons/light_cart.svg';
import { useState } from 'react';

const ShopPopUp = ({setPopUp}) => {
  const [count, setCount] = useState(0);
  const add = ()=> setCount(count + 1);
  const subtract = ()=> setCount(count - 1);

  return (
    <>
      <div className="shopPop">
        <div className="shopItem"></div>
        <div className="ItemInfo">
          <img className='closIc' onClick={()=>setPopUp(false)} src={darkClose} alt="Close" />
          <h2>Ball gown</h2>
            <div className="buyRent">
              <p>Buy</p>
              <p>Rent</p>
            </div>
            <div className="itemPrice">
              <p>Price</p>
              <p>₦ 100,000</p>
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
    </>
  );
}
 
export default ShopPopUp;