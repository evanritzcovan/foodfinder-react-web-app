import React, { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import * as client from "./client";
import "./index.css";
import { FaStar } from "react-icons/fa";

function Search() {
    const { food, location } = useParams();
    const [searchConditions, setSearchConditions] = useState({food: food, location: location});
    const [results, setResults] = useState(null);
    const navigate = useNavigate();

    const fetchResults = async (searchConditions) => {
        const results = await client.findRestaurants(searchConditions);
        setResults(results);
        setSearchConditions(searchConditions);
    };

    useEffect(() => {
        if (food && location) {
            fetchResults({food, location});
        }
    }, [food, location]);

    return (
        <div>
            <h1 className="searchHeader">Discover your next meal with FoodFinder!</h1>
            <div className="d-flex align-items-stretch searchBar">
                <p className="control ed-b">
                    <input className="input" type="text"
                        style={{ height: '100%' }} 
                        placeholder="Restaurant/Food"
                        onChange={(e) => setSearchConditions({...searchConditions, food: e.target.value})}/>
                </p>
                <p className="control ed-b">
                    <input className="input" type="text"
                        style={{ height: '100%' }}
                        placeholder="Zipcode"
                        onChange={(e) => setSearchConditions({...searchConditions,location: e.target.value})}/>
                </p>
                <button className="btn suppose btn-success col-auto searchButton" 
                        onClick={() => navigate(`/FoodFinder/search/${searchConditions.food}/${searchConditions.location}`)}>
                    <FaSearch className="searchIcon"/>
                </button>
            </div>

            {results && (
                <h2 className="resultHeader">Here are the results from FoodFinder!</h2>
            )}
            <div className="searchResults">
                <ul className="list-group results">
                    {results &&
                        results.map((restaurant, index) => (
                            <li key={index} className="list-group-item">
                                <div className="d-flex">
                                    <div className="col-auto">
                                        <img className="restaurantImage" src={restaurant.image_url} alt="Restaurant"></img>
                                    </div>
                                    <div className="col m-4">
                                        <Link className="restaurantNameLink" to={`/FoodFinder/details/${restaurant.id}`}>
                                            <h3 className="restaurantName">
                                                Name: {restaurant.name}
                                                <button className="btn suppose position-absolute m-1">
                                                    <FaStar className="starIcon"/>
                                                </button>
                                            </h3>
                                        </Link>
                                        <p>Business Status: {restaurant.is_closed === false ? 'Opened' : 'Closed'}</p>
                                        <p>Rating: {`${restaurant.rating} stars`}</p>
                                        <p>Price: {restaurant.price ? restaurant.price : 'N/A'}</p>
                                        <p>Address: {`${restaurant.location.display_address[0]}, ${restaurant.location.display_address[1]}`}</p>
                                        <p>Phone: {restaurant.display_phone}</p>
                                    </div>
                                </div>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    );
}

export default Search;