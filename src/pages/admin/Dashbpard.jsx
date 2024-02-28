import enrollIcon from '../../assets/icons/enroll.svg';
import prodIcon from '../../assets/icons/product.svg';
import cartIcon from '../../assets/icons/darkOutCart.svg';
import LikeIcon from '../../assets/icons/Like.svg';
import plusIcon from '../../assets/icons/lightPlus.svg';

const Dashboard = () => {
  return (
    <>
      <section className='dashBoardSection'>
        <h2>Hi!</h2>
        <div className="grid-icons">
          <article>
            <img src={prodIcon} alt="Enroll" />
            <p>Total Products</p>
            <span>12</span>
            <button><img src={plusIcon} alt="Plus" />Add new product</button>
          </article>
          <article>
            <img src={enrollIcon} alt="Enrol" />
            <p>Total Enrolment</p>
            <span>3</span>
            <button>View</button>
          </article>
          <article>
            <img src={cartIcon} alt="Orders" />
            <p>Total Orders</p>
            <span>30</span>
            <button>View</button>
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