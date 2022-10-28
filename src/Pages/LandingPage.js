import Footer from "../Components/Footer";
import { Link } from "react-router-dom";
import "../Styles/LandingPage.css";
export default function LandingPage() {
  return (
    <>
      <div className="gutter" />
      <h4 className="LandingPage-heading">Top brands at best prices for Kids, Womens, Mens</h4>
      <div className="LandingPage-container">
        <div className="Poster-container poster-2">
          <div className="Poster-overlay">
            <Link to="/products/mens">
              <button className="Overlay-button">Shop Now</button>
            </Link>
          </div>
          <img style={{marginLeft:'28%'}}
            className="Poster"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlbrrLmRjxOGY-t1Uke_wT2a80J6Feamxohrqa49keD2YTKgnlL7tZaW0BgLkbK0gQThI&usqp=CAU"
            alt="poster"
          />
        </div>
        
      </div>
   
      <Footer />
    </>
  );
}
