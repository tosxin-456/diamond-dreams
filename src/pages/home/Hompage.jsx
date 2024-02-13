import React, { useState, useEffect } from 'react';
import Navbar from "../../layout/Navbar";

const Home = () => {
  const [currentHeader, setCurrentHeader] = useState("one");

  useEffect(() => {
    const headers = ["one", "two", "three"];
    let currentIndex = 0;

    const interval = setInterval(() => {
      currentIndex = (currentIndex + 1) % headers.length;
      setCurrentHeader(headers[currentIndex]);
    }, 5000); 

    return () => clearInterval(interval);
  }, []); 

  return (
    <>
      <header className={`homeHeader ${currentHeader}`}>
        <div className="headerContainer">
          <Navbar />
          <div className="landContainer rule">
            {currentHeader === "one" && <p>Add a Touch of Glamour to Your Wedding</p>}
            {currentHeader === "two" && <p>Your gateway to wedding expertise, creativity and professional connections</p>}
            {currentHeader === "three" && <p>Creating seamless, unforgettable moments for your special day</p>}
            <button>Shop Now</button>
          </div>
        </div>
      </header>
    </>
  );
}

export default Home;
