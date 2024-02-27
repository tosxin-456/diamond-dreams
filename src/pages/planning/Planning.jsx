import React, { useState, useRef, useEffect } from 'react';
import SwiperCore from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
SwiperCore.use([Autoplay, Navigation]);

// Social Icons
import addBook from '../../assets/icons/address-book.svg';
import phoneIcon from '../../assets/icons/phone.svg';
import mailIcon from '../../assets/icons/email.svg';
import lightAddBook from '../../assets/icons/book-light.svg';
import lightPhoneIcon from '../../assets/icons/phone-light.svg';
import lightMailIcon from '../../assets/icons/light_email.svg';
import event1 from '../../assets/images/event1.jpeg';
import event2 from '../../assets/images/event2.jpg';
import { useNavigate } from 'react-router-dom';

const PlanWrap = () => {
  const [collection, setCollection] = useState([
    { id: 1, image: event1 },
    { id: 2, image: event2 },
  ]);

  const handleSlide1Change = (direction, swiperRef) => {
    const activeIndex = swiperRef.current.swiper.activeIndex;
    let newIndex = activeIndex;

    if (direction === 'next') {
      newIndex = (newIndex + 1) % collection.length;
    } else if (direction === 'prev') {
      newIndex = (newIndex - 1 + collection.length) % collection.length;
    }

    swiperRef.current.swiper.slideTo(newIndex, 500, false); 
  };
  const collectionSwiperRef = useRef(null);

  const phoneNumber = "+234 7048346350";
  const history = useNavigate();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <section>
        <h2>Elevate Your Celebration With Our Event Planning Services</h2>
        <p>
          At Diamonddreams, we specialize in curating magical and seamless wedding experiences. Our dedicated team of experienced planners is committed to bringing your dream celebration to life, ensuring every detail reflects your unique love story.
        </p>
      </section>
      <section>
        <h2>Our Approach</h2>
        <ul>
          <li>
            <b>Personalized Consultation:</b>
            <p>
              We begin by understanding your vision, preferences, and aspirations, tailoring our services to your individual needs.
            </p>
          </li>
          <li>
            <b>Meticulous Planning:</b>
            <p>
              From venue selection to décor, logistics, and vendor coordination, we meticulously plan every aspect of your event.
            </p>
          </li>
          <li>
            <b>Creative Design:</b>
            <p>
              Our innovative approach and eye for design guarantee a celebration that radiates elegance and sophistication.
            </p>
          </li>
          <li>
            <b>Attention to Detail:</b>
            <p>
              We believe in perfection. No detail is too small; we ensure a flawless and memorable event.
            </p>
          </li>
        </ul>
      </section>
      <section>
        <h2>Services Offered</h2>
        <ul>
          <li>
            <b>Full-Service Planning:</b>
            <p>
              Comprehensive support from inception to execution, covering every aspect of your wedding day.
            </p>
          </li>
          <li>
            <b>Partial Planning:</b>
            <p>
              Assistance with specific elements or coordination during specific phases of your planning journey.
            </p>
          </li>
          <li>
            <b>Day-of Coordination:</b>
            <p>
              Ensuring your celebration runs smoothly on the big day, allowing you to savor every moment stress-free.
            </p>
          </li>
        </ul>
      </section>
      <section>
        <h2>Why Us</h2>
        <ul>
          <li>
            <b>Experience:</b>
            <p>
              Years of expertise in orchestrating weddings, ensuring a stress-free planning process.
            </p>
          </li>
          <li>
            <b>Vendor Network:</b>
            <p>
              Strong relationships with top-tier vendors, ensuring quality and reliability in every service provided.
            </p>
          </li>
          <li>
            <b>Passion for Perfection:</b>
            <p>
              Our passion lies in creating moments that last a lifetime, leaving you and your guests enchanted.
            </p>
          </li>
        </ul>
      </section>
      <section>
        <h2>Some Events We Featured In</h2>
        <div className='collectionSwiper'>
          <Swiper
            ref={collectionSwiperRef}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
          >
            {collection.map((collect) => (
              <SwiperSlide key={collect.id}>
                <img src={collect.image} alt={collect.title} />
                <p>{collect.title}</p>
              </SwiperSlide>
            ))}
          </Swiper>
          <button className="swiper-button-prev" onClick={() => handleSlide1Change('prev', collectionSwiperRef)}></button>
          <button className="swiper-button-next" onClick={() => handleSlide1Change('next', collectionSwiperRef)}></button>
        </div>
      </section>
      <section className="contactLine">
        <h2>Contact us</h2>
        <p>Contact our team to start planning your dream wedding today!</p>
        <div className="contactConTainer">
          {isMobile && (<aside className="socialIne">
            <div className="socialAdd">
              <img src={addBook} alt="Contact" />
              <p>Jos, Plateau State</p>
            </div>
            <div className="socialAdd">
              <img src={phoneIcon} alt="Phone" />
              <p>{phoneNumber}</p>
            </div>
            <div className="socialAdd">
              <img src={mailIcon} alt="Mail" />
              <p>diamonddreams@gmail.com</p>
            </div>
          </aside>)}
          {!isMobile && (<aside className="socialIne">
            <div className="socialAdd">
              <img src={lightAddBook} alt="Contact" />
              <p>Jos, Plateau State</p>
            </div>
            <div className="socialAdd">
              <img src={lightPhoneIcon} alt="Phone" />
              <p>{phoneNumber}</p>
            </div>
            <div className="socialAdd">
              <img src={lightMailIcon} alt="Mail" />
              <p>diamonddreams@gmail.com</p>
            </div>
          </aside>)}
          <form>
            {!isMobile && (<h3>Send us a Message</h3>)}
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
        </div>
      </section>
    </>
  );
}
 
export default PlanWrap;