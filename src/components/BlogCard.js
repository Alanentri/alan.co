import React from "react"
import { Link } from "react-router-dom";

const BlogCard = () => {
  return (
    <>
    <div className="col-3">
      <div className="blog-card">
        <div className="card-image">
          <img src="images/blog-1.jpg" className="img-fluid" alt="blog"  />
        </div>
        <div className="blog-content">
          <p className="date">1 Dec,  2022</p>
          <h5 className="title">A Beautiful Sunday Morning Renaissance</h5>
          <p className="desc">
            Your're Only Good AS YOur Last Collection,Which is An
             Enormous Pressure.I ThinK There is Something About...
          </p>
          <Link to="/" className="button">Read More</Link>
        </div>
      </div>
    </div>
    <div className="col-3">
      <div className="blog-card">
        <div className="card-image">
          <img src="images/blog-2.jpg" className="img-fluid" alt="blog"  />
        </div>
        <div className="blog-content">
          <p className="date">1 Dec,  2022</p>
          <h5 className="title">Sed Ut Perspiciatis Unde <br /> Omnins</h5>
          <p className="desc">To Enjoy Alternately The Sight Of Their Distress. He Realy
          shouted With pleasure; And,Shaking Monsieur Du Bois...
          </p>
          <Link to="/" className="button">Read More</Link>
        </div>
      </div>
    </div>
    <div className="col-3">
      <div className="blog-card">
        <div className="card-image">
          <img src="images/blog-3.jpg" className="img-fluid" alt="blog"  />
        </div>
        <div className="blog-content">
          <p className="date">1 Dec,  2022</p>
          <h5 className="title">Vitae Magnis Fusce Laoreet Porttitor..</h5>
          <p className="desc">
            Your're Only Good AS YOur Last Collection,Which is An
             Enormous Pressure.I ThinK There is Something About...
          </p>
          <Link to="/" className="button">Read More</Link>
        </div>
      </div>
    </div>
    <div className="col-3">
      <div className="blog-card">
        <div className="card-image">
          <img src="images/blog-4.jpeg" className="img-fluid" alt="blog"  />
        </div>
        <div className="blog-content">
          <p className="date">1 Dec,  2022</p>
          <h5 className="title">Urna Pretium Elit Mauris cursus curabitu</h5>
          <p className="desc">
              Your're Only Good AS YOur Last Collection,Which is An
              Enormous Pressure.I Think There is Something About...
          </p>
          <Link to="/" className="button">Read More</Link>
        </div>
      </div>
    </div>
    </>
    
  )
}

export default BlogCard;