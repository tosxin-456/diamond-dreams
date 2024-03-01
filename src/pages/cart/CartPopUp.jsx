import { useEffect, useState } from "react";
import { PuffLoader } from "react-spinners";

const CartPop = ({ isLoading, setIsLoading }) => {
  const [spinnerColor, setSpinnerColor] = useState("red");

  useEffect(() => {
    const intervalId = setInterval(() => {
      // Generating a random color
      const colors = ["red", "blue", "green", "yellow", "orange", "purple"]; // Add more colors as needed
      const randomColor = colors[Math.floor(Math.random() * colors.length)];
      setSpinnerColor(randomColor);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const handleContinue = () => {
    setIsLoading(true);
  }

  return (
    <>
      {isLoading && <PuffLoader size={60} color={spinnerColor} />}
      {!isLoading && <div className="cartPopUpWrap">
        <img src="" alt="" />
        <div className="cartPopDetails">
          <form action="">
            <p>Please confirm the following...</p>
            <input type="number" placeholder="Quantity of Item" id="" />
            <input type="email" placeholder="Your email address" id="" />
            <div className="popUpRadGroup">
              <div className="flexRad">
                <label htmlFor="Buy">Buy</label>
                <input type="radio" name="Purchase-type" id="Buy" value='Buy' />
              </div>
              <div className="flexRad">
                <label htmlFor="Rent">Rent</label>
                <input type="radio" name="Purchase-type" id="Rent" value='Rent' />
              </div>
            </div>
            <button onClick={handleContinue}>Continue</button>
          </form>
        </div>
      </div>}
    </>
  );
}
 
export default CartPop;