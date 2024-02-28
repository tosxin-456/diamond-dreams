import { useState } from 'react';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';



const AcademyWrap = () => {
  const [swiper, setSwiper] = useState();

  const handleSlideChange = (e) => {
    e.preventDefault();
    swiper.slideNext();
  }

  const handlePrevClick = () => {
    if (swiper && swiper.activeIndex > 0) {
      swiper.slidePrev();
    }
  };
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [age, setAge] = useState('');
  const [expectation, setExpectation] = useState('');
  const [maritalStatus, setMaritalStatus] = useState('')
  const [experienceLevel, setExperienceLevel,] = useState('')
  const [submitting , setSubmitting] = useState(false)

  const constructFormData = () => {
    return {
      name: name,
      phone: phone,
      email: email,
      address: address,
      age: age,
      maritalStatus: maritalStatus,
      experienceLevel: experienceLevel,
      expectation:expectation
    };
  };
  
  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true)
    const formData = constructFormData();
    console.log(formData)
    try {
      // Perform fetching here, sending formData to the server
      // Example:
      const response = await fetch('https://diamondreams.onrender.com/academy', {
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
        setName('');
        setPhone('');
        setEmail('');
        setAddress('');
        setAge('');
        setMaritalStatus('');
        setExperienceLevel('');
        setExpectation('')
  
      } else {
        console.error('Failed to submit form data');
      }
    } catch (error) {
      console.error('Error submitting form data:', error);
    }
  };


  const handleMaritalStatusChange = (e) => {
    setMaritalStatus(e.target.value);
  };

  const handleExperienceChange = (e) => {
    setExperienceLevel(e.target.value);
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
        <article className='acadFormSwiPer'>
          <div className="oneOfUs"></div>
          <section className='contactLine'>
            <h2>Enroll Now!</h2>
            <Swiper
              modules={[Navigation, Pagination]}
              spaceBetween={50}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
              onSwiper={(instance) => setSwiper(instance)}
            >
              <form onSubmit={handleSubmit}>
                <SwiperSlide>
                  <div className="form-fields">
                    <label htmlFor="name">Name</label>
                    <input type="text" id='name'value={name} onChange={e => setName(e.target.value)} />
                    <label htmlFor="phone">Phone</label>
                    <input type="number" id='phone' value={phone} onChange={e => setPhone(e.target.value)} />
                    <label htmlFor="email">Email</label>
                    <input type="email" id='email' value={email} onChange={e => setEmail(e.target.value)} />
                    <label htmlFor="Address">Address</label>
                    <input type="text" id="Address" value={address} onChange={e => setAddress(e.target.value)} />
                    <button className="swiper-button-next" onClick={handleSlideChange}>Next</button>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="form-fields">
                    <label htmlFor="age">Age</label>
                    <input type="text" id='age' value={age} onChange={e => setAge(e.target.value)} />
                    <label htmlFor="marital">Marital Status</label>
                    <div className="radioGroup">
                      <input type="radio" name="Marital Status" id="single" value="Single" checked={maritalStatus === 'Single'} onChange={handleMaritalStatusChange} />
                      <label htmlFor="single">Single</label>
                      <input type="radio" name="Marital Status" id="married" value="Married" checked={maritalStatus === 'Married'} onChange={handleMaritalStatusChange} />
                      <label htmlFor="married">Married</label>
                    </div>
                    <label htmlFor="experience">Experience Level</label>
                    <div className="radioGroup">
                    <input type="radio" name="Experience Level" id="beginner" value="Beginner" checked={experienceLevel === 'Beginner'} onChange={handleExperienceChange}/>
                      <label htmlFor="beginner">Beginner</label>
                      <input type="radio" name="Experience Level" id="Intermediate" value="Intermediate" checked={experienceLevel === 'Intermediate'} onChange={handleExperienceChange}/>
                      <label htmlFor="intermediate">Intermediate</label>
                    </div>
                    <label htmlFor="expectation">Expectation</label>
                    <input type="text" id='expectation' value={expectation} onChange={e=>setExpectation(e.target.value)}/>
                    <div className="butSwipNAv">
                      <button onClick={handlePrevClick}>Prev</button>
                      <button disabled={submitting} >{submitting? 'Posting...' : 'Done'}</button>
                    </div>
                  </div>
                </SwiperSlide>
              </form>
            </Swiper>
          </section>
        </article>
      </section>
    </>
  );
}
 
export default AcademyWrap;