import { Link } from "react-router-dom";


function BlogCard({ title, description, link, image, handleFooterLink, date }) {

  let introContent = '';

  // Simple approach: first paragraph is intro, rest is main content

  const contentWithoutTags = description.replace(/<[^>]*>/g, ' ');
  const firstParagraphEnd = contentWithoutTags.indexOf('\n\n');
  
  if (firstParagraphEnd > 0) {
    introContent = contentWithoutTags.substring(0, firstParagraphEnd);
  } else {
    // If no clear paragraph break, use the first 150 characters as intro
    introContent = contentWithoutTags.substring(0, 200) + '...';
  }
  return (
 
    <div className="col-12 col-lg-4 col-md-6 mb-4">
      <Link to={link} onClick={handleFooterLink} className="text-white text-decoration-none">
        <div className="card shadow p-3 mb-5 bg-white rounded">
          <img src={image} className="card-img-top" alt={title} style={{"object-fit": "fit", "width": "100%", "height": "15rem" }} />
          <div className="card-body">
            <h5 className="card-title mt-2" style={{"color": "#e12454"}}>{title}</h5>
            <p className="card-text" dangerouslySetInnerHTML={{ __html: introContent }}></p>
          </div>
          <p className="card-text text-black" style={{"font-size": "0.7rem"}} ><em> {date}</em></p>
        </div>
      </Link>
    </div>

  );
}

export default BlogCard;
