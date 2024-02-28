import enrollIcon from '../../assets/icons/enroll.svg';
import prodIcon from '../../assets/icons/product.svg';
import cartIcon from '../../assets/icons/darkOutCart.svg';
import LikeIcon from '../../assets/icons/Like.svg';
import plusIcon from '../../assets/icons/lightPlus.svg';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <>
      <section className='dashBoardSection'>
        <h2>Hi!</h2>
        <div className="grid-icons">
          <article>
            <Link to='../Gowns'>
              <img src={prodIcon} alt="Product" />
              <p>Total Products</p>
              <span>12</span>
              <button><img src={plusIcon} alt="Plus" />Add new product</button>
            </Link>
          </article>
          <article>
            <Link to='../Pending' onClick={()=>window.alert('Enable Desktop Site to get the complete view')}>
              <img src={enrollIcon} alt="Enrol" />
              <p>Total Enrolment</p>
              <span>3</span>
              <button>View</button>
            </Link>
          </article>
          <article>
            <Link to='../Pending-orders' onClick={()=>window.alert('Enable Desktop Site to get the complete view')}>
              <img src={cartIcon} alt="Orders" />
              <p>Total Orders</p>
              <span>30</span>
              <button>View</button>
            </Link>
          </article>
          <article>
            <img src={LikeIcon} alt="Like" />
            <p>Total Likes</p>
            <span>20</span>
            <button><img src={plusIcon} alt="Plus" /> Add new blog post</button>
          </article>
        </div>
      </section>
    </>
  );
}
 
export default Dashboard;