import edit from '../../assets/icons/editIcon.png';
import blogIcon from '../../assets/icons/blogIcon.svg';
import { useNavigate } from 'react-router-dom';

const ViewBlogs = () => {
  const history = useNavigate();

  return (
    <>
      <section className="viewBlogWrap">
        <article onClick={()=>history('../Manage-post')}>
          <img src={blogIcon} alt="Blog" />
          <p>Manage Posts</p>
        </article>
        <article onClick={()=>history('../Add-post')}>
          <img src={edit} alt="Edit" />
          <p>Add new post</p>
        </article>
      </section>
    </>
  );
}
 
export default ViewBlogs;