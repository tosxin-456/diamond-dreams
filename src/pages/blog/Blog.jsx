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
    </>
  );
}
 
export default BlogWrap;