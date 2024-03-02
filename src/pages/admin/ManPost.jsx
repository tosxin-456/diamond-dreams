import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ManagePost = () => {
  const [blog , setBlogs] = useState([]);

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
          <article>
            <div className="imgOla" style={{ backgroundImage: `url(${blog.images})` }}></div>
            <p>{blog.title}</p>
          </article>
        ))}
      </div>
    </section>
    </>
  );
}
 
export default ManagePost;