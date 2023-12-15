import React, { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { FaSearch } from "react-icons/fa";
import * as client from "./client";
import "./index.css";

function Search() {
  const { food, location } = useParams();
  const [searchConditions, setSearchConditions] = useState({ food: food, location: location });
  const [results, setResults] = useState(null);
  const navigate = useNavigate();
  var account = useSelector((state) => state.accountReducer.account);

  const fetchResults = async (searchConditions) => {
    const results = await client.findRestaurants(searchConditions);
    setResults(results);
    setSearchConditions(searchConditions);
  };

  useEffect(() => {
    if (food && location) {
      fetchResults({ food, location });
    }
  }, [food, location]);

  if (!account._id) {
    return (
      <div className="guest-container">
        <h3>Please <a href="#/FoodFinder/login">login / register</a> first to access this page.</h3>
      </div>
    );
  }

  return (
    <div className="search-container">
      <h1 className="search-header">Discover your next meal with FoodFinder!</h1>
      <div className="search-bar">
        <input
          className="input-food"
          type="text"
          placeholder="Restaurant/Food Type"
          value={searchConditions.food}
          onChange={(e) =>
            setSearchConditions({ ...searchConditions, food: e.target.value })
          }
        />
        <input
          className="input-location"
          type="text"
          placeholder="Location: Zipcode"
          value={searchConditions.location}
          onChange={(e) =>
            setSearchConditions({ ...searchConditions, location: e.target.value })
          }
        />
        <button className="search-button" onClick={() => navigate(`/FoodFinder/search/${searchConditions.food}/${searchConditions.location}`)}>
          <FaSearch className="search-icon"/>
        </button>
      </div>
      {results && <h2 className="result-header">Here are the results from FoodFinder!</h2>}
      <div className="search-results">
        <ul className="results-list">
          {results &&
            results.map((restaurant, index) => (
              <Link className="restaurant-name-link" to={`/FoodFinder/details/${restaurant.id}`}>
                <li key={index} className="result-item">
                  <div className="restaurant-details">
                    <div className="restaurant-image">
                      <img className="restaurant-image" src={restaurant.image_url} alt={`${restaurant.name}`}/>
                    </div>
                    <div className="restaurant-info">
                      <h3 className="restaurant-name">Name: {restaurant.name}</h3>
                      <p>Currently open: {restaurant.is_closed === false ? "Yes" : "No"}</p>
                      <p>Rating: {restaurant.rating} stars ({restaurant.review_count} reviews)</p>
                      <p>Price: {restaurant.price ? restaurant.price : "N/A"}</p>
                      <p>Address: {restaurant.location.display_address[0]}, {restaurant.location.display_address[1]}</p>
                      {restaurant.display_phone ? ( <p>Phone: <a href={`tel:${restaurant.display_phone}`}>{restaurant.display_phone}</a></p> ) : ( <p>Phone: N/A</p> )}
                    </div>
                  </div>
                </li>
              </Link>
            ))
          }
        </ul>
      </div>
    </div>
  );
}

export default Search;
