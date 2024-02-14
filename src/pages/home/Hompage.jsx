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

import academyPic from '../../assets/images/expect.png';
import whiteCouple from '../../assets/images/whiteCouple.jpeg';

// Social Icons
import addBook from '../../assets/icons/address-book.svg';
import phoneIcon from '../../assets/icons/phone.svg';
import mailIcon from '../../assets/icons/email.svg';
import darkLogo from '../../assets/icons/dark-logo.svg';
import lightAcc from '../../assets/icons/light_account.svg';
import facebook from '../../assets/icons/facebook.svg';
import instagram from '../../assets/icons/instagram.svg';
import twitx from '../../assets/icons/twitter.svg';

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
        <section className="academySection">
          <h2>Our Academy</h2>
          <img className='epectPic' src={academyPic} alt="What to Expect" />
          <ol>
            <li>
              <b>Comprehensive Coursework:</b>
              <ul><li>Diverse modules covering event planning, design, bridal fashion, and more.</li></ul>
            </li>
            <li>
              <b>Continuous Support:</b>
              <ul><li>Access to resources and ongoing assistance post-course completion.</li></ul>
            </li>
            <li>
              <b>Expert Guidance:</b>
              <ul><li>Insights and mentorship from industry professionals and seasoned experts.</li></ul>
            </li>
            <li>
              <b>Hands-on Learning:</b>
              <ul><li>Practical experience to apply theoretical knowledge in real-world scenarios.</li></ul>
            </li>
            <li>
              <b>Flexible Learning Modes:</b>
              <ul><li>In-person sessions, online modules, webinars, accommodating various schedules.</li></ul>
            </li>
            <li>
              <b>Networking Opportunities:</b>
              <ul><li>Connect with peers, mentors, and industry leaders, fostering valuable relationships.</li></ul>
            </li>
            <li>
              <b>Certification Programs:</b>
              <ul><li>Recognition of expertise with completion certificates.</li></ul>
            </li>
          </ol>
        </section>
        <section className="faq">
          <h2>Frequently Asked Questions</h2>
          <article>
            <h3>What is the ordering process for wedding dresses or accessories?</h3>
            <ul>
              <li>The ordering process typically involves browsing our collection, selecting desired items, and placing an order either online or in-store.</li>
            </ul>
          </article>
          <article>
            <h3>Do you offer customization or alterations for dresses?</h3>
            <ul>
              <li>Yes, we provide customization and alterations to ensure your dress fits perfectly. Our skilled seamstresses will work with you to achieve your desired look.</li>
            </ul>
          </article>
          <article>
            <h3>What is the timeframe for ordering and receiving wedding attire?</h3>
            <ul>
              <li>The timeframe can vary based on the specific item and alterations required. We recommend ordering your attire at least 6-9 months in advance to allow sufficient time for fittings and alterations.</li>
            </ul>
          </article>
          <article>
            <h3>Can I view and try on dresses or accessories before making a purchase?</h3>
            <ul>
              <li>Yes, we encourage customers to visit our store to view and try on dresses and accessories before making a purchase.</li>
            </ul>
          </article>
        </section>
        <section className="blogSection">
          <h2>Our Blog</h2>
          <div className="blogContainer">
            <article>
              <img src={whiteCouple} alt="Blog Pic" />
              <p>How to Choose the Perfect Wedding Venue</p>
            </article>
            <article>
              <img src={whiteCouple} alt="Blog Pic" />
              <p>Wedding Photography: Posing Ideas for the Perfect Shot</p>
            </article>
          </div>
        </section>
        <section className="contactLine">
          <h2>Drop us a Line</h2>
          <aside className="socialIne">
            <div className="socialAdd">
              <img src={addBook} alt="Contact" />
              <p>Jos, Plateau State</p>
            </div>
            <div className="socialAdd">
              <img src={phoneIcon} alt="Phone" />
              <p>+234 07483463507</p>
            </div>
            <div className="socialAdd">
              <img src={mailIcon} alt="Mail" />
              <p>diamonddreams@gmail.com</p>
            </div>
          </aside>
          <form>
            <label htmlFor="name">Name</label>
            <input type="text" id='name' />
            <label htmlFor="phone">Phone</label>
            <input type="number" id='phone' />
            <label htmlFor="email">Email</label>
            <input type="email" id='email' />
            <label htmlFor="message">Message</label>
            <textarea name="" id="message" cols="20" rows="6"></textarea>
            <button>Send</button>
          </form>
        </section>
        <section className="cta">
          <p>Experience the Elegance of Our Picked Pieces</p>
          <button>Shop Now</button>
        </section>
      </main>
      <footer className='footer'>
        <div className="footerWrap rule">
          <div className="footerLogo">
            <img src={darkLogo} alt="Logo" />
            <h2>Diamonddreams events</h2>
            <p>
              From stunning gowns to captivating accessories, our selection offers both purchasing and rental options, ensuring every bride finds her perfect match.
            </p>
            <div className="footAdmin">
              <img src={lightAcc} alt="Admin" />
              <p>Admin</p>
            </div>
          </div>
          <hr />
          <div className="quickSocial">
            <ul className="quickLinks">
              <li>Quick Links</li>
              <li>About us</li>
              <li>Testimonials</li>
              <li>FAQs</li>
              <li>Shop</li>
            </ul>
            <ul className="socialLiks">
              <li>Follow us</li>
              <li className='socialIcons'>
                <img src={facebook} alt="Facebook" />
                <p>Facebook</p>
              </li>
              <li className='socialIcons'>
                <img src={instagram} alt="Instagram" />
                <p>Instagram</p>
              </li>
              <li className='socialIcons'>
                <img src={twitx} alt="Twitter" />
                <p>Twitter</p>
              </li>
            </ul>
          </div>
          <p className='copyRight'>Copyright. All Rights Reserved</p>
        </div>
      </footer>
    </>
  );
}

export default Home;
