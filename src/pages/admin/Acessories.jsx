import { useRef, useState } from "react";
import SwiperCore from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
// Collection Images
import veil from '../../assets/images/veil1.jpeg';

const AccessoryCollection = () => {
  const [collections, setCollections] = useState([
    { id: 1, image: veil, title: 'Veil' },
  ]);

  const collectionSwiperRef = useRef(null);

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
      <section className='OurColLect'>
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
          <button className="swiper-button-prev" onClick={() => handleSlideChange('prev', collectionSwiperRef)}></button>
          <button className="swiper-button-next" onClick={() => handleSlideChange('next', collectionSwiperRef)}></button>
        </div>
      </section>
    </>
  );
}
 
export default AccessoryCollection;