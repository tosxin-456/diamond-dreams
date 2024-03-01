import { NavLink, Outlet, useLocation, useNavigate } from "react-router-dom";
import back from '../assets/icons/back-arrow.svg'
import plusIcon from '../assets/icons/lightPlus.svg'
import { useEffect, useState } from "react";

const ProductWrapper = () => {
  const history = useNavigate();
  const location = useLocation();
  const tosinToken = localStorage.getItem("token");
  const token = JSON.parse(tosinToken);
  const [products , setProducts] = useState([])

  

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
        setProducts(productData);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, [token]);
   
  const gownsCount = products.filter(products => products.collectionType === 'gowns').length
  const accessoriesCount = products.filter(products => products.collectionType === 'accessories').length
  const bouqetCount = products.filter(products => products.collectionType === 'bouqets').length
  
  //  const pendingCount = enrollments.filter(enroll => !enroll.accepted).length;


  return (
    <>
      <img src={back} alt="Back" onClick={()=> history('Dashboard')} />
      <nav className="btmNav">
        <h1>All products</h1>
        <button onClick={()=> history('New-product')}><img src={plusIcon} alt="Plus" /> New product</button>
      </nav>
      <nav className="prodNav">
        <ul className="topNav rule">
          <li>
            <NavLink to='Gowns'>Gowns <span>({ gownsCount})</span></NavLink>
          </li>
          <li>
            <NavLink to='Accessory'>Accessories <span>({accessoriesCount })</span></NavLink>
          </li>
          <li>
            <NavLink to='Bouquet'>Bouquets <span>({bouqetCount})</span></NavLink>
          </li>
        </ul>
      </nav>
      <Outlet/>
    </>
  );
}
 
export default ProductWrapper;