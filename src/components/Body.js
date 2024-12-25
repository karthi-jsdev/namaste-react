import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer"
const Body = () => {
  const [listOfRestaurant, setListOfRestaurants] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");
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
        json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants;

      if (restaurants) {
        console.log(restaurants);
        setListOfRestaurants(restaurants);
        setFilteredRestaurant(restaurants); 
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
          return <RestaurantCard key={index} resData={info} />;
        })}
      </div>
    </div>
  );
};

export default Body;