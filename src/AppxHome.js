import "./AppxHome.css";
import { ReactTyped } from "react-typed";

const AppxHome = () => {
  return (
    <div className="appx-container">
      <div className="trusted-badge">
        <img src="https://cdn-icons-png.flaticon.com/512/847/847969.png" alt="users" className="icon" />
        <img src="https://cdn-icons-png.flaticon.com/512/847/847969.png" alt="users" className="icon2" />
        <img src="https://cdn-icons-png.flaticon.com/512/847/847969.png" alt="users" className="icon3" />
        <span className="trusted-text">Trusted by 10,000+ creators</span>
      </div>
      <h1 className="main-title">
        We make <br /><span>Websites & Apps</span> <br />for Creators
      </h1>
      <p className="earn-text">
        Earn via ₹ <span>
          <ReactTyped
            strings={["Courses", "Webinar", "Memberships", "E-books", "PaidCommunities", "Merchandise"]}
            typeSpeed={80}
            backSpeed={50}
            loop
          />
        </span>
      </p>
      <div className="buttons">
        <button className="cta-button1">Get Started</button>
        <button className="cta-button1">Learn More</button>
      </div>
      <div className="testimonial-container">
        <div className="testimonial-card">
          <img src="https://cdn.prod.website-files.com/65a21f6c73352e86a33fcd30/66c448cdb7d3d92aa0c4d5a7_1.avif" alt="User" className="user-img1" />
        </div>
        <div className="testimonial-card">
          <img src="https://cdn.prod.website-files.com/65a21f6c73352e86a33fcd30/66c448cd03a59363f7816697_3.avif" alt="User" className="user-img2" />
        </div>
        <div className="testimonial-card">
          <img src="https://cdn.prod.website-files.com/65a21f6c73352e86a33fcd30/66c448cddbbbe4334e2f6d8d_2.avif" alt="User" className="user-img3" />
        </div>
      </div>
    </div>
  );
};

export default AppxHome;
