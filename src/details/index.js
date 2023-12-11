import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import * as client from "./client";
import "./index.css";


function Details() {
    const [ restaurant, setRestaurantDetails ] = useState();
    const { restaurantId } = useParams();
    const daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    
    const fetchRestaurant = async () => {
        const restaurant = await client.findRestaurantById(restaurantId);
        setRestaurantDetails(restaurant);
    }

    useEffect(() => {
        fetchRestaurant();
    });

    return (
        <div>
            { restaurant && (
                <div className="d-flex">
                    <div>
                        <img className="restaurantImage" src={restaurant.image_url} alt='Restaurant'></img>
                    </div>
                    <div>
                        <Link to={restaurant.url}><h1>{restaurant.name}</h1></Link>
                        <p>Category: {restaurant.categories[0].title}</p>
                        <p>Business Status: {restaurant.is_closed === false ? 'Opened' : 'Closed'}</p>
                        <p>Rating: {restaurant.rating} (Review Counts: {restaurant.review_count})</p>
                        <p>Currently Open: {restaurant.hours[0].is_open_now === true ? 'Opened' : 'Closed'}</p>
                        <p>Price: {restaurant.price}</p>
                        <p>Phone: {restaurant.display_phone}</p>
                        <p>Address: {restaurant.location.display_address}</p>
                        <div>
                            Transactions: 
                            <ul>
                                {restaurant.transactions.map((transaction, index) => (
                                    <li key={index}>{transaction}</li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            Business Hours:
                            {restaurant.hours && (
                                <ul>
                                    {restaurant.hours[0].open.map(day => (
                                        <li key={day.day}>
                                            <p>{daysOfWeek[day.day]}</p>
                                            <p>Start Time: {day.start}</p>
                                            <p>End Time: {day.end}</p>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                        {/* <pre>{JSON.stringify(restaurant, null, 2)}</pre> */}
                    </div>
                </div>
            )}
        </div>
    );
}

export default Details;