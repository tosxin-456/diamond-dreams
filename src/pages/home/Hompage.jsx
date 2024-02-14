import React, { useState, useEffect, useRef } from 'react';
import Navbar from "../../layout/Navbar";
import SwiperCore from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// PIC Imports 
// Collection Images
import gown from '../../assets/images/gown.jpeg';
import books from '../../assets/images/planning.jpeg';
import cart from '../../assets/images/cart-bag.jpeg';

// Couple Images
import couple2 from '../../assets/images/couple2.png';
import couple3 from '../../assets/images/couple3.jpg';
import couple4 from '../../assets/images/couple4.jpg';

import { Navigation, Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

SwiperCore.use([Autoplay, Navigation]);

const Home = () => {
  const [currentHeader, setCurrentHeader] = useState("one");
  const [collections, setCollections] = useState([
    { id: 1, image: gown, title: 'Gown' },
    { id: 2, image: books, title: 'Collection 2' },
    { id: 3, image: cart, title: 'Bag' },
  ]);

  const testimony = useState("Choosing diamonddreams was the best decision we made for our big day. The team's attention to detail and personalized service made the entire process a joy. Emily found her dream dress, and the accessories perfectly complemented our wedding theme. We felt like more than customers; we felt like part of the family. Thank you for helping us create magical memories.'")

  const [couple, setCouple] = useState([
    { id: 1, image: couple4, title: testimony },
    { id: 2, image: couple2, title: testimony },
    { id: 3, image: couple3, title: testimony },
  ]);

  useEffect(() => {
    const headers = ["one", "two", "three"];
    let currentIndex = 0;

    const interval = setInterval(() => {
      currentIndex = (currentIndex + 1) % headers.length;
      setCurrentHeader(headers[currentIndex]);
    }, 5000); 

    return () => clearInterval(interval);
  }, []); 

  const handleSlideChange = (direction, swiperRef) => {
    const activeIndex = swiperRef.current.swiper.activeIndex;
    let newIndex = activeIndex;

    if (direction === 'next') {
      newIndex = (newIndex + 1) % collections.length;
    } else if (direction === 'prev') {
      newIndex = (newIndex - 1 + collections.length) % collections.length;
    }

    swiperRef.current.swiper.slideTo(newIndex, 500, false); 
  };

  const handleCoppleChange = (direction, swiperRef) => {
    const activeIndex = swiperRef.current.swiper.activeIndex;
    let newIndex = activeIndex;

    if (direction === 'next') {
      newIndex = (newIndex + 1) % couple.length;
    } else if (direction === 'prev') {
      newIndex = (newIndex - 1 + couple.length) % couple.length;
    }

    swiperRef.current.swiper.slideTo(newIndex, 500, false); 
  };

  const collectionSwiperRef = useRef(null);
  const coupleSwiperRef = useRef(null);

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
      <main className='rule'>
        <section>
          <h2>About Us</h2>
          <p>
            Welcome to our wedding hub, where dreams come to life! Explore an exquisite collection of wedding dresses and accessories available for purchase or rent, curated to reflect individual styles and enhance your special day. Our comprehensive event planning services ensure a seamless and unforgettable wedding experience tailored to your unique vision. Additionally, our academy offers expert guidance and courses for aspiring wedding planners, empowering enthusiasts to craft extraordinary celebrations. Join us on this enchanting journey toward your perfect wedding day. Whether shopping for the perfect gown, planning your special day, or seeking to learn more, find everything you need in one place.
          </p>
        </section>
        <section>
          <h2>Our Collections</h2>
          <div className='collectionSwiper'>
            <Swiper
              ref={collectionSwiperRef}
              spaceBetween={30}
              pagination={{
                clickable: true,
              }}
              // modules={[Autoplay]}
              // autoplay={{
              //   delay: 3000, 
              //   disableOnInteraction: false, // Allow manual interaction during autoplay
              // }}
            >
              {collections.map((collection) => (
                <SwiperSlide key={collection.id}>
                  <img src={collection.image} alt={collection.title} />
                  <p>{collection.title}</p>
                </SwiperSlide>
              ))}
            </Swiper>
            <button className="swiper-button-prev" onClick={() => handleSlideChange('prev', collectionSwiperRef)}></button>
            <button className="swiper-button-next" onClick={() => handleSlideChange('next', collectionSwiperRef)}></button>
          </div>
        </section>
        <section>
          <h2>Why Choose Us</h2>
          <ul>
            <li>
              <b>Handpicked Elegance: </b>Explore a curated selection of exquisite wedding dresses and accessories, carefully chosen to cater to every bride's unique vision.
            </li>
            <li>
              <b>Personalized Service: </b>Experience a journey guided by a team dedicated to providing unparalleled, personalized service. Your moments with us are crafted to be as memorable as your wedding day.
            </li>
            <li>
              <b>Partner in Your Journey: </b>Beyond products, we are your partners in creating the wedding of your dreams. Your choices with us reflect a commitment to exceptional quality and personalized attention.
            </li>
            <li>
              <b>Seamless Experience: </b>With diamonddreams, you're not just selecting items; you're choosing a seamless journey to your perfect wedding look. Our goal is to make your celebration as unique as your love story.
            </li>
          </ul>
        </section>
        <section>
          <h2>What do our couples say</h2>
          <div className='collectionSwiper'>
            <Swiper
              ref={coupleSwiperRef}
              spaceBetween={30}
              pagination={{
                clickable: true,
              }}
            >
              {couple.map((couples) => (
                <SwiperSlide key={couples.id}>
                  <img src={couples.image} alt={couples.title} />
                  <p>{couples.title}</p>
                </SwiperSlide>
              ))}
            </Swiper>
            <button className="swiper-button-prev" onClick={() => handleCoppleChange('prev', coupleSwiperRef)}></button>
            <button className="swiper-button-next" onClick={() => handleCoppleChange('next', coupleSwiperRef)}></button>
          </div>
        </section>
      </main>
    </>
  );
}

export default Home;
