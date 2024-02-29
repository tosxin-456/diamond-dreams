import React, { useState, useRef, useEffect } from 'react';
import SwiperCore from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
SwiperCore.use([Autoplay, Navigation]);

// Pic Imports
import gown1 from '../../assets/images/gown1.jpeg';
import veil1 from '../../assets/images/veil1.jpeg';
import bouquet1 from '../../assets/images/bouquet1.jpeg';
import gown2 from '../../assets/images/gown2.jpg';
import bracelet from '../../assets/images/bracelet1.jpg';
import bouquet2 from '../../assets/images/bouquet2.jpg';
import ShopPopUp from './ShopPop';


const ShopWrap = () => {
  const [popUp, setPopUp] = useState(false);
  const tosinToken = localStorage.getItem("token");
  const token = JSON.parse(tosinToken);
  
    const [collections, setCollections] = useState([]);
    const [accessories, setAccessories] = useState([]);
    const [bouquets, setBouquets] = useState([]);
  const [products, setFetchedProducts] = useState([]);

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
    const gownsCount = products.filter(product => product.collectionType === 'gowns');
    const accessoriesCount = products.filter(product => product.collectionType === 'accessories');
    const bouquetsCount = products.filter(product => product.collectionType === 'bouqets');
    console.log(bouquetsCount)
    setCollections(gownsCount.map((product, index) => ({
      id: index + 1,
      image: product.picture,
      title: product.name
    })));
  
    setAccessories(accessoriesCount.map((product, index) => ({
      id: index + 1,
      image: product.picture,
      title: product.name
    })));
  
    setBouquets(bouquetsCount.map((product, index) => ({
      id: index + 1,
      image: product.picture,
      title: product.name
    })));
  }, [products]);
  
  

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
      newIndex = (newIndex + 1) % accessories.length;
    } else if (direction === 'prev') {
      newIndex = (newIndex - 1 + accessories.length) % accessories.length;
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
    <div style={{'position': 'relative'}}>
      <section>
        <h2>Our Collections</h2>
        <p>
          We offer a carefully curated collection of wedding dresses and accessories to make your special day truly magical. Explore our diverse range, from timeless classics to on-trend styles, designed to suit every bride's unique vision. Our commitment is to provide a personalized experience, helping you find 'the one' among our stunning gowns and adornments. Celebrate your individuality with our thoughtfully crafted pieces, ensuring you radiate confidence and beauty on your wedding day. At diamonddreams, we believe in making your journey to 'I do' as memorable and enchanting as the day itself.
        </p>
      </section>
      {/* PopUP Section */}
      {popUp && 
        <div className="selectedItem">
          <ShopPopUp setPopUp={setPopUp}/>
        </div>
      }
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
                <img src={collection.image} onClick={()=> setPopUp(true)} alt={collection.title} />
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
            {accessories.map((accessor) => (
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
                <p>{bouquet.title}</p>
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
    </div>
  );
}
 
export default ShopWrap;