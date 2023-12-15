import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import * as client from "./client";
import * as bookmarksClient from "../bookmark/client"
import "./index.css";

function Details() {
  const [ restaurant, setRestaurantDetails ] = useState(null);
  const { restaurantId } = useParams();
  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
  const [bookmarks, setBookmarks] = useState([]);
  var account = useSelector((state) => state.accountReducer.account);
  
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
              <button className="bookmark-button" onClick={accountBookmarksRestaurant}>
                Bookmark
              </button>
            </div>
            <div className="bookmark-container">
              <h2>Users who bookmarked this restaurant</h2>
              <ul className="user-bookmarks">
                { bookmarks.length === 0 ? ( <p>Nobody has bookmarked this restaurant!</p> ) : (
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
              {restaurant.rating && <p>Rating: {restaurant.rating} stars ({restaurant.review_count} reviews)</p>}
              {restaurant.hours && <p>Currently open: {restaurant.hours[0].is_open_now === true ? "Yes" : "No"}</p>}
              {restaurant.price && <p>Price: {restaurant.price}</p>}
              {restaurant.display_phone && <p>Phone: <a href={`tel:${restaurant.display_phone}`}>{restaurant.display_phone}</a></p>}
              {restaurant.display_address && <p>Address: {restaurant.location.display_address[0]}, {restaurant.location.display_address[1]}</p>}
              <div className="transactions">
                Available:
                <div style={{ textIndent: "20px" }}>
                  <ul>
                    {restaurant.transactions.map((transaction, index) => (
                      <li key={index}>{transaction.charAt(0).toUpperCase() + transaction.slice(1)}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="business-hours">
                Business Hours:
                {restaurant.hours && (
                  <ul style={{margin: "10px 0"}}>
                    {restaurant.hours[0].open.map((day) => (
                      <li key={day.day}>
                        <p>{days[day.day]}</p>
                        <div style={{ textIndent: "20px" }}>
                          {day.start.substring(0,2) > 12 ? ( <p>Open: {day.start.substring(0,2) - 12}:00 PM</p> ) : ( <p>Opens: {day.start.substring(0,2) - 0}:00 AM</p> )}
                          {day.end.substring(0,2) > 12 ? ( <p>Closed: {day.end.substring(0,2) - 12}:00 PM</p> ) : ( <p>Closes: {day.end.substring(0,2) - 0}:00 AM</p> )}
                        </div>
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
