import edit from '../../assets/icons/editIcon.png';
import blogIcon from '../../assets/icons/carbon_blog (1).svg';
import blog2 from '../../assets/icons/carbon_blog.svg'
import back from '../../assets/icons/back-arrow.svg'

import { useNavigate } from 'react-router-dom';

const ViewBlogs = () => {
  const history = useNavigate();

  return (
    <>
      <img src={back} alt="Back" onClick={()=> history('../Dashboard')} />
      <section className="viewBlogWrap">
        <article onClick={()=>history('../Manage-post')}>
          <img src={blogIcon} alt="Blog" />
          <p>Manage Blogs</p>
        </article>
        <article onClick={()=>history('../Add-post')}>
          <img src={edit} alt="Edit" />
          <p>Add a new blog</p>
        </article>
      </section>
    </>
  );
}
 
export default ViewBlogs;