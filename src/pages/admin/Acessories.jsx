import { useEffect, useRef, useState } from "react";
import SwiperCore from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
// Collection Images
import veil from '../../assets/images/veil1.jpeg';
const AccessoryCollection = () => {
  const tosinToken = localStorage.getItem("token");
  const token = JSON.parse(tosinToken);
  const [fetchedProducts, setFetchedProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://diamondreams.onrender.com/product/all", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });
        const productData = await response.json();
        setFetchedProducts(productData);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, [token]);

  useEffect(() => {
    if (fetchedProducts.length > 0) {
      // Filter products by collectionType
      const filtered = fetchedProducts.filter(product => product.collectionType === 'accessories');
      setFilteredProducts(filtered);
    }
  }, [fetchedProducts]);

  const collectionSwiperRef = useRef(null);

  const handleSlideChange = (direction, swiperRef) => {
    const activeIndex = swiperRef.current.swiper.activeIndex;
    let newIndex = activeIndex;

    if (direction === 'next') {
      newIndex = (newIndex + 1) % filteredProducts.length;
    } else if (direction === 'prev') {
      newIndex = (newIndex - 1 + filteredProducts.length) % filteredProducts.length;
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
            {filteredProducts.map((product, index) => (
              <SwiperSlide key={index}> 
                <img src={product.picture} alt={product.name} />
                <p>{product.name}</p>
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