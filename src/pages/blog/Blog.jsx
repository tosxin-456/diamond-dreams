import likeIcon from '../../assets/icons/Like.svg'

const BlogWrap = () => {
  return (
    <>
      <section className="blogSectionOne">
        <h2>How to Choose the Perfect Wedding Venue</h2>
        <p id="date">December 16, 2023 <span>COMMENTS</span></p>
        <div className="author">
          <div className="authorPic"></div>
          <p>By Sonia Ubunena</p>
        </div>
        <article>
          <div className="blogPic"></div>
          <p>
            We offer a carefully curated collection of wedding dresses and accessories to make your special day truly magical. Explore our diverse range, from timeless classics to on-trend styles, designed to suit every bride's unique vision. Our commitment is to provide a personalized experience, helping you find 'the one' among our stunning gowns and adornments. Celebrate your individuality with our thoughtfully crafted pieces, ensuring you radiate confidence and beauty on your wedding day. At diamonddreams, we believe in making your journey to 'I do' as memorable and enchanting as the day itself.
          </p>
          <div className="likDiv">
            <img src={likeIcon} alt="Likes" />
            <span>210 likes</span>
          </div>
        </article>
      </section>
      <section className="blogSectionOne">
        <h2>Related:</h2>
        <div className="relateArtiCles">
          <article className='relateBlog'>
            <div className="relatedPics"></div>
            <div className="relateAbout">
              <p><u>Choosing Wedding Colors: Trends, Meanings, and Combinations</u></p>
              <span>December 6, 2023</span>
            </div>
          </article>
          <article className='relateBlog'>
            <div className="relatedPics"></div>
            <div className="relateAbout">
              <p><u>Choosing Wedding Colors: Trends, Meanings, and Combinations</u></p>
              <span>December 6, 2023</span>
            </div>
          </article>
          <article className='relateBlog'>
            <div className="relatedPics"></div>
            <div className="relateAbout">
              <p><u>Choosing Wedding Colors: Trends, Meanings, and Combinations</u></p>
              <span>December 6, 2023</span>
            </div>
          </article>
        </div>
      </section>
      <section className='contactLine'>
        <h2>Leave a Reply</h2>
        <form className='formOne'>
          <div className="replyWrap">
            <label htmlFor="name">Name</label>
            <input type="text" id='name' />
            <label htmlFor="email">Email</label>
            <input type="email" id='email' />
            <label htmlFor="message">Comment</label>
            <textarea name="" id="message" cols="20" rows="4"></textarea>
            <button>Post</button>
          </div>
        </form>
      </section>
      <section className='CommSect'>
        <h2>Comments</h2>
        <article>
          <h3>Chioma</h3>
          <p>
            “Thank you for these tips! We're torn between an outdoor garden venue and a historic mansion. Any advice on weighing our options?
          </p>
          <p className='p2'>December 16, 2023 At 12:00Pm</p>
          <p className='p3'>Add a comment</p>
        </article>
      </section>
    </>
  );
}
 
export default BlogWrap;