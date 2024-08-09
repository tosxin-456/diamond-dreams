// Social Icons
import addBook from '../../assets/icons/address-book.svg';
import phoneIcon from '../../assets/icons/phone.svg';
import mailIcon from '../../assets/icons/email.svg';
import lightAddBook from '../../assets/icons/book-light.svg';
import lightPhoneIcon from '../../assets/icons/phone-light.svg';
import lightMailIcon from '../../assets/icons/light_email.svg';
import { useEffect, useState } from 'react';





const ContactWrap = () => {
  const [isMobile, setIsMobile] = useState(false);
  const phoneNumber = "+234 8037038662";

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

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('')
  const [sending, setSending] = useState(false);
const constructFormData = () => {
  return {
    name: name,
    phone: phone,
    email: email,
    message: message
  };
};

const handleSubmit = async (e) => {
  e.preventDefault();
  setSending(true)
  const formData = constructFormData();
  
  try {
    const response = await fetch('https://diamondreams.onrender.com/contact-us', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    });
    
    if (response.ok) {
      console.log('Form data submitted successfully');
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
  return (
    <>
      <section className="conSect">
        <h2>Contact us</h2>
        <p>
          Step into a world of bridal elegance at diamonddreams, where we offer
          a carefully curated collection of wedding dresses and accessories to
          make your special day truly magical. Explore our diverse range, from
          timeless classics to on-trend styles, designed to suit every bride's
          unique vision. Our commitment is to provide a personalized experience,
          helping you find 'the one' among our stunning gowns and adornments.
          Celebrate your individuality with our thoughtfully crafted pieces,
          ensuring you radiate confidence and beauty on your wedding day. At
          diamonddreams, we believe in making your journey to 'I do' as
          memorable and enchanting as the day itself.Step into a world of bridal
          elegance at diamonddreams, where we offer a carefully curated
          collection of wedding dresses and accessories to make your special day
          truly magical. Explore our diverse range, from timeless classics to
          on-trend styles, designed to suit every bride's unique vision.
        </p>
      </section>
      <section className="contactLine">
        {isMobile && <h2>Send us a Message</h2>}
        <div className="contactConTainer">
          {isMobile && (
            <aside className="socialIne">
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
                <p>diamondreamsevents@gmail.com</p>
              </div>
            </aside>
          )}
          {!isMobile && (
            <aside className="socialIne">
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
                <p>diamondreamsevents@gmail.com</p>
              </div>
            </aside>
          )}
          <form onSubmit={handleSubmit}>
            {!isMobile && <h3>Send us a Message</h3>}
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <label htmlFor="phone">Phone</label>
            <input
              type="number"
              id="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="message">Message</label>
            <textarea
              name=""
              id="message"
              cols="20"
              rows="6"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
            <button disabled={sending}>
              {sending ? "Sending..." : "Send"}
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
 
export default ContactWrap;