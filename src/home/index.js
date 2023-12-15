import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import "./home.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useSelector } from "react-redux";

function Home() {
  let navigate = useNavigate();
  var account = useSelector((state) => state.accountReducer.account);

  const routeToSearch = () => {
    let path = "/FoodFinder/search";
    navigate(path);
  }

  const routeToLogin = () => {
    let path = "/FoodFinder/login";
    navigate(path);
  }

  return (
    <div className="ed-mg-t">
      <div id="carouselFoodImages" class="carousel slide" data-bs-ride="true">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselImageIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselImageIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselImageIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img width="600px" height="600px" src={"https://res.cloudinary.com/drmzaqhgv/image/upload/v1702240165/American-food-in-Canada_grwfll.jpg"} className="d-block w-100" alt="American Food"/>
          </div>
          <div className="carousel-item">
            <img width="600px" height="600px" src={"https://res.cloudinary.com/drmzaqhgv/image/upload/v1702240239/Chinise-food_qworfl.jpg"} className="d-block w-100" alt="Chinese Food"/>
          </div>
          <div className="carousel-item">
            <img width="600px" height="600px" src={"https://res.cloudinary.com/drmzaqhgv/image/upload/v1702240291/20123-Aladdin-Google-Food-2020-1080x675_xazndj.jpg"} className="d-block w-100" alt="Mediterranean Food"/>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselFoodImages" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselFoodImages" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <div className="float-center d-flex">
        <h1 className="bg-c">Discover your next meal with FoodFinder!</h1>
      </div>
      <div className="d-flex align-items-stretch search-bar">
        <div style={{ margin: "0 auto", display: "flex" }}>
          {account._id ? (
            <button className="btn suppose btn-danger home-search-btn searchButton" onClick={routeToSearch}>
              Search!
              <FaSearch className="search-icon-spacing"/>
            </button>
          ) : (
            <button className="btn suppose btn-danger home-search-btn searchButton" style={{marginBottom: "12vh"}} onClick={routeToLogin}>
              Log In
            </button>
          )}
        </div>
      </div>
      {account._id && (
        <>
          <h1 className="popular-header">Check out this month's most popular restaurants!</h1>
          <div class="container" style={{ paddingBottom: "100px" }}>
            <div class="card-container">
              <div class="card">
                <img src={"https://s3-media3.fl.yelpcdn.com/bphoto/y-_CvQAfsT9LFlS72W2wmw/o.jpg"} className="card-img-top" alt="Card"/>
                <div class="card-body">
                  <h5 class="card-title">The Salty Pig</h5>
                  <p class="card-text">The Salty Pig serves charcuterie boards made with hand selected meats and cheeses.</p>
                  <Link class="btn suppose" to={"/FoodFinder/details/t_FFcwUutj9mIYKGw_gHsQ"}>Go to Restaurant</Link>
                </div>
              </div>
              <div class="card">
                <img src={"https://s3-media1.fl.yelpcdn.com/bphoto/MqbmG0bK1miBp-tRXAWwOQ/o.jpg"} className="card-img-top" alt="Card"/>
                <div class="card-body">
                  <h5 class="card-title">Gigi</h5>
                  <p class="card-text">Gigi's is a cozy neighborhood restaurant serving authentic, homemade Italian food.</p>
                  <Link class="btn suppose" to={"/FoodFinder/details/SFC_69nOYtVGvwneRcXJTg"}>Go to Restaurant</Link>
                </div>
              </div>
              <div class="card">
                <img src={"https://s3-media4.fl.yelpcdn.com/bphoto/9-iP3FjGWgo3gwDZPcoT5w/o.jpg"} className="card-img-top" alt="Card"/>
                <div class="card-body">
                  <h5 class="card-title">JiangNan Boston</h5>
                  <p class="card-text">JiangNan specializes in delicacies dedicated to the southern east costal region of China.</p>
                  <Link class="btn suppose" to={"/FoodFinder/details/GCX6ycKIyIv4xNu_FuX1JA"}>Go to Restaurant</Link>
                </div>
              </div>
              <div class="card">
                <img src={"https://s3-media3.fl.yelpcdn.com/bphoto/vcblCw2jwRX9UPle3s_cZw/o.jpg"} className="card-img-top" alt="Card"/>
                <div class="card-body">
                  <h5 class="card-title">Krasi</h5>
                  <p class="card-text">Krasi is love. Krasi is life. Krasi means wine, literally. Krasi is Greek, differently.</p>
                  <Link class="btn suppose" to={"/FoodFinder/details/mnFhrH1Fi5GoSuV-5gVpnA"}>Go to Restaurant</Link>
                </div>
              </div>
              <div class="card">
                <img src={"https://s3-media1.fl.yelpcdn.com/bphoto/QCOjI06HIhT84vxJ8bF0gw/o.jpg"} className="card-img-top" alt="Card"/>
                <div class="card-body">
                  <h5 class="card-title">Anoush'ella</h5>
                  <p class="card-text">Come to Anoush'ella for our irresistible Eastern Mediterranean street food!</p>
                  <Link class="btn suppose" to={"/FoodFinder/details/_rFGIsI4O_15Cr5P6zni1w"}>Go to Restaurant</Link>
                </div>
              </div>
              <div class="card">
                <img src={"https://s3-media2.fl.yelpcdn.com/bphoto/_cp6j8R_pD3j9LwONM_IkA/o.jpg"} className="card-img-top" alt="Card"/>
                <div class="card-body">
                  <h5 class="card-title">Mahaniyom</h5>
                  <p class="card-text">Our dream is to create homey Thai dishes and handcrafted cocktails to share with you!</p>
                  <Link class="btn suppose" to={"/FoodFinder/details/BRjvpMJ8C_1_mdB3n3tAgA"}>Go to Restaurant</Link>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
      <footer>
        <p>© 2023 FoodFinder Inc. All Rights Reserved. Contact at: evanritzcovan@gmail.com</p>
        <p>Presented by Evan Ritzcovan</p>
      </footer>
    </div>
  );
}

export default Home;
