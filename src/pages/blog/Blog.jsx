import { useEffect, useState } from 'react';
import likeIcon from '../../assets/icons/Like.svg'
import profile from '../../assets/images/person1.jpeg'

const BlogWrap = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [comment, setComment] = useState('');
  const [posting, setPosting] = useState(false);
  const [blogs , setBlogs] = useState([])
  const [selectedBlogComments, setSelectedBlogComments] = useState([]);
  const constructFormData = () => {
    return {
      name: name,
      email: email,
      comment: comment
    };
  };

  


  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch blogs
        const blogsResponse = await fetch("https://diamondreams.onrender.com/admin/blog/all");
        const blogsData = await blogsResponse.json();
        setBlogs(blogsData);
        console.log(blogsData)
        // If no blogs are available, select the first one
        if (blogsData.length === 0) {
          handleBlogSelection(0);
        } else {
          // Fetch comments for the initially displaying blog
          const initialBlogId = blogsData[0]._id; // Assuming _id is the unique identifier for blogs
          const commentsResponse = await fetch(`https://diamondreams.onrender.com/comment/${initialBlogId}/all`);
          const commentsData = await commentsResponse.json();
          setSelectedBlogComments(commentsData);
        }
      } catch (error) {
        console.log(error);
      }
    };
  
    fetchData(); // Call the function to fetch blogs and comments when the component mounts
  }, []);
  
  


  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setPosting(true)
    // Construct form data object
    const formData = constructFormData();
    
    try {
      const response = await fetch(`https://diamondreams.onrender.com/comment/${blogs[0]._id}/new`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      if (response.ok) {
        // // Reload the page
        window.location.reload();
        console.log('Form data submitted successfully');
        setName('');
        setEmail('');
        setComment('');
        setPosting(false); 
      } else {
        console.error('Failed to submit form data');
      }
    } catch (error) {
      setPosting(false); 
      console.error('Error submitting form data:', error);
    }
  };

const handleBlogSelection = async (index) => {
  // Swap the selected blog with the initially displaying blog
  const newBlogs = [...blogs];
  const temp = newBlogs[0];
  newBlogs[0] = newBlogs[index];
  newBlogs[index] = temp;
  setBlogs(newBlogs);

  // Fetch comments for the selected blog
  try {
    const selectedBlogId = newBlogs[0]._id; // Assuming _id is the unique identifier for blogs
    const response = await fetch(`https://diamondreams.onrender.com/comment/${selectedBlogId}/all`);
    const data = await response.json();
    setSelectedBlogComments(data); // Set comments for the selected blog
  } catch (error) {
    console.log(error);
  }
};

 


  return (
    <>
     {blogs && blogs.length > 0 && (
  <>
    {/* Display the first blog separately */}
    <section className="blogSectionOne">
      <h2>{blogs[0].title}</h2>
      <p id="date">{blogs[0].fullDate} <span>COMMENTS</span></p>
      <div className="author">
      <div className="authorPic" style={{ 
  backgroundImage: blogs[0].profileImage ? `url(${blogs[0].profileImage})` : `url(${profile})` 
}}
></div>
        <p>By {blogs[0].sender}</p>
      </div>
      <article>
        <div className="blogPic" style={{ backgroundImage: `url(${blogs[0].images})` }} >
        </div>
        <p>
          {blogs[0].body}
        </p>
        {/* <div className="likDiv">
          <img src={likeIcon} alt="Likes" />
          <span>210 likes</span>
        </div> */}
      </article>
    </section>
       
      {/* Display comments for the selected blog */}
      <section className='CommSect'>
        <h2>Comments</h2>
        {selectedBlogComments.map((comment, index) => (
          <article key={index}>
            <h3>{comment.name}</h3>
            <p>{comment.comment}</p>
            <p className='p2'>{comment.fullDate}</p>
            {/* <p className='p3'>Add a comment</p> */}
          </article>
        ))}
          </section>
     <section className='contactLine'>
        <h2>Add a Comment</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name</label>
          <input type="text" id='name' value={name} onChange={(e)=>setName(e.target.value)}  />
          <label htmlFor="email">Email</label>
          <input type="email" id='email' value ={email} onChange={(e)=>setEmail(e.target.value)} />
          <label htmlFor="message">Comment</label>
          <textarea name="" id="message" cols="20" rows="4"  value ={comment} onChange={(e)=>setComment(e.target.value)}></textarea>
          <button disabled={posting}>{posting? 'Posting...' : 'Post'}</button>
        </form>
          </section>
          
    {/* Display other blogs */}
    <section className="blogSectionOne">
      <h2>Other Blogs:</h2>
      {blogs.slice(1).map((blog, index) => (
        <article className='relateBlog' key={index} onClick={() => handleBlogSelection(index + 1)} >
          <div className="relatedPics" style={{backgroundImage: `url(${blog.images})`,  cursor: 'pointer' }}></div>
          <div className="relateAbout">
            <p><u>{blog.title}</u></p>
            <span>{blog.fullDate}</span>
          </div>
        </article>
      ))}
    </section>
  </>
)}


    </>
  );
}

 
export default BlogWrap;