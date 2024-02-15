import React, { useState, useRef } from 'react';
import SwiperCore from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

SwiperCore.use([Autoplay, Navigation]);

const AcademyWrap = () => {  
  // const [collections, setCollections] = useState([
  //   // { id: 3, image: cart, title: 'Bag' },
  // ]);

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

  return (
    <>
      <section>
        <h2>What is it About?</h2>
        <p>
          At Diamonddreams Academy, we're dedicated to nurturing passion, fostering expertise, and providing a gateway to a fulfilling career or hobby within the dynamic world of weddings. Our academy stands as a comprehensive platform offering diverse educational opportunities, insights, and resources tailored to the ever-evolving landscape of the wedding industry.
        </p>
      </section>
      <section className="academySec">
        <h2>Core Elements</h2>
        <article>
          <h3><b>Courses and Workshops:</b></h3>
          <ul>
            <li>Explore a diverse array of courses covering every facet of weddings, from event planning and design to bridal fashion, floral arrangements, etiquette, and more.</li>
          </ul>
        </article>
        <article>
          <h3><b>Expert Guidance:</b></h3>
          <ul>
            <li>Benefit from the wisdom and expertise of our seasoned professionals and industry leaders who impart invaluable insights and firsthand knowledge gained through years of experience.</li>
          </ul>
        </article>
        <article>
          <h3><b>Skill Development and Hands-on Learning:</b></h3>
          <ul>
            <li>Engage in hands-on learning experiences designed to nurture and enhance your skills, bridging the gap between theoretical knowledge and practical application.</li>
          </ul>
        </article>
        <article>
          <h3><b>Flexible Learning Options:</b></h3>
          <ul>
            <li>Embrace a variety of learning modes, including interactive in-person sessions, comprehensive online modules, engaging webinars, and collaborative discussions, tailored to suit diverse learning preferences and schedules.</li>
          </ul>
        </article>
        <article>
          <h3><b>Networking and Community:</b></h3>
          <ul>
            <li>Connect with a vibrant community of fellow enthusiasts, mentors, and industry experts, fostering valuable connections and relationships that extend beyond the classroom.</li>
          </ul>
        </article>
        <article>
          <h3><b>Certification Programs:</b></h3>
          <ul>
            <li>Upon successful completion of our programs, earn certifications recognizing your dedication, expertise, and readiness to excel in the competitive world of weddings.</li>
          </ul>
        </article>
        <article>
          <h3><b>Ongoing Support and Resources:</b></h3>
          <ul>
            <li>Access to a repository of supplementary resources, tools, and ongoing support to continue your growth even after course completion, ensuring a continuous learning journey.</li>
          </ul>
        </article>
      </section>
      <section>
        <h2>Become one of us</h2>
        <article>
          <div className="oneOfUs"></div>
          <section className='contactLine'>
            <h2>Enroll Now!</h2>
            <form>
              <label htmlFor="name">Name</label>
              <input type="text" id='name' />
              <label htmlFor="phone">Phone</label>
              <input type="number" id='phone' />
              <label htmlFor="email">Email</label>
              <input type="email" id='email' />
              <label htmlFor="Address">Address</label>
              <input type="text" id="Address" />
              <button>Next</button>
            </form>
          </section>
        </article>
      </section>
    </>
  );
}
 
export default AcademyWrap;