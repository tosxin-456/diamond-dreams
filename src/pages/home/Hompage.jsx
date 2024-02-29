import React, { useState, useRef, useEffect } from 'react';
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

import academyPic from '../../assets/icons/expect.svg';

// Social Icons
import addBook from '../../assets/icons/address-book.svg';
import phoneIcon from '../../assets/icons/phone.svg';
import mailIcon from '../../assets/icons/email.svg';
import lightAddBook from '../../assets/icons/book-light.svg';
import lightPhoneIcon from '../../assets/icons/phone-light.svg';
import lightMailIcon from '../../assets/icons/light_email.svg';

import { Navigation, Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

SwiperCore.use([Autoplay, Navigation]);

const Home = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('')
  const [sending, setSending] = useState(false);
  const [blog , setBlogs] = useState([])
  // Function to construct object
const constructFormData = () => {
  return {
    name: name,
    phone: phone,
    email: email,
    message: message
  };
};

useEffect(() => {
  const fetchBlogs = async () => {
    try {
      const response = await fetch('https://diamondreams.onrender.com/admin/blog/all');
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        setBlogs(data);
      } else {
        console.error('Failed to fetch blogs:', response.data);
      }
    } catch (error) {
      console.error('Error fetching blogs:', error);
    }
  };

  // Call fetchBlogs function when the component mounts
  fetchBlogs();
}, []);

  
  
  
  
// Function to handle form submission
const handleSubmit = async (e) => {
  e.preventDefault();
  setSending(true)
  // Construct form data object
  const formData = constructFormData();
  
  try {
    // Perform fetching here, sending formData to the server
    // Example:
    const response = await fetch('https://diamondreams.onrender.com/contact-us', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    });
    
    // Handle response
    // Example:
    if (response.ok) {
      console.log('Form data submitted successfully');
      // Reset form fields if needed
      setName('');
      setPhone('');
      setEmail('');
      setMessage('');
      setSending(false); 
    } else {
      console.error('Failed to submit form data');
    }
  } catch (error) {
    setSending(false); 
    console.error('Error submitting form data:', error);
  }
};
  



  const [collections, setCollections] = useState([
    { id: 1, image: gown, title: 'Gowns' },
    { id: 2, image: books, title: 'Accessories' },
    { id: 3, image: cart, title: 'Bags' },
  ]);

  const [testimony, setTestimony] = useState("Choosing diamonddreams was the best decision we made for our big day. The team's attention to detail and personalized service made the entire process a joy. Emily found her dream dress, and the accessories perfectly complemented our wedding theme. We felt like more than customers; we felt like part of the family. Thank you for helping us create magical memories.'");

  const [couple, setCouple] = useState([
    { id: 1, image: couple4, title: testimony },
    { id: 2, image: couple2, title: testimony },
    { id: 3, image: couple3, title: testimony },
  ]);

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
      <section id='aboutUs' className='AboutSect'>
        <h2>About Us</h2>
        <p>
          Welcome to our wedding hub, where dreams come to life! Explore an exquisite collection of wedding dresses and accessories available for purchase or rent, curated to reflect individual styles and enhance your special day. Our comprehensive event planning services ensure a seamless and unforgettable wedding experience tailored to your unique vision. Additionally, our academy offers expert guidance and courses for aspiring wedding planners, empowering enthusiasts to craft extraordinary celebrations. Join us on this enchanting journey toward your perfect wedding day. Whether shopping for the perfect gown, planning your special day, or seeking to learn more, find everything you need in one place.
        </p>
      </section>
      <section className='OurColLect'>
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
      <section className='WhyChoose'>
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
      <section id='testimonials' className='CouplesSect'>
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
      <section id='faqs' className="faq">
        <h2>Frequently Asked Questions</h2>
        <div className="firstArtSect">
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
        </div>
        <div className="secArtSect">
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
        </div>
      </section>
      <section className="blogSection">
        <h2>Our Blog</h2>
        <div className="blogContainer">
          {blog.map((blog, index) => (
        <Link  to='Blog'>      
       <article key={index}>
      <div className="imgOla" style={{ backgroundImage: `url(${blog.images})` }}></div>
      <p>{blog.title}</p>
    </article>
        </Link>
  ))}
</div>

      </section>
      <section className="contactLine">
        <h2>Drop us a Line</h2>
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
          <form onSubmit={handleSubmit}>
            {!isMobile && (<h3>Send us a Message</h3>)}
          <label htmlFor="name">Name</label>
          <input type="text" id='name' value={name} onChange={e => setName(e.target.value)}  />
          <label htmlFor="phone">Phone</label>
          <input type="number" id='phone' value={phone} onChange={e => setPhone(e.target.value)}  />
          <label htmlFor="email">Email</label>
          <input type="email" id='email' value={email} onChange={e => setEmail(e.target.value)}  />
          <label htmlFor="message">Message</label>
          <textarea name="" id="message" cols="20" rows="6" value={message} onChange={e => setMessage(e.target.value)} ></textarea>
          <button disabled={sending} > {sending ? 'Sending...' : 'Send'}</button>
          </form>
        </div>
      </section>
      <section className="cta homeCta">
        <p>Experience the Elegance of Our Picked Pieces</p>
        <button onClick={() => history('Shop')}>Shop Now</button>
      </section>
    </>
  );
}

export default Home;
