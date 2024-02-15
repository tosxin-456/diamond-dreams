import React, { useState, useRef } from 'react';
import SwiperCore from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

// Pic Imports
import gown1 from '../../assets/images/gown1.jpeg';
import veil1 from '../../assets/images/veil1.jpeg';
import bouquet1 from '../../assets/images/bouquet1.jpeg';
import gown2 from '../../assets/images/gown2.jpg';
import bracelet from '../../assets/images/bracelet1.jpg';
import bouquet2 from '../../assets/images/bouquet2.jpg';

SwiperCore.use([Autoplay, Navigation]);

const ShopWrap = () => {
  const [collections, setCollections] = useState([
    { id: 1, image: gown1, title: 'Gown' },
    { id: 2, image: gown2, title: 'Lube Gown' },
  ]);

  const [accessory, setAccessory] = useState([
    { id: 1, image: veil1, title: 'Veil' },
    { id: 2, image: bracelet, title: 'Bracelet' },
  ]);

  const [bouquets, setBouquet] = useState([
    { id: 1, image: bouquet1 },
    { id: 2, image: bouquet2 },
  ]);

  const handleSlide1Change = (direction, swiperRef) => {
    const activeIndex = swiperRef.current.swiper.activeIndex;
    let newIndex = activeIndex;

    if (direction === 'next') {
      newIndex = (newIndex + 1) % collections.length;
    } else if (direction === 'prev') {
      newIndex = (newIndex - 1 + collections.length) % collections.length;
    }

    swiperRef.current.swiper.slideTo(newIndex, 500, false); 
  };

  const handleSlide2Change = (direction, swiperRef) => {
    const activeIndex = swiperRef.current.swiper.activeIndex;
    let newIndex = activeIndex;

    if (direction === 'next') {
      newIndex = (newIndex + 1) % accessory.length;
    } else if (direction === 'prev') {
      newIndex = (newIndex - 1 + accessory.length) % accessory.length;
    }

    swiperRef.current.swiper.slideTo(newIndex, 500, false); 
  };

  const handleSlide3Change = (direction, swiperRef) => {
    const activeIndex = swiperRef.current.swiper.activeIndex;
    let newIndex = activeIndex;

    if (direction === 'next') {
      newIndex = (newIndex + 1) % bouquets.length;
    } else if (direction === 'prev') {
      newIndex = (newIndex - 1 + bouquets.length) % bouquets.length;
    }

    swiperRef.current.swiper.slideTo(newIndex, 500, false); 
  };

  const collectionSwiperRef = useRef(null);
  const accessoriesSwiperRef = useRef(null);
  const bouquetSwiperRef = useRef(null);

  return (
    <>
      <section>
        <h2>Our Collections</h2>
        <p>
          We offer a carefully curated collection of wedding dresses and accessories to make your special day truly magical. Explore our diverse range, from timeless classics to on-trend styles, designed to suit every bride's unique vision. Our commitment is to provide a personalized experience, helping you find 'the one' among our stunning gowns and adornments. Celebrate your individuality with our thoughtfully crafted pieces, ensuring you radiate confidence and beauty on your wedding day. At diamonddreams, we believe in making your journey to 'I do' as memorable and enchanting as the day itself.
        </p>
      </section>
      <section>
        <h2>Gowns</h2>
        <div className='collectionSwiper'>
          <Swiper
            ref={collectionSwiperRef}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
          >
            {collections.map((collection) => (
              <SwiperSlide key={collection.id}>
                <img src={collection.image} alt={collection.title} />
                <p>{collection.title}</p>
              </SwiperSlide>
            ))}
          </Swiper>
          <button className="swiper-button-prev" onClick={() => handleSlide1Change('prev', collectionSwiperRef)}></button>
          <button className="swiper-button-next" onClick={() => handleSlide1Change('next', collectionSwiperRef)}></button>
        </div>
      </section>
      <section>
        <h2>Accessories</h2>
        <div className='collectionSwiper'>
          <Swiper
            ref={accessoriesSwiperRef}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
          >
            {accessory.map((accessor) => (
              <SwiperSlide key={accessor.id}>
                <img src={accessor.image} alt={accessor.title} />
                <p>{accessor.title}</p>
              </SwiperSlide>
            ))}
          </Swiper>
          <button className="swiper-button-prev" onClick={() => handleSlide2Change('prev', accessoriesSwiperRef)}></button>
          <button className="swiper-button-next" onClick={() => handleSlide2Change('next', accessoriesSwiperRef)}></button>
        </div>
      </section>
      <section>
        <h2>Bouquets</h2>
        <div className='collectionSwiper'>
          <Swiper
            ref={bouquetSwiperRef}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
          >
            {bouquets.map((bouquet) => (
              <SwiperSlide key={bouquet.id}>
                <img src={bouquet.image} alt={bouquet.title} />
              </SwiperSlide>
            ))}
          </Swiper>
          <button className="swiper-button-prev" onClick={() => handleSlide3Change('prev', bouquetSwiperRef)}></button>
          <button className="swiper-button-next" onClick={() => handleSlide3Change('next', bouquetSwiperRef)}></button>
        </div>
      </section>
      <section className="cta shopCta">
        <p>Experience the Elegance of Our Picked Pieces</p>
        <button>Shop Now</button>
      </section>
    </>
  );
}
 
export default ShopWrap;