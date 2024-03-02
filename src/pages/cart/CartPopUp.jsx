import { useEffect, useState } from "react";
import { PuffLoader } from "react-spinners";

const CartPop = ({ isLoading, setIsLoading, itemId, Img, qty }) => {
  const [spinnerColor, setSpinnerColor] = useState("red");
  const [email, setEmail] = useState('');
  const [quantity, setQuantity] = useState(qty.toString()); // Initialize with qty
  const [purchaseType, setPurchaseType] = useState('Buy');
  const [errorMssg, setErrMssg] = useState('');
  
  useEffect(() => {
    const intervalId = setInterval(() => {
      const colors = ["#5A0001", "blue", "green", "yellow", "orange", "purple"];
      const randomColor = colors[Math.floor(Math.random() * colors.length)];
      setSpinnerColor(randomColor);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);
  // console.log(itemId)
  const handleContinue = async (e) => {
    e.preventDefault();
    setIsLoading(true);
  
    try {
      // Ensure quantity is not empty or whitespace
      if (!quantity.trim()) {
        setIsLoading(false);
        setErrMssg('Quantity cannot be empty');
        return;
      }
  
      const formData = {
        email: email,
        purchaseType: purchaseType,
        quantity: quantity.trim() // Trim whitespace from quantity
      };
  
      const response = await fetch(`https://diamondreams.onrender.com/shop/${itemId}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json' // Specify content type
        },
        body: JSON.stringify(formData)
      });
  
      const data = await response.json();
      if (response.ok) {
        console.log('Shop uploaded successfully!', data);
        setErrMssg('');
        const authorizationUrl = data
        window.location.href = authorizationUrl;
        const existingCartItems = JSON.parse(localStorage.getItem("cart")) || [];
        // Filter out the item with the specified _id
        const updatedCartItems = existingCartItems.filter(item => item._id !== itemId);
        // Save the updated cart items to local storage
        localStorage.setItem("cart", JSON.stringify(updatedCartItems));

      } else {
        setIsLoading(false);
        console.log('Shop upload failed', data);
        setErrMssg(data.error || 'Failed to buy item, check your email address');
      }
    } catch (error) {
      setIsLoading(false);
      console.log('Error:', error);
      setErrMssg('An error occurred while processing your request');
    }
  };
  

  return (
    <>
      {isLoading && <PuffLoader size={60} color={spinnerColor} />}
      {!isLoading && (
        <div className="cartPopUpWrap">
          <img src={Img} alt="" />
          <div className="cartPopDetails">
            <form>
              <p>Please confirm the following...</p>
              <input
                type="number"
                placeholder="Quantity of Item"
                readOnly
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
              />
              <input
                type="email"
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <div className="popUpRadGroup">
                <div className="flexRad">
                  <label htmlFor="Buy">Buy</label>
                  <input
                    type="radio"
                    name="Purchase-type"
                    id="Buy"
                    checked={purchaseType === 'Buy'}
                    onChange={() => setPurchaseType('Buy')}
                  />
                </div>
                <div className="flexRad">
                  <label htmlFor="Rent">Rent</label>
                  <input
                    type="radio"
                    name="Purchase-type"
                    id="Rent"
                    checked={purchaseType === 'Rent'}
                    onChange={() => setPurchaseType('Rent')}
                  />
                </div>
              </div>
              <p id='errorMessage' style={{ textAlign: 'center' }}>{errorMssg}</p>
              <button onClick={handleContinue}>Continue</button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default CartPop;
