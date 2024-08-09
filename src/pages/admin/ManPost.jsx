import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import del from '../../assets/icons/material-symbols-light_delete-outline.svg'
import back from '../../assets/icons/back-arrow.svg'

const ManagePost = () => {
  const [blog , setBlogs] = useState([]);
  const history = useNavigate();
  const tosinToken = localStorage.getItem("token");
  const token = JSON.parse(tosinToken);


  const handleDelete = async (itemId) => {
    // 
    try {
      const response = await fetch(`https://diamondreams.onrender.com/admin/blog/${itemId}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await response.json();
      if (response.ok) {
        window.location.reload()
      } else {
        console.error('Failed to submit form data', data);
      }
    } catch (error) {
      console.error('Error submitting form data:', error);
    }
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
      <img src={back} alt="Back" onClick={()=> history('../Blog-options')} />
      <h2>Available Blogs</h2>
      <div className="blogContainer">
        {blog.map((blog, index) => (   
          <article className="availBlogs">
            <div className="imgOla" style={{ backgroundImage: `url(${blog.images})` }}></div>
            <div className="kevHart">
              <p>{blog.title}</p>
              <img onClick={()=>handleDelete(blog._id)} src={del} alt="" />
            </div>
          </article>
        ))}
      </div>
    </section>
    </>
  );
}
 
export default ManagePost;