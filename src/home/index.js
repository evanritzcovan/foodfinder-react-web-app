/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';
import './home.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Home() {
  let navigate = useNavigate();
  
  const routeChange = () => {
    let path = `/FoodFinder/search`;
    navigate(path);
  }

  return (
    <div className='ed-mg-t'>
      <div id="carouselFoodImages" class="carousel slide" data-bs-ride="true">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselImageIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselImageIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselImageIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className='carousel-inner'>
          <div className='carousel-item active'>
            <img width="600px" height="600px" src={"https://res.cloudinary.com/drmzaqhgv/image/upload/v1702240165/American-food-in-Canada_grwfll.jpg"} className="d-block w-100" alt="American Food"/>
          </div>
          <div className='carousel-item'>
            <img width="600px" height="600px" src={"https://res.cloudinary.com/drmzaqhgv/image/upload/v1702240239/Chinise-food_qworfl.jpg"} className="d-block w-100" alt="Chinese Food"/>
          </div>
          <div className='carousel-item'>
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
      <div className='float-center d-flex'>
        <h1 className='bg-c'>Discover your next meal with FoodFinder!</h1>

      </div>
      <div className="d-flex align-items-stretch search-bar">
        <div style={{ margin: "0 auto", display: "flex" }}>
          <button className="btn suppose btn-danger home-search-btn searchButton" onClick={routeChange}>
            Search!
            <FaSearch className="search-icon-spacing"/>
          </button>
        </div>
      </div>
      <h1 className="popular-header">Check out this month's most popular restaurants!</h1>
      <div class="container" style={{ paddingBottom: "100px" }}>
        <div class="card-container">
          <div class="card">
            <img src={"https://res.cloudinary.com/drmzaqhgv/image/upload/v1702240165/American-food-in-Canada_grwfll.jpg"} className="card-img-top" alt="Card"/>
            <div class="card-body">
              <h5 class="card-title">Restaurant Name</h5>
              <p class="card-text">Restaurant Description</p>
              <a href="#" class="btn suppose">Go to Restaurant</a>
            </div>
          </div>
          <div class="card">
            <img src={"https://res.cloudinary.com/drmzaqhgv/image/upload/v1702240165/American-food-in-Canada_grwfll.jpg"} className="card-img-top" alt="Card"/>
            <div class="card-body">
              <h5 class="card-title">Restaurant Name</h5>
              <p class="card-text">Restaurant Description</p>
              <a href="#" class="btn suppose">Go to Restaurant</a>
            </div>
          </div>
          <div class="card">
            <img src={"https://res.cloudinary.com/drmzaqhgv/image/upload/v1702240165/American-food-in-Canada_grwfll.jpg"} className="card-img-top" alt="Card"/>
            <div class="card-body">
              <h5 class="card-title">Restaurant Name</h5>
              <p class="card-text">Restaurant Description</p>
              <a href="#" class="btn suppose">Go to Restaurant</a>
            </div>
          </div>
          <div class="card">
            <img src={"https://res.cloudinary.com/drmzaqhgv/image/upload/v1702240165/American-food-in-Canada_grwfll.jpg"} className="card-img-top" alt="Card"/>
            <div class="card-body">
              <h5 class="card-title">Restaurant Name</h5>
              <p class="card-text">Restaurant Description</p>
              <a href="#" class="btn suppose">Go to Restaurant</a>
            </div>
          </div>
          <div class="card">
            <img src={"https://res.cloudinary.com/drmzaqhgv/image/upload/v1702240165/American-food-in-Canada_grwfll.jpg"} className="card-img-top" alt="Card"/>
            <div class="card-body">
              <h5 class="card-title">Restaurant Name</h5>
              <p class="card-text">Restaurant Description</p>
              <a href="#" class="btn suppose">Go to Restaurant</a>
            </div>
          </div>
          <div class="card">
            <img src={"https://res.cloudinary.com/drmzaqhgv/image/upload/v1702240165/American-food-in-Canada_grwfll.jpg"} className="card-img-top" alt="Card"/>
            <div class="card-body">
              <h5 class="card-title">Restaurant Name</h5>
              <p class="card-text">Restaurant Description</p>
              <a href="#" class="btn suppose">Go to Restaurant</a>
            </div>
          </div>
        </div>
        <footer>
          <p>© 2023 FoodFinder Inc. All Rights Reserved. Contact at: evanritzcovan@gmail.com</p>
          <p>Presented by Evan</p>
        </footer>
      </div>
    </div >
  );
}


export default Home;



