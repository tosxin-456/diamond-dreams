import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import del from '../../assets/icons/material-symbols-light_delete-outline.svg'

const ManagePost = () => {
  const [blog , setBlogs] = useState([]);
  const history = useNavigate();

  const handleDelete = () => {

  }

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch('https://diamondreams.onrender.com/admin/blog/all');
        if (response.ok) {
          const data = await response.json();
          // console.log(data);
          setBlogs(data);
        } else {
          console.error('Failed to fetch blogs:', response.data);
        }
      } catch (error) {
        console.error('Error fetching blogs:', error);
      }
    };
  
    // Call fetchBlogs function when the component mounts
    fetchBlogs();
  }, []);

  return (
    <>
    <section className="blogSection">
      <h2>Available Blogs</h2>
      <div className="blogContainer">
        {blog.map((blog, index) => (   
          <article className="availBlogs">
            <div className="imgOla" style={{ backgroundImage: `url(${blog.images})` }}></div>
            <div className="kevHart">
              <p>{blog.title}</p>
              <img onClick={handleDelete} src={del} alt="" />
            </div>
          </article>
        ))}
      </div>
    </section>
    </>
  );
}
 
export default ManagePost;