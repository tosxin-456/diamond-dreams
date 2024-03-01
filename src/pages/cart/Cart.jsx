import { useEffect, useState } from 'react';
import cartIcon from '../../assets/icons/darkCart.svg';
import lightCartIcon from '../../assets/icons/light_cart.svg'
import minusIcon from '../../assets/icons/minus.svg';
import plusIcon from '../../assets/icons/plus.svg'
import deleteIcon from '../../assets/icons/delete.svg'
import { Link } from 'react-router-dom';

const CartWrapper = () => {
  const [cartItems, setCartItems] = useState([]);
  const [count, setCount] = useState(0);
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [quantity, setQuantity] = useState('')

  const add = () => setCount(count + 1);
 const subtract = () => {
  if (count > 0) {
    setCount(count - 1);
  }
};


  useEffect(() => {
    // Fetch cart items from local storage
    const storedCartItems = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(storedCartItems);
  }, []); // Run this effect only once when component mounts

  const deleteItem = (itemId) => {
    // Get the current cart items from local storage
    const existingCartItems = JSON.parse(localStorage.getItem("cart")) || [];
    // Filter out the item with the specified _id
    const updatedCartItems = existingCartItems.filter(item => item._id !== itemId);
    // Save the updated cart items to local storage
    localStorage.setItem("cart", JSON.stringify(updatedCartItems));
  };
   
  const [showPopup, setShowPopup] = useState(false);

  const handleOrderButtonClick = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    // Set showPopup state to false when the pop-up is closed
    setShowPopup(false);
  };
  

  const handleDelete = (item) => {
    deleteItem(item._id);
    // console.log(item._id)
     window.location.reload(); // Reload the page after deletion
  };
  

  return (
    <>
  <div>
      {cartItems.length === 0 ? (
        <section className='emptyCartSect'>
          <div className="cartImgDiv">
            <img src={cartIcon} alt="Empty Cart" className="cart" />
          </div>
          <h2>Cart is empty</h2>
            <p>Browse our categories and discover the best</p>
            <Link>
          <button>Shop Now</button>
            </Link>
        </section>
      ) : (
        <div className="cartAllContain">
          {cartItems.map((item, index) => (
            <section className="fullCart rule" key={index}>
              <div className="itemPic" style={{ backgroundImage: `url(${item.picture})` }}></div>
              <div className="itemDecrip rule">
                <h2><u>{item.name}</u></h2>
                <div className="itemPrice">
                  <p>Price</p>
                  <p>₦ {item.price}</p>
                </div>
                <div className="itemQuant">
                  <p>Quantity</p>
                  <div className="itemAddSub">
                    <img src={minusIcon} onClick={subtract} alt="Minus" className="minus" />
                    {count}
                    <img src={plusIcon} onClick={add} alt="Plus" className="plus" />
                  </div>
                </div>
                <button onClick={() => handleOrderButtonClick()}>
                  <img src={lightCartIcon} alt="Cart" />
                  Order
                </button>
                <button onClick={() => handleDelete(item)}>
                  <img src={deleteIcon} alt="Cart" />
                  Delete
                </button>
              </div>
            </section>
          ))}
        </div>
        )}
          {showPopup && (
        <div className="popup">
            {/* Add your pop-up content here */}
          <form action="">
          <label htmlFor="name"  >Name</label>
          <input type="text" id='name' value={name} onChange={e => setName(e.target.value)} />
          <label htmlFor="phone">Quantity</label>
          <input type="number" id='phone' value={quantity} onChange={e => setQuantity(e.target.value)}/>
          <label htmlFor="email">Email</label>
          <input type="email" id='email' value={email} onChange={e => setEmail(e.target.value)} />
            </form>
          <button onClick={handleClosePopup}>Close</button>
        </div>
      )}
    </div>
    </>
  );
};

export default CartWrapper;
