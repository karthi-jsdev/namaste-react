import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer"
import useOnlineStatus from "../utils/useOnlineStatus";
import { Link } from "react-router-dom";
const Body = () => {
  const [listOfRestaurant, setListOfRestaurants] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");
  const onlineStatus = useOnlineStatus();
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.9615398&lng=79.2961468&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      const json = await data.json();

      const restaurants =
        json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;

      if (restaurants) {
        setListOfRestaurants(restaurants);
        setFilteredRestaurant(restaurants); // Save all data for filtering
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  

  const filterTopRated = () => {
    const filteredList = listOfRestaurant.filter(
      (res) => res.info.avgRating > 4
    );
    setFilteredRestaurant(filteredList);
  };
  const setFilterSearchText = ((e) => {
    setSearchText(e.target.value)
  })
  const searchFilterText = (() => {
    const filteredList = listOfRestaurant.filter((res) =>{ return res.info.name.toLowerCase().includes(searchText.toLowerCase())});
    setFilteredRestaurant(filteredList);

  })
  if(onlineStatus === false){
    return (
      <h1>You are Offline, Please check your internet connection</h1>
    )
  }
  return filteredRestaurant.length === 0 ? (<Shimmer />) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input type="text" value={searchText} onChange={setFilterSearchText} />
          <button onClick={searchFilterText}>Search</button>
        </div>
        <button className="filter-btn"
          onClick={filterTopRated}
        >Top Rated Restaurant
        </button>
      </div>
      <div className="res-conatiner">
        {filteredRestaurant.map((restaurant, index) => {
          const { info } = restaurant;
          return <Link key={index} to={"/RestaurantMenu/"+info.id}><RestaurantCard  resData={info} /></Link>;
        })}
      </div>
    </div>
  );
};

export default Body;