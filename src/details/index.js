import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { Roles } from "../login/roles";
import * as client from "./client";
import * as bookmarksClient from '../bookmark/client'
import "./index.css";

function Details() {
  const [ restaurant, setRestaurantDetails ] = useState(null);
  const { restaurantId } = useParams();
  const daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
  const account = useSelector((state) => state.accountReducer.account);
  const [bookmarks, setBookmarks] = useState([]);
  
  const accountBookmarksRestaurant = async () => {
    const newBookmarks = await bookmarksClient.createUserBookmarksRestaurant(account._id, restaurantId, restaurant.name);
    setBookmarks([newBookmarks, ...bookmarks]);
  };

  const fetchRestaurant = async () => {
    const restaurant = await client.findRestaurantById(restaurantId);
    setRestaurantDetails(restaurant);
  };

  const fetchBookmarks = async () => {
    const bookmarks = await bookmarksClient.findUsersThatBookmarkRestaurant(restaurantId);
    setBookmarks(bookmarks);
  };

  useEffect(() => {
    fetchRestaurant();
    fetchBookmarks();
  });

  return (
    <div className="details-container">
      {restaurant && (
        <div className="restaurant-details">
          <div>
            <div className="restaurant-image">
              <img src={restaurant.image_url} alt={restaurant.name} />
            </div>
            <div className="button-container">
              {account.role !== Roles.ANONYMOUS && (
                <button className="bookmark-button" onClick={accountBookmarksRestaurant}>
                  Bookmark
                </button>
              )}
            </div>
            <div className="bookmark-container">
              <h2>Users who bookmarked this restaurant</h2>
              <ul className="user-bookmarks">
                { bookmarks.length === 0 ? ( <p>"Be the first one who bookmarked this restaurant in the FoodFinder!"</p> ) : (
                  bookmarks.map((bookmark, index) => (
                    <Link to={`/FoodFinder/profile/${bookmark.user._id}`} key={index}>
                      <li className="user-bookmark" key={index}>
                        {bookmark.user.username}
                      </li>
                    </Link>
                  ))
                )}
              </ul>
            </div>
          </div>
          <div className="restaurant-information">
            <Link className="restaurant-yelp-link" to={restaurant.url}>
              <h1>{restaurant.name}</h1> 
            </Link>
            
            <div className="additional-details">
              {restaurant.categories && <p>Category: {restaurant.categories[0].title}</p>}
              {restaurant.is_closed && (
                <p>Business Status: {restaurant.is_closed === false ? "Opened" : "Closed"}</p>
              )}
              {restaurant.rating && (
                <p>
                  Rating: {restaurant.rating} (Review Counts: {restaurant.review_count})
                </p>
              )}
              {restaurant.hours && (
                <p>Currently Open: {restaurant.hours[0].is_open_now === true ? "Opened" : "Closed"}</p>
              )}
              {restaurant.price && <p>Price: {restaurant.price}</p>}
              {restaurant.display_phone && <p>Phone: {restaurant.display_phone}</p>}
              {restaurant.display_address && <p>Address: {restaurant.location.display_address}</p>}
              <div className="transactions">
                Transactions:
                <ul>
                  {restaurant.transactions.map((transaction, index) => (
                    <li key={index}>{transaction}</li>
                  ))}
                </ul>
              </div>
              <div className="business-hours">
                Business Hours:
                {restaurant.hours && (
                  <ul>
                    {restaurant.hours[0].open.map((day) => (
                      <li key={day.day}>
                        <p>{daysOfWeek[day.day]}</p>
                        <p>Start Time: {day.start}</p>
                        <p>End Time: {day.end}</p>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Details;
