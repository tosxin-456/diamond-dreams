import { useState } from 'react';
import cartIcon from '../../assets/icons/darkCart.svg';
import lightCartIcon from '../../assets/icons/light_cart.svg'
import minusIcon from '../../assets/icons/minus.svg';
import plusIcon from '../../assets/icons/plus.svg'

const CartWrapper = () => {
  const [count, setCount] = useState(0);
  const add = ()=> setCount(count + 1);
  const subtract = ()=> setCount(count - 1);

  return (
    <>
      {/* <section className='emptyCartSect'>
        <div className="cartImgDiv">
          <img src={cartIcon} alt="Empty Cart" className="cart" />
        </div>
        <h2>Cart is empty</h2>
        <p>Browse our categories and discover the best</p>
        <button>Shop Now</button>
      </section> */}
      <div className="cartAllContain">
        <section className="fullCart rule">
          <div className="itemPic"></div>
          <div className="itemDecrip rule">
            <h2><u>Ball gown</u></h2>
            <div className="itemPrice">
              <p>Price</p>
              <p>100,000</p>
            </div>
            <div className="itemQuant">
              <p>Quantity</p>
              <div className="itemAddSub">
                <img src={minusIcon} onClick={subtract} alt="Minus" className="minus" />
                {count}
                <img src={plusIcon} onClick={add} alt="Plus" className="plus" />
              </div>
            </div>
            <button>
              <img src={lightCartIcon} alt="Cart" />
              Order
            </button>
          </div>
        </section>
      </div>
    </>
  );
}
 
export default CartWrapper;